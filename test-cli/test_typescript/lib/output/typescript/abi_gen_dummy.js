"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AbiGenDummyContract = exports.AbiGenDummyEvents = void 0;
// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma enum-naming
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable
var base_contract_1 = require("@0x/base-contract");
var json_schemas_1 = require("@0x/json-schemas");
var utils_1 = require("@0x/utils");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var assert_1 = require("@0x/assert");
var ethers = require("ethers");
var AbiGenDummyEvents;
(function (AbiGenDummyEvents) {
    AbiGenDummyEvents["SimpleEvent"] = "SimpleEvent";
    AbiGenDummyEvents["Withdrawal"] = "Withdrawal";
})(AbiGenDummyEvents = exports.AbiGenDummyEvents || (exports.AbiGenDummyEvents = {}));
/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var AbiGenDummyContract = /** @class */ (function (_super) {
    __extends(AbiGenDummyContract, _super);
    function AbiGenDummyContract(address, supportedProvider, txDefaults, logDecodeDependencies, deployedBytecode) {
        if (deployedBytecode === void 0) { deployedBytecode = AbiGenDummyContract.deployedBytecode; }
        var _this = _super.call(this, 'AbiGenDummy', AbiGenDummyContract.ABI(), address, supportedProvider, txDefaults, logDecodeDependencies, deployedBytecode) || this;
        _this._methodABIIndex = {};
        utils_1.classUtils.bindAll(_this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
        _this._subscriptionManager = new base_contract_1.SubscriptionManager(AbiGenDummyContract.ABI(), _this._web3Wrapper);
        AbiGenDummyContract.ABI().forEach(function (item, index) {
            if (item.type === 'function') {
                var methodAbi = item;
                _this._methodABIIndex[methodAbi.name] = index;
            }
        });
        return _this;
    }
    AbiGenDummyContract.deployFrom0xArtifactAsync = function (artifact, supportedProvider, txDefaults, logDecodeDependencies) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, bytecode, abi, logDecodeDependenciesAbiOnly, _i, _a, key;
            return __generator(this, function (_b) {
                assert_1.assert.doesConformToSchema('txDefaults', txDefaults, json_schemas_1.schemas.txDataSchema, [
                    json_schemas_1.schemas.addressSchema,
                    json_schemas_1.schemas.numberSchema,
                    json_schemas_1.schemas.jsNumber,
                ]);
                if (artifact.compilerOutput === undefined) {
                    throw new Error('Compiler output not found in the artifact file');
                }
                provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
                bytecode = artifact.compilerOutput.evm.bytecode.object;
                abi = artifact.compilerOutput.abi;
                logDecodeDependenciesAbiOnly = {};
                if (Object.keys(logDecodeDependencies) !== undefined) {
                    for (_i = 0, _a = Object.keys(logDecodeDependencies); _i < _a.length; _i++) {
                        key = _a[_i];
                        logDecodeDependenciesAbiOnly[key] = logDecodeDependencies[key].compilerOutput.abi;
                    }
                }
                return [2 /*return*/, AbiGenDummyContract.deployAsync(bytecode, abi, provider, txDefaults, logDecodeDependenciesAbiOnly)];
            });
        });
    };
    AbiGenDummyContract.deployWithLibrariesFrom0xArtifactAsync = function (artifact, libraryArtifacts, supportedProvider, txDefaults, logDecodeDependencies) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, abi, logDecodeDependenciesAbiOnly, _i, _a, key, libraryAddresses, bytecode;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        assert_1.assert.doesConformToSchema('txDefaults', txDefaults, json_schemas_1.schemas.txDataSchema, [
                            json_schemas_1.schemas.addressSchema,
                            json_schemas_1.schemas.numberSchema,
                            json_schemas_1.schemas.jsNumber,
                        ]);
                        if (artifact.compilerOutput === undefined) {
                            throw new Error('Compiler output not found in the artifact file');
                        }
                        provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
                        abi = artifact.compilerOutput.abi;
                        logDecodeDependenciesAbiOnly = {};
                        if (Object.keys(logDecodeDependencies) !== undefined) {
                            for (_i = 0, _a = Object.keys(logDecodeDependencies); _i < _a.length; _i++) {
                                key = _a[_i];
                                logDecodeDependenciesAbiOnly[key] = logDecodeDependencies[key].compilerOutput.abi;
                            }
                        }
                        return [4 /*yield*/, AbiGenDummyContract._deployLibrariesAsync(artifact, libraryArtifacts, new web3_wrapper_1.Web3Wrapper(provider), txDefaults)];
                    case 1:
                        libraryAddresses = _b.sent();
                        bytecode = base_contract_1.linkLibrariesInBytecode(artifact, libraryAddresses);
                        return [2 /*return*/, AbiGenDummyContract.deployAsync(bytecode, abi, provider, txDefaults, logDecodeDependenciesAbiOnly)];
                }
            });
        });
    };
    AbiGenDummyContract.deployAsync = function (bytecode, abi, supportedProvider, txDefaults, logDecodeDependencies) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, constructorAbi, iface, deployInfo, txData, web3Wrapper, txDataWithDefaults, txHash, txReceipt, contractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert_1.assert.isHexString('bytecode', bytecode);
                        assert_1.assert.doesConformToSchema('txDefaults', txDefaults, json_schemas_1.schemas.txDataSchema, [
                            json_schemas_1.schemas.addressSchema,
                            json_schemas_1.schemas.numberSchema,
                            json_schemas_1.schemas.jsNumber,
                        ]);
                        provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
                        constructorAbi = base_contract_1.BaseContract._lookupConstructorAbi(abi);
                        base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [], base_contract_1.BaseContract._bigNumberToString);
                        iface = new ethers.utils.Interface(abi);
                        deployInfo = iface.deployFunction;
                        txData = deployInfo.encode(bytecode, []);
                        web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
                        return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToContractTxDataAsync(__assign({ data: txData }, txDefaults), web3Wrapper.estimateGasAsync.bind(web3Wrapper))];
                    case 1:
                        txDataWithDefaults = _a.sent();
                        return [4 /*yield*/, web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                    case 2:
                        txHash = _a.sent();
                        utils_1.logUtils.log("transactionHash: " + txHash);
                        return [4 /*yield*/, web3Wrapper.awaitTransactionSuccessAsync(txHash)];
                    case 3:
                        txReceipt = _a.sent();
                        utils_1.logUtils.log("AbiGenDummy successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new AbiGenDummyContract(txReceipt.contractAddress, provider, txDefaults, logDecodeDependencies);
                        contractInstance.constructorArgs = [];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    /**
     * @returns      The contract ABI
     */
    AbiGenDummyContract.ABI = function () {
        var abi = [
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'someBytes',
                        type: 'bytes',
                        indexed: false,
                    },
                    {
                        name: 'someString',
                        type: 'string',
                        indexed: false,
                    },
                ],
                name: 'SimpleEvent',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: '_owner',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: '_value',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Withdrawal',
                outputs: [],
                type: 'event',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'a',
                        type: 'bytes[]',
                    },
                ],
                name: 'acceptsAnArrayOfBytes',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'a',
                        type: 'bytes',
                    },
                ],
                name: 'acceptsBytes',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'complexInput',
                        type: 'tuple',
                        components: [
                            {
                                name: 'foo',
                                type: 'uint256',
                            },
                            {
                                name: 'bar',
                                type: 'bytes',
                            },
                            {
                                name: 'car',
                                type: 'string',
                            },
                        ],
                    },
                ],
                name: 'complexInputComplexOutput',
                outputs: [
                    {
                        name: '',
                        type: 'tuple',
                        components: [
                            {
                                name: 'input',
                                type: 'tuple',
                                components: [
                                    {
                                        name: 'foo',
                                        type: 'uint256',
                                    },
                                    {
                                        name: 'bar',
                                        type: 'bytes',
                                    },
                                    {
                                        name: 'car',
                                        type: 'string',
                                    },
                                ],
                            },
                            {
                                name: 'lorem',
                                type: 'bytes',
                            },
                            {
                                name: 'ipsum',
                                type: 'bytes',
                            },
                            {
                                name: 'dolor',
                                type: 'string',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'hash',
                        type: 'bytes32',
                    },
                    {
                        name: 'v',
                        type: 'uint8',
                    },
                    {
                        name: 'r',
                        type: 'bytes32',
                    },
                    {
                        name: 's',
                        type: 'bytes32',
                    },
                ],
                name: 'ecrecoverFn',
                outputs: [
                    {
                        name: 'signerAddress',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'emitSimpleEvent',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'tuple[][]',
                        components: [
                            {
                                name: 'someBytes',
                                type: 'bytes',
                            },
                            {
                                name: 'anInteger',
                                type: 'uint32',
                            },
                            {
                                name: 'aDynamicArrayOfBytes',
                                type: 'bytes[]',
                            },
                            {
                                name: 'aString',
                                type: 'string',
                            },
                        ],
                    },
                ],
                name: 'methodAcceptingArrayOfArrayOfStructs',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'someBytes',
                                type: 'bytes',
                            },
                            {
                                name: 'anInteger',
                                type: 'uint32',
                            },
                            {
                                name: 'aDynamicArrayOfBytes',
                                type: 'bytes[]',
                            },
                            {
                                name: 'aString',
                                type: 'string',
                            },
                        ],
                    },
                ],
                name: 'methodAcceptingArrayOfStructs',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'methodReturningArrayOfStructs',
                outputs: [
                    {
                        name: '',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'someBytes',
                                type: 'bytes',
                            },
                            {
                                name: 'anInteger',
                                type: 'uint32',
                            },
                            {
                                name: 'aDynamicArrayOfBytes',
                                type: 'bytes[]',
                            },
                            {
                                name: 'aString',
                                type: 'string',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'methodReturningMultipleValues',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'methodUsingNestedStructWithInnerStructNotUsedElsewhere',
                outputs: [
                    {
                        name: '',
                        type: 'tuple',
                        components: [
                            {
                                name: 'innerStruct',
                                type: 'tuple',
                                components: [
                                    {
                                        name: 'aField',
                                        type: 'uint256',
                                    },
                                ],
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'uint256',
                    },
                    {
                        name: 'index_1',
                        type: 'bytes',
                    },
                    {
                        name: 'index_2',
                        type: 'string',
                    },
                ],
                name: 'multiInputMultiOutput',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                    },
                    {
                        name: '',
                        type: 'bytes',
                    },
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'n',
                        type: 'tuple',
                        components: [
                            {
                                name: 'innerStruct',
                                type: 'tuple',
                                components: [
                                    {
                                        name: 'someBytes',
                                        type: 'bytes',
                                    },
                                    {
                                        name: 'anInteger',
                                        type: 'uint32',
                                    },
                                    {
                                        name: 'aDynamicArrayOfBytes',
                                        type: 'bytes[]',
                                    },
                                    {
                                        name: 'aString',
                                        type: 'string',
                                    },
                                ],
                            },
                            {
                                name: 'description',
                                type: 'string',
                            },
                        ],
                    },
                ],
                name: 'nestedStructInput',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'nestedStructOutput',
                outputs: [
                    {
                        name: '',
                        type: 'tuple',
                        components: [
                            {
                                name: 'innerStruct',
                                type: 'tuple',
                                components: [
                                    {
                                        name: 'someBytes',
                                        type: 'bytes',
                                    },
                                    {
                                        name: 'anInteger',
                                        type: 'uint32',
                                    },
                                    {
                                        name: 'aDynamicArrayOfBytes',
                                        type: 'bytes[]',
                                    },
                                    {
                                        name: 'aString',
                                        type: 'string',
                                    },
                                ],
                            },
                            {
                                name: 'description',
                                type: 'string',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'noInputNoOutput',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'noInputSimpleOutput',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'nonPureMethod',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'nonPureMethodThatReturnsNothing',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'a',
                        type: 'string',
                    },
                ],
                name: 'overloadedMethod',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'a',
                        type: 'int256',
                    },
                ],
                name: 'overloadedMethod',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'pureFunctionWithConstant',
                outputs: [
                    {
                        name: 'someConstant',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'requireWithConstant',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'revertWithConstant',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'uint256',
                    },
                ],
                name: 'simpleInputNoOutput',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'uint256',
                    },
                ],
                name: 'simpleInputSimpleOutput',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'simplePureFunction',
                outputs: [
                    {
                        name: 'result',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'x',
                        type: 'uint256',
                    },
                ],
                name: 'simplePureFunctionWithInput',
                outputs: [
                    {
                        name: 'sum',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'simpleRequire',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'simpleRevert',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 's',
                        type: 'tuple',
                        components: [
                            {
                                name: 'someBytes',
                                type: 'bytes',
                            },
                            {
                                name: 'anInteger',
                                type: 'uint32',
                            },
                            {
                                name: 'aDynamicArrayOfBytes',
                                type: 'bytes[]',
                            },
                            {
                                name: 'aString',
                                type: 'string',
                            },
                        ],
                    },
                ],
                name: 'structInput',
                outputs: [],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'structOutput',
                outputs: [
                    {
                        name: 's',
                        type: 'tuple',
                        components: [
                            {
                                name: 'someBytes',
                                type: 'bytes',
                            },
                            {
                                name: 'anInteger',
                                type: 'uint32',
                            },
                            {
                                name: 'aDynamicArrayOfBytes',
                                type: 'bytes[]',
                            },
                            {
                                name: 'aString',
                                type: 'string',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'x',
                        type: 'address',
                    },
                    {
                        name: 'a',
                        type: 'uint256',
                    },
                    {
                        name: 'b',
                        type: 'uint256',
                    },
                    {
                        name: 'y',
                        type: 'address',
                    },
                    {
                        name: 'c',
                        type: 'uint256',
                    },
                ],
                name: 'withAddressInput',
                outputs: [
                    {
                        name: 'z',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'wad',
                        type: 'uint256',
                    },
                ],
                name: 'withdraw',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ];
        return abi;
    };
    AbiGenDummyContract._deployLibrariesAsync = function (artifact, libraryArtifacts, web3Wrapper, txDefaults, libraryAddresses) {
        if (libraryAddresses === void 0) { libraryAddresses = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var links, _i, _a, link, _b, _c, libraryName, libraryArtifact, linkedLibraryBytecode, txDataWithDefaults, txHash, contractAddress;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        links = artifact.compilerOutput.evm.bytecode.linkReferences;
                        _i = 0, _a = Object.values(links);
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        link = _a[_i];
                        _b = 0, _c = Object.keys(link);
                        _d.label = 2;
                    case 2:
                        if (!(_b < _c.length)) return [3 /*break*/, 8];
                        libraryName = _c[_b];
                        if (!!libraryAddresses[libraryName]) return [3 /*break*/, 7];
                        libraryArtifact = libraryArtifacts[libraryName];
                        if (!libraryArtifact) {
                            throw new Error("Missing artifact for linked library \"" + libraryName + "\"");
                        }
                        // Deploy any dependent libraries used by this library.
                        return [4 /*yield*/, AbiGenDummyContract._deployLibrariesAsync(libraryArtifact, libraryArtifacts, web3Wrapper, txDefaults, libraryAddresses)];
                    case 3:
                        // Deploy any dependent libraries used by this library.
                        _d.sent();
                        linkedLibraryBytecode = base_contract_1.linkLibrariesInBytecode(libraryArtifact, libraryAddresses);
                        return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToContractTxDataAsync(__assign({ data: linkedLibraryBytecode }, txDefaults), web3Wrapper.estimateGasAsync.bind(web3Wrapper))];
                    case 4:
                        txDataWithDefaults = _d.sent();
                        return [4 /*yield*/, web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                    case 5:
                        txHash = _d.sent();
                        utils_1.logUtils.log("transactionHash: " + txHash);
                        return [4 /*yield*/, web3Wrapper.awaitTransactionSuccessAsync(txHash)];
                    case 6:
                        contractAddress = (_d.sent()).contractAddress;
                        utils_1.logUtils.log(libraryArtifact.contractName + " successfully deployed at " + contractAddress);
                        libraryAddresses[libraryArtifact.contractName] = contractAddress;
                        _d.label = 7;
                    case 7:
                        _b++;
                        return [3 /*break*/, 2];
                    case 8:
                        _i++;
                        return [3 /*break*/, 1];
                    case 9: return [2 /*return*/, libraryAddresses];
                }
            });
        });
    };
    AbiGenDummyContract.prototype.getFunctionSignature = function (methodName) {
        var index = this._methodABIIndex[methodName];
        var methodAbi = AbiGenDummyContract.ABI()[index]; // tslint:disable-line:no-unnecessary-type-assertion
        var functionSignature = base_contract_1.methodAbiToFunctionSignature(methodAbi);
        return functionSignature;
    };
    AbiGenDummyContract.prototype.getABIDecodedTransactionData = function (methodName, callData) {
        var functionSignature = this.getFunctionSignature(methodName);
        var self = this;
        var abiEncoder = self._lookupAbiEncoder(functionSignature);
        var abiDecodedCallData = abiEncoder.strictDecode(callData);
        return abiDecodedCallData;
    };
    AbiGenDummyContract.prototype.getABIDecodedReturnData = function (methodName, callData) {
        var functionSignature = this.getFunctionSignature(methodName);
        var self = this;
        var abiEncoder = self._lookupAbiEncoder(functionSignature);
        var abiDecodedCallData = abiEncoder.strictDecodeReturnValue(callData);
        return abiDecodedCallData;
    };
    AbiGenDummyContract.prototype.getSelector = function (methodName) {
        var functionSignature = this.getFunctionSignature(methodName);
        var self = this;
        var abiEncoder = self._lookupAbiEncoder(functionSignature);
        return abiEncoder.getSelector();
    };
    /**
     * a method that accepts an array of bytes
     * @param a the array of bytes being accepted
     */
    AbiGenDummyContract.prototype.acceptsAnArrayOfBytes = function (a) {
        var self = this;
        assert_1.assert.isArray('a', a);
        var functionSignature = 'acceptsAnArrayOfBytes(bytes[])';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [a]);
            },
        };
    };
    AbiGenDummyContract.prototype.acceptsBytes = function (a) {
        var self = this;
        assert_1.assert.isString('a', a);
        var functionSignature = 'acceptsBytes(bytes)';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [a]);
            },
        };
    };
    /**
     * Tests decoding when the input and output are complex.
     */
    AbiGenDummyContract.prototype.complexInputComplexOutput = function (complexInput) {
        var self = this;
        var functionSignature = 'complexInputComplexOutput((uint256,bytes,string))';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [complexInput]);
            },
        };
    };
    /**
     * test that devdocs will be generated and
     * that multiline devdocs will look okay
     * @param hash description of some hash. Let's make this line super long to
     *     demonstrate hanging indents for method params. It has to be more than
     *     one hundred twenty columns.
     * @param v some v, recovery id
     * @param r ECDSA r output
     * @param s ECDSA s output
     * @returns the signerAddress that created this signature.  this line too is super long in order to demonstrate the proper hanging indentation in generated code.
     */
    AbiGenDummyContract.prototype.ecrecoverFn = function (hash, v, r, s) {
        var self = this;
        assert_1.assert.isString('hash', hash);
        assert_1.assert.isNumberOrBigNumber('v', v);
        assert_1.assert.isString('r', r);
        assert_1.assert.isString('s', s);
        var functionSignature = 'ecrecoverFn(bytes32,uint8,bytes32,bytes32)';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [hash, v, r, s]);
            },
        };
    };
    AbiGenDummyContract.prototype.emitSimpleEvent = function () {
        var self = this;
        var functionSignature = 'emitSimpleEvent()';
        return {
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.methodAcceptingArrayOfArrayOfStructs = function (index_0) {
        var self = this;
        assert_1.assert.isArray('index_0', index_0);
        var functionSignature = 'methodAcceptingArrayOfArrayOfStructs((bytes,uint32,bytes[],string)[][])';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [index_0]);
            },
        };
    };
    AbiGenDummyContract.prototype.methodAcceptingArrayOfStructs = function (index_0) {
        var self = this;
        assert_1.assert.isArray('index_0', index_0);
        var functionSignature = 'methodAcceptingArrayOfStructs((bytes,uint32,bytes[],string)[])';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [index_0]);
            },
        };
    };
    AbiGenDummyContract.prototype.methodReturningArrayOfStructs = function () {
        var self = this;
        var functionSignature = 'methodReturningArrayOfStructs()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.methodReturningMultipleValues = function () {
        var self = this;
        var functionSignature = 'methodReturningMultipleValues()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.methodUsingNestedStructWithInnerStructNotUsedElsewhere = function () {
        var self = this;
        var functionSignature = 'methodUsingNestedStructWithInnerStructNotUsedElsewhere()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    /**
     * Tests decoding when the input and output are complex and have more than one argument.
     */
    AbiGenDummyContract.prototype.multiInputMultiOutput = function (index_0, index_1, index_2) {
        var self = this;
        assert_1.assert.isBigNumber('index_0', index_0);
        assert_1.assert.isString('index_1', index_1);
        assert_1.assert.isString('index_2', index_2);
        var functionSignature = 'multiInputMultiOutput(uint256,bytes,string)';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [index_0, index_1, index_2]);
            },
        };
    };
    AbiGenDummyContract.prototype.nestedStructInput = function (n) {
        var self = this;
        var functionSignature = 'nestedStructInput(((bytes,uint32,bytes[],string),string))';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [n]);
            },
        };
    };
    AbiGenDummyContract.prototype.nestedStructOutput = function () {
        var self = this;
        var functionSignature = 'nestedStructOutput()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    /**
     * Tests decoding when both input and output are empty.
     */
    AbiGenDummyContract.prototype.noInputNoOutput = function () {
        var self = this;
        var functionSignature = 'noInputNoOutput()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    /**
     * Tests decoding when input is empty and output is non-empty.
     */
    AbiGenDummyContract.prototype.noInputSimpleOutput = function () {
        var self = this;
        var functionSignature = 'noInputSimpleOutput()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.nonPureMethod = function () {
        var self = this;
        var functionSignature = 'nonPureMethod()';
        return {
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.nonPureMethodThatReturnsNothing = function () {
        var self = this;
        var functionSignature = 'nonPureMethodThatReturnsNothing()';
        return {
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.overloadedMethod2 = function (a) {
        var self = this;
        assert_1.assert.isString('a', a);
        var functionSignature = 'overloadedMethod(string)';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [a]);
            },
        };
    };
    AbiGenDummyContract.prototype.overloadedMethod1 = function (a) {
        var self = this;
        assert_1.assert.isBigNumber('a', a);
        var functionSignature = 'overloadedMethod(int256)';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [a]);
            },
        };
    };
    AbiGenDummyContract.prototype.pureFunctionWithConstant = function () {
        var self = this;
        var functionSignature = 'pureFunctionWithConstant()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.requireWithConstant = function () {
        var self = this;
        var functionSignature = 'requireWithConstant()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.revertWithConstant = function () {
        var self = this;
        var functionSignature = 'revertWithConstant()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    /**
     * Tests decoding when input is not empty but output is empty.
     */
    AbiGenDummyContract.prototype.simpleInputNoOutput = function (index_0) {
        var self = this;
        assert_1.assert.isBigNumber('index_0', index_0);
        var functionSignature = 'simpleInputNoOutput(uint256)';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [index_0]);
            },
        };
    };
    /**
     * Tests decoding when both input and output are non-empty.
     */
    AbiGenDummyContract.prototype.simpleInputSimpleOutput = function (index_0) {
        var self = this;
        assert_1.assert.isBigNumber('index_0', index_0);
        var functionSignature = 'simpleInputSimpleOutput(uint256)';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [index_0]);
            },
        };
    };
    AbiGenDummyContract.prototype.simplePureFunction = function () {
        var self = this;
        var functionSignature = 'simplePureFunction()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.simplePureFunctionWithInput = function (x) {
        var self = this;
        assert_1.assert.isBigNumber('x', x);
        var functionSignature = 'simplePureFunctionWithInput(uint256)';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [x]);
            },
        };
    };
    AbiGenDummyContract.prototype.simpleRequire = function () {
        var self = this;
        var functionSignature = 'simpleRequire()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.simpleRevert = function () {
        var self = this;
        var functionSignature = 'simpleRevert()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.structInput = function (s) {
        var self = this;
        var functionSignature = 'structInput((bytes,uint32,bytes[],string))';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [s]);
            },
        };
    };
    /**
     * a method that returns a struct
     * @returns a Struct struct
     */
    AbiGenDummyContract.prototype.structOutput = function () {
        var self = this;
        var functionSignature = 'structOutput()';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    AbiGenDummyContract.prototype.withAddressInput = function (x, a, b, y, c) {
        var self = this;
        assert_1.assert.isString('x', x);
        assert_1.assert.isBigNumber('a', a);
        assert_1.assert.isBigNumber('b', b);
        assert_1.assert.isString('y', y);
        assert_1.assert.isBigNumber('c', c);
        var functionSignature = 'withAddressInput(address,uint256,uint256,address,uint256)';
        return {
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [x.toLowerCase(), a, b, y.toLowerCase(), c]);
            },
        };
    };
    AbiGenDummyContract.prototype.withdraw = function (wad) {
        var self = this;
        assert_1.assert.isBigNumber('wad', wad);
        var functionSignature = 'withdraw(uint256)';
        return {
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [wad]);
            },
        };
    };
    /**
     * Subscribe to an event type emitted by the AbiGenDummy contract.
     * @param eventName The AbiGenDummy contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    AbiGenDummyContract.prototype.subscribe = function (eventName, indexFilterValues, callback, isVerbose, blockPollingIntervalMs) {
        if (isVerbose === void 0) { isVerbose = false; }
        assert_1.assert.doesBelongToStringEnum('eventName', eventName, AbiGenDummyEvents);
        assert_1.assert.doesConformToSchema('indexFilterValues', indexFilterValues, json_schemas_1.schemas.indexFilterValuesSchema);
        assert_1.assert.isFunction('callback', callback);
        var subscriptionToken = this._subscriptionManager.subscribe(this.address, eventName, indexFilterValues, AbiGenDummyContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    };
    /**
     * Cancel a subscription
     * @param subscriptionToken Subscription token returned by `subscribe()`
     */
    AbiGenDummyContract.prototype.unsubscribe = function (subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    };
    /**
     * Cancels all existing subscriptions
     */
    AbiGenDummyContract.prototype.unsubscribeAll = function () {
        this._subscriptionManager.unsubscribeAll();
    };
    /**
     * Gets historical logs without creating a subscription
     * @param eventName The AbiGenDummy contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    AbiGenDummyContract.prototype.getLogsAsync = function (eventName, blockRange, indexFilterValues) {
        return __awaiter(this, void 0, void 0, function () {
            var logs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert_1.assert.doesBelongToStringEnum('eventName', eventName, AbiGenDummyEvents);
                        assert_1.assert.doesConformToSchema('blockRange', blockRange, json_schemas_1.schemas.blockRangeSchema);
                        assert_1.assert.doesConformToSchema('indexFilterValues', indexFilterValues, json_schemas_1.schemas.indexFilterValuesSchema);
                        return [4 /*yield*/, this._subscriptionManager.getLogsAsync(this.address, eventName, blockRange, indexFilterValues, AbiGenDummyContract.ABI())];
                    case 1:
                        logs = _a.sent();
                        return [2 /*return*/, logs];
                }
            });
        });
    };
    /**
     * @ignore
     */
    AbiGenDummyContract.deployedBytecode = '0x608060405234801561001057600080fd5b50600436106101ef5760003560e01c806377ec31ae1161010f578063bdab1688116100a2578063e796ee9611610071578063e796ee96146103c7578063ee8b86fb146103d5578063f408fb311461028f578063fa315f9d146103e8576101ef565b8063bdab16881461038d578063cd3c0b97146103a2578063d6d7618c146103aa578063d88be12f146103bf576101ef565b80639a3b6185116100de5780639a3b618514610359578063a3c2f6b614610361578063ae2dae1714610369578063bb60736214610377576101ef565b806377ec31ae146103105780637833bec01461031e5780637a791e6e1461033e5780638ee52b4e14610346576101ef565b80634582eab2116101875780635ba3c7c0116101565780635ba3c7c0146102df57806363d69c88146102e7578063647341eb146102fa57806376f15d5b14610308576101ef565b80634582eab2146102a557806345fdbdb7146102ad578063586f84b2146102b557806359c28add146102ca576101ef565b80633687617d116101c35780633687617d1461024d57806336b323961461026f5780633e9ef66a1461028f5780634303a5421461029d576101ef565b806209e437146101f45780630527c28f146101fe5780631310e444146102115780632e1a7d4d1461023a575b600080fd5b6101fc6103f6565b005b6101fc61020c366004610d98565b610433565b61022461021f366004610ec5565b610436565b6040516102319190611526565b60405180910390f35b6101fc610248366004610ec5565b61043d565b61026061025b36600461103a565b61048e565b6040516102319392919061128f565b61028261027d366004610e51565b61052e565b60405161023191906111d2565b6101fc61020c366004610e92565b610224610610565b6101fc610617565b6101fc61067c565b6102bd6106ae565b60405161023191906114b1565b6102d26106b6565b60405161023191906114bc565b6101fc6106be565b6102826102f5366004610cbb565b610723565b6101fc61020c366004611007565b61022461072c565b6101fc61020c366004610e16565b61033161032c366004610edd565b61073a565b60405161023191906113c5565b6101fc6107f7565b610224610354366004610ec5565b6107fc565b6101fc610802565b61022461080d565b6101fc61020c366004610f77565b61037f610812565b60405161023192919061152f565b61039561084b565b60405161023191906111f3565b6101fc610850565b6103b2610887565b6040516102319190611513565b6102246109e0565b6101fc61020c366004610d0c565b6101fc6103e3366004610ec5565b61020c565b6101fc61020c366004610ec5565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104289061138e565b60405180910390fd5b565b50565b506107c790565b3373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65826040516104839190611526565b60405180910390a250565b505060408051808201825260048082527f1234567800000000000000000000000000000000000000000000000000000000602080840191909152835180850185528281527f87654321000000000000000000000000000000000000000000000000000000008183015284518086019095529184527f616d657400000000000000000000000000000000000000000000000000000000908401529093909250565b600060606040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a33320000000081525090506000818760405160200161057f9291906111b0565b604051602081830303815290604052805190602001209050600181878787604051600081526020016040526040516105ba9493929190611271565b6020604051602081039080840390855afa1580156105dc573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015198975050505050505050565b6107c75b90565b604080518082018252601481527f5245564552545f574954485f434f4e5354414e54000000000000000000000000602082015290517f08c379a000000000000000000000000000000000000000000000000000000000815261042891906004016112d1565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042890611357565b6106146109e6565b6106146109fe565b604080518082018252601581527f524551554952455f574954485f434f4e5354414e540000000000000000000000602082015290517f08c379a000000000000000000000000000000000000000000000000000000000815261042891906004016112d1565b50929392505050565b600080546001019081905590565b610742610a1e565b50604080516080810182529182528051808201825260048082527f123456780000000000000000000000000000000000000000000000000000000060208381019190915280850192909252825180840184528181527f87654321000000000000000000000000000000000000000000000000000000008184015284840152825180840190935282527f616d65740000000000000000000000000000000000000000000000000000000090820152606082015290565b610431565b60010190565b600080546001019055565b600190565b60408051808201909152600581527f68656c6c6f0000000000000000000000000000000000000000000000000000006020820152600191565b606090565b7f61a6029a4c7ddee5824d171331eecbd015d26a271310a223718b837facb5b77160405161087d906112eb565b60405180910390a1565b61088f610a4c565b6040805160028082526060828101909352816020015b60608152602001906001900390816108a55790505090506040518060400160405280600581526020017f3078313233000000000000000000000000000000000000000000000000000000815250816000815181106108ff57fe5b60200260200101819052506040518060400160405280600581526020017f30783332310000000000000000000000000000000000000000000000000000008152508160018151811061094d57fe5b6020908102919091018101919091526040805160c0810182526005608082018181527f307831323300000000000000000000000000000000000000000000000000000060a0840152825281840152808201939093528051808201909152600381527f6162630000000000000000000000000000000000000000000000000000000000918101919091526060820152905090565b6104d290565b60405180602001604052806109f9610a7a565b905290565b6040518060400160405280610a11610a4c565b8152602001606081525090565b6040518060800160405280610a31610a8d565b81526020016060815260200160608152602001606081525090565b604051806080016040528060608152602001600063ffffffff16815260200160608152602001606081525090565b6040518060200160405280600081525090565b60405180606001604052806000815260200160608152602001606081525090565b600082601f830112610abe578081fd5b8135610ad1610acc8261156f565b611548565b8181529150602080830190840160005b83811015610b0e57610af98760208435890101610b73565b83526020928301929190910190600101610ae1565b5050505092915050565b600082601f830112610b28578081fd5b8135610b36610acc8261156f565b8181529150602080830190840160005b83811015610b0e57610b5e8760208435890101610bfa565b83526020928301929190910190600101610b46565b600082601f830112610b83578081fd5b813567ffffffffffffffff811115610b99578182fd5b610bca60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611548565b9150808252836020828501011115610be157600080fd5b8060208401602084013760009082016020015292915050565b600060808284031215610c0b578081fd5b610c156080611548565b9050813567ffffffffffffffff80821115610c2f57600080fd5b610c3b85838601610b73565b8352610c4a8560208601610ca1565b60208401526040840135915080821115610c6357600080fd5b610c6f85838601610aae565b60408401526060840135915080821115610c8857600080fd5b50610c9584828501610b73565b60608301525092915050565b803563ffffffff81168114610cb557600080fd5b92915050565b600080600080600060a08688031215610cd2578081fd5b8535610cdd816115bf565b945060208601359350604086013592506060860135610cfb816115bf565b949793965091946080013592915050565b60006020808385031215610d1e578182fd5b823567ffffffffffffffff811115610d34578283fd5b80840185601f820112610d45578384fd5b80359150610d55610acc8361156f565b82815283810190828501865b85811015610d8a57610d788a888435880101610b18565b84529286019290860190600101610d61565b509098975050505050505050565b60006020808385031215610daa578182fd5b823567ffffffffffffffff811115610dc0578283fd5b80840185601f820112610dd1578384fd5b80359150610de1610acc8361156f565b82815283810190828501865b85811015610d8a57610e048a888435880101610b73565b84529286019290860190600101610ded565b600060208284031215610e27578081fd5b813567ffffffffffffffff811115610e3d578182fd5b610e4984828501610b18565b949350505050565b60008060008060808587031215610e66578182fd5b84359350602085013560ff81168114610e7d578283fd5b93969395505050506040820135916060013590565b600060208284031215610ea3578081fd5b813567ffffffffffffffff811115610eb9578182fd5b610e4984828501610b73565b600060208284031215610ed6578081fd5b5035919050565b600060208284031215610eee578081fd5b813567ffffffffffffffff80821115610f05578283fd5b81840160608187031215610f17578384fd5b610f216060611548565b925080358352602081013582811115610f38578485fd5b610f4487828401610b73565b602085015250604081013582811115610f5b578485fd5b610f6787828401610b73565b6040850152509195945050505050565b600060208284031215610f88578081fd5b813567ffffffffffffffff80821115610f9f578283fd5b81840160408187031215610fb1578384fd5b610fbb6040611548565b9250803582811115610fcb578485fd5b610fd787828401610bfa565b845250602081013582811115610feb578485fd5b610ff787828401610b73565b6020850152509195945050505050565b600060208284031215611018578081fd5b813567ffffffffffffffff81111561102e578182fd5b610e4984828501610bfa565b60008060006060848603121561104e578081fd5b83359250602084013567ffffffffffffffff8082111561106c578283fd5b61107887838801610b73565b9350604086013591508082111561108d578283fd5b5061109a86828701610b73565b9150509250925092565b600081518084526110bc81602086016020860161158f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081516080845261110360808501826110a4565b6020915063ffffffff828501511682860152604084015185820360408701528181518084528484019150848582028501018584018794505b82851015611189577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08683030184526111758282516110a4565b60019590950194938701939150860161113b565b506060880151955088810360608a01526111a381876110a4565b9998505050505050505050565b600083516111c281846020880161158f565b9190910191825250602001919050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015611264577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08886030184526112528583516110ee565b94509285019290850190600101611218565b5092979650505050505050565b93845260ff9290921660208401526040830152606082015260800190565b6000606082526112a260608301866110a4565b82810360208401526112b481866110a4565b83810360408501526112c681866110a4565b979650505050505050565b6000602082526112e460208301846110a4565b9392505050565b60408082526004908201527f123456780000000000000000000000000000000000000000000000000000000060608201526080602082018190526005908201527f6c6f72656d00000000000000000000000000000000000000000000000000000060a082015260c00190565b6020808252600d908201527f53494d504c455f52455645525400000000000000000000000000000000000000604082015260600190565b6020808252600e908201527f53494d504c455f52455155495245000000000000000000000000000000000000604082015260600190565b600060208252825160806020840152805160a08401526020810151606060c08501526113f56101008501826110a4565b604083015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608582030160e086015261143081836110a4565b9250505060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08085840301604086015261146e83836110a4565b604087015193508186820301606087015261148981856110a4565b9250506060860151925080858303016080860152506114a881836110a4565b95945050505050565b905151815260200190565b6000602082528251604060208401526114d860608401826110ee565b602085015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08482030160408501526114a881836110a4565b6000602082526112e460208301846110ee565b90815260200190565b600083825260406020830152610e4960408301846110a4565b60405181810167ffffffffffffffff8111828210171561156757600080fd5b604052919050565b600067ffffffffffffffff821115611585578081fd5b5060209081020190565b60005b838110156115aa578181015183820152602001611592565b838111156115b9576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461043357600080fdfea365627a7a72315820d4953afa8fe277a67a582a705ec911d7c404b5a84176ab0e36aa14da0e5986326c6578706572696d656e74616cf564736f6c63430005100040';
    AbiGenDummyContract.contractName = 'AbiGenDummy';
    return AbiGenDummyContract;
}(base_contract_1.BaseContract));
exports.AbiGenDummyContract = AbiGenDummyContract;
// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
