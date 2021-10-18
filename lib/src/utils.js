"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = exports.TRAILING_ARRAY_REGEX = void 0;
const utils_1 = require("@0x/utils");
const changeCase = __importStar(require("change-case"));
const cliFormat = __importStar(require("cli-format"));
const crypto_1 = require("crypto");
const ethereum_types_1 = require("ethereum-types");
const fs = __importStar(require("fs"));
const _ = __importStar(require("lodash"));
const path = __importStar(require("path"));
const to_snake_case_1 = __importDefault(require("to-snake-case"));
const types_1 = require("./types");
exports.TRAILING_ARRAY_REGEX = /\[\d*\]$/;
const TUPLE_TYPE_REGEX = '^tuple$';
// tslint:disable-next-line:no-unnecessary-class class-name
class utils {
    static solTypeToAssertion(solName, solType) {
        if (solType.match(exports.TRAILING_ARRAY_REGEX)) {
            const assertion = `assert.isArray('${solName}', ${solName});`;
            return assertion;
        }
        else {
            const solTypeRegexToTsType = [
                {
                    regex: '^u?int(8|16|32|256)?$',
                    assertion: `assert.isNumberOrBigNumber('${solName}', ${solName});`,
                },
                { regex: '^string$', assertion: `assert.isString('${solName}', ${solName});` },
                { regex: '^address$', assertion: `assert.isString('${solName}', ${solName});` },
                { regex: '^bool$', assertion: `assert.isBoolean('${solName}', ${solName});` },
                { regex: '^u?int\\d*$', assertion: `assert.isBigNumber('${solName}', ${solName});` },
                { regex: '^bytes\\d*$', assertion: `assert.isString('${solName}', ${solName});` },
            ];
            for (const regexAndTxType of solTypeRegexToTsType) {
                const { regex, assertion } = regexAndTxType;
                if (solType.match(regex)) {
                    return assertion;
                }
            }
            if (solType.match(TUPLE_TYPE_REGEX)) {
                // NOTE(fabio): Omit assertions for complex types since this would require taking a type
                // definition and generating an instance of that type programmatically and checking it
                // against a list of know json-schemas in order to discover the correct schema assertion
                // to use. This approach is brittle and error-prone.
                const assertion = '';
                return assertion;
            }
            throw new Error(`Unknown Solidity type found: ${solType}`);
        }
    }
    static solTypeToTsType(paramKind, backend, solType, components) {
        if (solType.match(exports.TRAILING_ARRAY_REGEX)) {
            const arrayItemSolType = solType.replace(exports.TRAILING_ARRAY_REGEX, '');
            const arrayItemTsType = utils.solTypeToTsType(paramKind, backend, arrayItemSolType, components);
            const arrayTsType = utils.isUnionType(arrayItemTsType) || utils.isObjectType(arrayItemTsType)
                ? `Array<${arrayItemTsType}>`
                : `${arrayItemTsType}[]`;
            return arrayTsType;
        }
        else {
            let solTypeRegexToTsType;
            if (backend === types_1.ContractsBackend.Ethers || backend === types_1.ContractsBackend.Web3) {
                solTypeRegexToTsType = [
                    { regex: '^string$', tsType: 'string' },
                    { regex: '^address$', tsType: 'string' },
                    { regex: '^bool$', tsType: 'boolean' },
                    { regex: '^u?int\\d*$', tsType: 'BN' },
                    { regex: '^bytes\\d*$', tsType: 'string' },
                ];
            }
            else {
                solTypeRegexToTsType = [
                    { regex: '^string$', tsType: 'string' },
                    { regex: '^address$', tsType: 'string' },
                    { regex: '^bool$', tsType: 'boolean' },
                    { regex: '^u?int\\d*$', tsType: 'BigNumber' },
                    { regex: '^bytes\\d*$', tsType: 'string' },
                ];
            }
            if (paramKind === types_1.ParamKind.Input) {
                // web3 and ethers allow to pass those as numbers instead of bignumbers
                solTypeRegexToTsType.unshift({
                    regex: '^u?int(8|16|32)?$',
                    tsType: 'number|BigNumber|BN',
                });
                if (backend === types_1.ContractsBackend.Tron) {
                    solTypeRegexToTsType.unshift({
                        regex: '^u?int\\d*$',
                        tsType: 'string',
                    });
                }
            }
            if (backend === types_1.ContractsBackend.Ethers && paramKind === types_1.ParamKind.Output) {
                // ethers-contracts automatically converts small BigNumbers to numbers
                solTypeRegexToTsType.unshift({
                    regex: '^u?int(8|16|32|48)?$',
                    tsType: 'number',
                });
            }
            for (const regexAndTxType of solTypeRegexToTsType) {
                const { regex, tsType } = regexAndTxType;
                if (solType.match(regex)) {
                    return tsType;
                }
            }
            if (solType.match(TUPLE_TYPE_REGEX)) {
                const componentsType = _.map(components, component => {
                    const componentValueType = utils.solTypeToTsType(paramKind, backend, component.type, component.components);
                    const componentType = `${component.name}: ${componentValueType}`;
                    return componentType;
                });
                const tsType = `{${componentsType.join(';')}}`;
                return tsType;
            }
            throw new Error(`❗️ Unknown Solidity type found: ${solType}`);
        }
    }
    static solTypeToPyType(dataItem) {
        const solType = dataItem.type;
        const tyName = dataItem.name;
        if (solType.match(exports.TRAILING_ARRAY_REGEX)) {
            Object.assign(dataItem, {
                type: dataItem.type.replace(exports.TRAILING_ARRAY_REGEX, ''),
            });
            const arrayItemPyType = utils.solTypeToPyType(dataItem);
            const converted = `List[${arrayItemPyType}]`;
            utils_1.logUtils.log(`🔄  Checking array items: ${tyName}, ${solType} ${dataItem.type} --> ${converted}`);
            return converted;
        }
        else {
            const solTypeRegexToPyType = [
                { regex: '^string$', pyType: 'str' },
                { regex: '^address$', pyType: 'str' },
                { regex: '^bool$', pyType: 'bool' },
                { regex: '^u?int\\d*$', pyType: 'int' },
                { regex: '^bytes\\d*$', pyType: 'Union[bytes, str]' },
            ];
            for (const regexAndTxType of solTypeRegexToPyType) {
                const { regex, pyType } = regexAndTxType;
                if (solType.match(regex)) {
                    return pyType;
                }
            }
            if (solType.match(TUPLE_TYPE_REGEX)) {
                return utils.makePythonTupleName(dataItem);
            }
            throw new Error(`❗️ Unknown Solidity type found: ${solType}`);
        }
    }
    static isUnionType(tsType) {
        return tsType === 'number|BigNumber|BN';
    }
    static isObjectType(tsType) {
        return /^{.*}$/.test(tsType);
    }
    static getPartialNameFromFileName(filename) {
        const name = path.parse(filename).name;
        return name;
    }
    static getNamedContent(filename) {
        const name = utils.getPartialNameFromFileName(filename);
        try {
            const content = fs.readFileSync(filename).toString();
            return {
                name,
                content,
            };
        }
        catch (err) {
            throw new Error(`🪗  Failed to read ${filename}: ${err}`);
        }
    }
    static getEmptyConstructor() {
        return {
            type: ethereum_types_1.AbiType.Constructor,
            stateMutability: 'nonpayable',
            payable: false,
            inputs: [],
        };
    }
    static makeOutputFileName(name) {
        let fileName = to_snake_case_1.default(name);
        // HACK: Snake case doesn't make a lot of sense for abbreviated names but we can't reliably detect abbreviations
        // so we special-case the abbreviations we use.
        fileName = fileName
            .replace('z_r_x', 'zrx')
            .replace('e_r_c', 'erc')
            .replace('d_a_p', 'dap')
            .replace('d_e_w', 'dew')
            .replace('b_t_c', 'btc');
        return fileName;
    }
    static writeOutputFile(filePath, renderedTsCode) {
        fs.writeFileSync(filePath, renderedTsCode);
    }
    static isOutputFileUpToDate(outputFile, sourceFiles) {
        const sourceFileModTimeMs = sourceFiles.map(file => fs.statSync(file).mtimeMs);
        try {
            const outFileModTimeMs = fs.statSync(outputFile).mtimeMs;
            return sourceFileModTimeMs.find(sourceMs => sourceMs > outFileModTimeMs) === undefined;
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            else {
                throw err;
            }
        }
    }
    /**
     * simply concatenate all of the names of the components, and convert that
     * concatenation into PascalCase to conform to Python convention.
     */
    static makePythonTupleName(tuple) {
        if (tuple.internalType !== undefined) {
            return tuple.internalType
                .replace('struct ', '')
                .replace('.', '')
                .replace(/\[\]/g, '');
        }
        else {
            const tupleComponents = tuple.components;
            const lengthOfHashSuffix = 8;
            const hashName = crypto_1.createHash('MD5')
                .update(_.map(tupleComponents, component => component.name).join('_'))
                .digest()
                .toString('hex')
                .substring(0, lengthOfHashSuffix);
            return `Tuple0x${hashName}`;
        }
    }
    /**
     * @returns a string that is a Python code snippet that's intended to be
     * used as the second parameter to a TypedDict() instantiation; value
     * looks like "{ 'python_dict_key': python_type, ... }".
     */
    static makePythonTupleClassBody(tupleComponents) {
        let toReturn = '';
        for (const tupleComponent of tupleComponents) {
            toReturn = `${toReturn}\n\n    ${tupleComponent.name}: ${utils.solTypeToPyType(tupleComponent)}`;
        }
        toReturn = `${toReturn}`;
        return toReturn;
    }
    /**
     * used to generate Python-parseable identifier names for parameters to
     * contract methods.
     */
    static toPythonIdentifier(input) {
        let snakeCased = changeCase.snake(input);
        const pythonReservedWords = [
            'False',
            'None',
            'True',
            'and',
            'as',
            'assert',
            'break',
            'class',
            'continue',
            'def',
            'del',
            'elif',
            'else',
            'except',
            'finally',
            'for',
            'from',
            'global',
            'if',
            'import',
            'in',
            'is',
            'lambda',
            'nonlocal',
            'not',
            'or',
            'pass',
            'raise',
            'return',
            'try',
            'while',
            'with',
            'yield',
        ];
        const pythonBuiltins = [
            'abs',
            'delattr',
            'hash',
            'memoryview',
            'set',
            'all',
            'dict',
            'help',
            'min',
            'setattr',
            'any',
            'dir',
            'hex',
            'next',
            'slice',
            'ascii',
            'divmod',
            'id',
            'object',
            'sorted',
            'bin',
            'enumerate',
            'input',
            'oct',
            'staticmethod',
            'bool',
            'eval',
            'int',
            'open',
            'str',
            'breakpoint',
            'exec',
            'isinstance',
            'ord',
            'sum',
            'bytearray',
            'filter',
            'issubclass',
            'pow',
            'super',
            'bytes',
            'float',
            'iter',
            'print',
            'tuple',
            'callable',
            'format',
            'len',
            'property',
            'type',
            'chr',
            'frozenset',
            'list',
            'range',
            'vars',
            'classmethod',
            'getattr',
            'locals',
            'repr',
            'zip',
            'compile',
            'globals',
            'map',
            'reversed',
            '__import__',
            'complex',
            'hasattr',
            'max',
            'round',
        ];
        if (pythonReservedWords.includes(snakeCased) || pythonBuiltins.includes(snakeCased)) {
            snakeCased = `_${snakeCased}`;
        }
        // Retain trailing underscores.
        const m = /^.+?(_*)$/.exec(input);
        if (m) {
            snakeCased = `${snakeCased}${m[1]}`;
        }
        return snakeCased;
    }
    /**
     * Python docstrings are used to generate documentation, and that
     * transformation supports annotation of parameters, return types, etc, via
     * re-Structured Text "interpreted text roles".  Per the pydocstyle linter,
     * such annotations should be line-wrapped at 80 columns, with a hanging
     * indent of 4 columns.  This function simply returns an accordingly
     * wrapped and hanging-indented `role` string.
     */
    static wrapPythonDocstringRole(docstring, indent) {
        const columnsPerIndent = 4;
        const columnsPerRow = 80;
        return cliFormat.wrap(docstring, {
            paddingLeft: ' '.repeat(indent),
            width: columnsPerRow,
            ansi: false,
            hangingIndent: ' '.repeat(columnsPerIndent),
        });
    }
    static extractTuples(parameter, tupleBodies, // output
    tupleDependencies) {
        if (parameter.type === 'tuple' || parameter.type === 'tuple[]') {
            const tupleDataItem = parameter; // tslint:disable-line:no-unnecessary-type-assertion
            // without the above cast (which tslint complains about), tsc says
            //     Argument of type 'DataItem[] | undefined' is not assignable to parameter of type 'DataItem[]'.
            //     Type 'undefined' is not assignable to type 'DataItem[]'
            // when the code below tries to access tupleDataItem.components.
            const pythonTupleName = utils.makePythonTupleName(tupleDataItem);
            tupleBodies[pythonTupleName] = utils.makePythonTupleClassBody(tupleDataItem.components);
            for (const component of tupleDataItem.components) {
                if (component.type === 'tuple' || component.type === 'tuple[]') {
                    tupleDependencies.push([
                        utils.makePythonTupleName(component),
                        pythonTupleName,
                    ]);
                    utils.extractTuples(component, tupleBodies, tupleDependencies);
                }
            }
        }
    }
    static makeLanguageSpecificName(args, methodName) {
        if (args.language === 'Python') {
            let snakeCased = changeCase.snake(methodName);
            // Move leading underscores to the end.
            const m = /^(_*).+?(_*)$/.exec(methodName);
            if (m) {
                snakeCased = `${snakeCased}${m[1] || m[2]}`;
            }
            return snakeCased;
        }
        if (args.language === 'Typescript') {
            let snakeCased = changeCase.snake(methodName);
            // Move leading underscores to the end.
            const m = /^(_*).+?(_*)$/.exec(methodName);
            if (m) {
                snakeCased = `${snakeCased}${m[1] || m[2]}`;
            }
            return snakeCased;
        }
        return methodName;
    }
}
exports.utils = utils;
//# sourceMappingURL=utils.js.map