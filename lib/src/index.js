#!/usr/bin/env node
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
const utils_1 = require("@0x/utils");
const chalk_1 = __importDefault(require("chalk"));
const child_process_1 = require("child_process");
const glob_1 = require("glob");
const Handlebars = __importStar(require("handlebars"));
const _ = __importStar(require("lodash"));
const mkdirp = __importStar(require("mkdirp"));
const path_1 = __importDefault(require("path"));
const yargs = __importStar(require("yargs"));
const pythonssx_1 = require("./pythonssx");
const types_1 = require("./types");
const typscriptssx_1 = require("./typscriptssx");
const utils_2 = require("./utils");
const ABI_TYPE_CONSTRUCTOR = 'constructor';
const ABI_TYPE_METHOD = 'function';
const ABI_TYPE_EVENT = 'event';
const DEFAULT_CHAIN_ID = 1;
const DEFAULT_BACKEND = 'web3';
const argsCommand = yargs
    .option('abibins', {
    describe: 'Glob pattern to search for ABI JSON files that comes with with abi and bin.',
    type: 'string',
    demandOption: true,
})
    .option('output', {
    alias: ['o', 'out'],
    describe: 'Folder where to put the output files',
    type: 'string',
    normalize: true,
    demandOption: true,
})
    .option('partials', {
    describe: 'Glob pattern for the partial template files',
    type: 'string',
    implies: 'template',
})
    .option('template', {
    describe: 'Path for the main template file that will be used to generate each contract. Default templates are used based on the --language parameter.',
    type: 'string',
    normalize: true,
})
    .option('backend', {
    describe: `The backing Ethereum library your app uses. For TypeScript, either 'web3' or 'ethers'. Ethers auto-converts small ints to numbers whereas Web3 doesn't. For Python, the only possibility is Web3.py`,
    type: 'string',
    choices: [types_1.ContractsBackend.Web3, types_1.ContractsBackend.Ethers, types_1.ContractsBackend.Tron],
    default: DEFAULT_BACKEND,
})
    .option('chain-id', {
    describe: 'ID of the chain where contract ABIs are nested in artifacts',
    type: 'number',
    default: DEFAULT_CHAIN_ID,
})
    .option('language', {
    describe: 'Language of output file to generate',
    type: 'string',
    choices: ['TypeScript', 'Python'],
    default: 'TypeScript',
})
    .example('$0 --abibins \'src/artifacts/**/Token\' --out \'src/contracts/generated/\' --debug --partials \'src/templates/partials/**/*.handlebars\' --template \'src/templates/contract.handlebars\'', 'The above is the sample usage');
const args = argsCommand.argv;
const templateFilename = args.template || `${__dirname}/../../templates/${args.language}/contract.handlebars`;
const mainTemplate = utils_2.utils.getNamedContent(templateFilename);
const template = Handlebars.compile(mainTemplate.content);
const abiFileNames = glob_1.sync(args.abibins, {});
const partialTemplateFileNames = glob_1.sync(args.partials || `${__dirname}/../../templates/${args.language}/partials/**/*.handlebars`);
function registerPartials() {
    utils_1.logUtils.log(`Found ${chalk_1.default.green(`${partialTemplateFileNames.length}`)} ${chalk_1.default.bold('partial')} templates`);
    for (const partialTemplateFileName of partialTemplateFileNames) {
        const namedContent = utils_2.utils.getNamedContent(partialTemplateFileName);
        Handlebars.registerPartial(namedContent.name, namedContent.content);
    }
}
if (args.language === 'TypeScript') {
    typscriptssx_1.TypeScriptConvertor.register(args.backend);
}
else if (args.language === 'Python') {
    pythonssx_1.PythonConvertor.register();
}
registerPartials();
if (_.isEmpty(abiFileNames)) {
    utils_1.logUtils.log(`${chalk_1.default.red(`🛠 No ABI files found.`)}`);
    utils_1.logUtils.log(`⚠️ Please make sure you've passed the correct folder name and that the files have
               ${chalk_1.default.bold('*.json')} extensions`);
    process.exit(1);
}
else {
    utils_1.logUtils.log(`Found ${chalk_1.default.green(`${abiFileNames.length}`)} ${chalk_1.default.bold('ABI')} files`);
    mkdirp.sync(args.output);
}
for (const abiFileName of abiFileNames) {
    const namedContent = utils_2.utils.getNamedContent(abiFileName);
    const binFile = abiFileName.replace(/\.[^.]+$/, '.bin');
    const binFileContent = utils_2.utils.getNamedContent(binFile);
    const className = path_1.default.parse(abiFileName).name;
    utils_1.logUtils.log(`⚙️  Processing: ${className} - ${chalk_1.default.bold(namedContent.name)}...`);
    let parsedContent;
    try {
        parsedContent = JSON.parse(namedContent.content);
    }
    catch (e) {
        utils_1.logUtils.log('parse incorrect. ❌');
    }
    let ABI;
    let devdoc;
    if (_.isArray(parsedContent)) {
        ABI = parsedContent; // ABI file
    }
    else if (parsedContent.abi !== undefined) {
        ABI = parsedContent.abi; // Truffle artifact
    }
    else if (parsedContent.compilerOutput.abi !== undefined) {
        ABI = parsedContent.compilerOutput.abi; // 0x artifact
        if (parsedContent.compilerOutput.devdoc !== undefined) {
            devdoc = parsedContent.compilerOutput.devdoc;
        }
    }
    if (ABI === undefined) {
        utils_1.logUtils.log(`${chalk_1.default.red(`❌ ABI not found in ${abiFileName}.`)}`);
        utils_1.logUtils.log(`⚠️ Please make sure your ABI file is either an array with ABI entries or a truffle artifact or tron sol-compiler artifact`);
        process.exit(1);
    }
    const outFileName = utils_2.utils.makeOutputFileName(namedContent.name);
    const outFilePath = (() => {
        if (args.language === 'TypeScript') {
            return `${args.output}/${outFileName}.ts`;
        }
        else if (args.language === 'Python') {
            const directory = `${args.output}/${outFileName}`;
            mkdirp.sync(directory);
            return `${directory}/__init__.py`;
        }
        else {
            throw new Error(` ❌ Unexpected language '${args.language}'`);
        }
    })();
    if (utils_2.utils.isOutputFileUpToDate(outFilePath, [abiFileName, templateFilename, ...partialTemplateFileNames])) {
        utils_1.logUtils.log(`🧩  Already up to date: ${chalk_1.default.bold(outFilePath)}`);
        continue;
    }
    let deployedBytecode;
    try {
        deployedBytecode = binFileContent.content;
        if (deployedBytecode === '' ||
            deployedBytecode === undefined ||
            deployedBytecode === '0x' ||
            deployedBytecode === '0x00') {
            throw new Error();
        }
    }
    catch (err) {
        utils_1.logUtils.log(`Couldn't find deployedBytecode for ${chalk_1.default.bold(namedContent.name)}, using undefined. Found [${deployedBytecode}]`);
        deployedBytecode = undefined;
    }
    let ctor = ABI.find((abi) => abi.type === ABI_TYPE_CONSTRUCTOR);
    if (ctor === undefined) {
        ctor = utils_2.utils.getEmptyConstructor(); // The constructor exists, but it's implicit in JSON's ABI definition
    }
    const methodAbis = ABI.filter((abi) => abi.type === ABI_TYPE_METHOD);
    const sanitizedMethodAbis = utils_1.abiUtils.renameOverloadedMethods(methodAbis);
    const methodsData = _.map(methodAbis, (methodAbi, methodAbiIndex) => {
        _.forEach(methodAbi.inputs, (input, inputIndex) => {
            if (_.isEmpty(input.name)) {
                // Auto-generated getters don't have parameter names
                input.name = `index_${inputIndex}`;
            }
        });
        const functionSignature = new utils_1.AbiEncoder.Method(methodAbi).getSignature();
        const languageSpecificName = utils_2.utils.makeLanguageSpecificName(args, sanitizedMethodAbis[methodAbiIndex].name);
        // This will make templates simpler
        const methodData = Object.assign(Object.assign({}, methodAbi), { singleReturnValue: methodAbi.outputs.length === 1, hasReturnValue: methodAbi.outputs.length > 0, hasInputValue: methodAbi.inputs.length > 0, singleInputValue: methodAbi.inputs.length === 1, hasOutputs: _.has(methodAbi, 'outputs'), hasInputs: _.has(methodAbi, 'inputs'), isConstant: _.has(methodAbi, 'constant') && methodAbi.constant, languageSpecificName,
            functionSignature, isNonpayable: _.has(methodAbi, 'stateMutability') && methodAbi.stateMutability === 'nonpayable', isPayable: _.has(methodAbi, 'stateMutability') && methodAbi.stateMutability === 'payable', isView: _.has(methodAbi, 'stateMutability') && methodAbi.stateMutability === 'view', isPure: _.has(methodAbi, 'stateMutability') && methodAbi.stateMutability === 'pure', devdoc: devdoc ? devdoc.methods[functionSignature] : undefined });
        return methodData;
    });
    const eventAbis = ABI.filter((abi) => abi.type === ABI_TYPE_EVENT);
    const eventsData = _.map(eventAbis, (eventAbi, eventAbiIndex) => {
        const languageSpecificName = utils_2.utils.makeLanguageSpecificName(args, eventAbi.name);
        const eventData = Object.assign(Object.assign({}, eventAbi), { languageSpecificName });
        return eventData;
    });
    const shouldIncludeBytecode = methodsData.find(methodData => methodData.stateMutability === 'pure') !== undefined;
    const contextData = {
        contractName: namedContent.name,
        ctor,
        deployedBytecode: shouldIncludeBytecode ? deployedBytecode : undefined,
        ABI: ABI,
        ABIString: JSON.stringify(ABI),
        methods: methodsData,
        events: eventsData,
        debug: args.debug,
    };
    const renderedCode = template(contextData);
    utils_2.utils.writeOutputFile(outFilePath, renderedCode);
    if (args.language === 'Python') {
        // use command-line tool black to reformat, if its available
        try {
            child_process_1.execSync(`black --line-length 79 ${outFilePath}`);
        }
        catch (e) {
            const BLACK_RC_CANNOT_PARSE = 123; // empirical black exit code
            if (e.status === BLACK_RC_CANNOT_PARSE) {
                utils_1.logUtils.warn('❌ Failed to reformat generated Python with black.  Exception thrown by execSync("black ...") follows.');
                throw e;
            }
            else {
                utils_1.logUtils.warn('🪗 Failed to invoke black. Do you have it installed? Proceeding anyways...');
            }
        }
    }
    utils_1.logUtils.log(`Created: ${chalk_1.default.bold(outFilePath)}`);
}
//# sourceMappingURL=index.js.map