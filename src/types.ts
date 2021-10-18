import { ContractAbi, EventAbi, MethodAbi } from 'ethereum-types';
import * as yargs from 'yargs';
export enum ParamKind {
    Input = 'input',
    Output = 'output',
}

export enum ContractsBackend {
    Web3 = 'web3',
    Ethers = 'ethers',
    Tron = 'webtron',
}

export interface Method extends MethodAbi {
    singleReturnValue: boolean;
    hasReturnValue: boolean;
    languageSpecificName: string;
    functionSignature: string;
}

export interface ContextData {
    contractName: string;
    ABI: ContractAbi;
    methods: Method[];
    events: EventAbi[];
}

export interface Args extends yargs.Arguments {
    language: string;
    abibins: string;
    output: string;
    partials: string;
    template: string;
    backend: ContractsBackend;
    'chain-id': number;
}
