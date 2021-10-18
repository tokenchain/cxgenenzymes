import { ConstructorAbi, DataItem } from 'ethereum-types';
import { Args, ContractsBackend, ParamKind } from './types';
export declare const TRAILING_ARRAY_REGEX: RegExp;
export declare class utils {
    static solTypeToAssertion(solName: string, solType: string): string;
    static solTypeToTsType(paramKind: ParamKind, backend: ContractsBackend, solType: string, components?: DataItem[]): string;
    static solTypeToPyType(dataItem: DataItem): string;
    static isUnionType(tsType: string): boolean;
    static isObjectType(tsType: string): boolean;
    static getPartialNameFromFileName(filename: string): string;
    static getNamedContent(filename: string): {
        name: string;
        content: string;
    };
    static getEmptyConstructor(): ConstructorAbi;
    static makeOutputFileName(name: string): string;
    static writeOutputFile(filePath: string, renderedTsCode: string): void;
    static isOutputFileUpToDate(outputFile: string, sourceFiles: string[]): boolean;
    /**
     * simply concatenate all of the names of the components, and convert that
     * concatenation into PascalCase to conform to Python convention.
     */
    static makePythonTupleName(tuple: DataItem): string;
    /**
     * @returns a string that is a Python code snippet that's intended to be
     * used as the second parameter to a TypedDict() instantiation; value
     * looks like "{ 'python_dict_key': python_type, ... }".
     */
    static makePythonTupleClassBody(tupleComponents: DataItem[]): string;
    /**
     * used to generate Python-parseable identifier names for parameters to
     * contract methods.
     */
    static toPythonIdentifier(input: string): string;
    /**
     * Python docstrings are used to generate documentation, and that
     * transformation supports annotation of parameters, return types, etc, via
     * re-Structured Text "interpreted text roles".  Per the pydocstyle linter,
     * such annotations should be line-wrapped at 80 columns, with a hanging
     * indent of 4 columns.  This function simply returns an accordingly
     * wrapped and hanging-indented `role` string.
     */
    static wrapPythonDocstringRole(docstring: string, indent: number): string;
    static extractTuples(parameter: DataItem, tupleBodies: {
        [pythonTupleName: string]: string;
    }, // output
    tupleDependencies: Array<[string, string]>): void;
    static makeLanguageSpecificName(args: Args, methodName: string): string;
}
//# sourceMappingURL=utils.d.ts.map