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
exports.TestLibDummyContract = void 0;
// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma enum-naming
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable
var base_contract_1 = require("@0x/base-contract");
var json_schemas_1 = require("@0x/json-schemas");
var utils_1 = require("@0x/utils");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var assert_1 = require("@0x/assert");
var ethers = require("ethers");
// tslint:enable:no-unused-variable
/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var TestLibDummyContract = /** @class */ (function (_super) {
    __extends(TestLibDummyContract, _super);
    function TestLibDummyContract(address, supportedProvider, txDefaults, logDecodeDependencies, deployedBytecode) {
        if (deployedBytecode === void 0) { deployedBytecode = TestLibDummyContract.deployedBytecode; }
        var _this = _super.call(this, 'TestLibDummy', TestLibDummyContract.ABI(), address, supportedProvider, txDefaults, logDecodeDependencies, deployedBytecode) || this;
        _this._methodABIIndex = {};
        utils_1.classUtils.bindAll(_this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
        TestLibDummyContract.ABI().forEach(function (item, index) {
            if (item.type === 'function') {
                var methodAbi = item;
                _this._methodABIIndex[methodAbi.name] = index;
            }
        });
        return _this;
    }
    TestLibDummyContract.deployFrom0xArtifactAsync = function (artifact, supportedProvider, txDefaults, logDecodeDependencies) {
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
                return [2 /*return*/, TestLibDummyContract.deployAsync(bytecode, abi, provider, txDefaults, logDecodeDependenciesAbiOnly)];
            });
        });
    };
    TestLibDummyContract.deployWithLibrariesFrom0xArtifactAsync = function (artifact, libraryArtifacts, supportedProvider, txDefaults, logDecodeDependencies) {
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
                        return [4 /*yield*/, TestLibDummyContract._deployLibrariesAsync(artifact, libraryArtifacts, new web3_wrapper_1.Web3Wrapper(provider), txDefaults)];
                    case 1:
                        libraryAddresses = _b.sent();
                        bytecode = base_contract_1.linkLibrariesInBytecode(artifact, libraryAddresses);
                        return [2 /*return*/, TestLibDummyContract.deployAsync(bytecode, abi, provider, txDefaults, logDecodeDependenciesAbiOnly)];
                }
            });
        });
    };
    TestLibDummyContract.deployAsync = function (bytecode, abi, supportedProvider, txDefaults, logDecodeDependencies) {
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
                        utils_1.logUtils.log("TestLibDummy successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new TestLibDummyContract(txReceipt.contractAddress, provider, txDefaults, logDecodeDependencies);
                        contractInstance.constructorArgs = [];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    /**
     * @returns      The contract ABI
     */
    TestLibDummyContract.ABI = function () {
        var abi = [
            {
                constant: true,
                inputs: [
                    {
                        name: 'x',
                        type: 'uint256',
                    },
                ],
                name: 'publicAddConstant',
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
                name: 'publicAddOne',
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
        ];
        return abi;
    };
    TestLibDummyContract._deployLibrariesAsync = function (artifact, libraryArtifacts, web3Wrapper, txDefaults, libraryAddresses) {
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
                        return [4 /*yield*/, TestLibDummyContract._deployLibrariesAsync(libraryArtifact, libraryArtifacts, web3Wrapper, txDefaults, libraryAddresses)];
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
    TestLibDummyContract.prototype.getFunctionSignature = function (methodName) {
        var index = this._methodABIIndex[methodName];
        var methodAbi = TestLibDummyContract.ABI()[index]; // tslint:disable-line:no-unnecessary-type-assertion
        var functionSignature = base_contract_1.methodAbiToFunctionSignature(methodAbi);
        return functionSignature;
    };
    TestLibDummyContract.prototype.getABIDecodedTransactionData = function (methodName, callData) {
        var functionSignature = this.getFunctionSignature(methodName);
        var self = this;
        var abiEncoder = self._lookupAbiEncoder(functionSignature);
        var abiDecodedCallData = abiEncoder.strictDecode(callData);
        return abiDecodedCallData;
    };
    TestLibDummyContract.prototype.getABIDecodedReturnData = function (methodName, callData) {
        var functionSignature = this.getFunctionSignature(methodName);
        var self = this;
        var abiEncoder = self._lookupAbiEncoder(functionSignature);
        var abiDecodedCallData = abiEncoder.strictDecodeReturnValue(callData);
        return abiDecodedCallData;
    };
    TestLibDummyContract.prototype.getSelector = function (methodName) {
        var functionSignature = this.getFunctionSignature(methodName);
        var self = this;
        var abiEncoder = self._lookupAbiEncoder(functionSignature);
        return abiEncoder.getSelector();
    };
    TestLibDummyContract.prototype.publicAddConstant = function (x) {
        var self = this;
        assert_1.assert.isBigNumber('x', x);
        var functionSignature = 'publicAddConstant(uint256)';
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
    TestLibDummyContract.prototype.publicAddOne = function (x) {
        var self = this;
        assert_1.assert.isBigNumber('x', x);
        var functionSignature = 'publicAddOne(uint256)';
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
    /**
     * @ignore
     */
    TestLibDummyContract.deployedBytecode = '0x6080604052348015600f57600080fd5b506004361060325760003560e01c806322935e921460375780632b82fdf0146063575b600080fd5b605160048036036020811015604b57600080fd5b5035607d565b60408051918252519081900360200190f35b605160048036036020811015607757600080fd5b5035608c565b60006086826095565b92915050565b6000608682609c565b6104d20190565b6001019056fea265627a7a72315820863e53f0da474a1275d583d88852313fe053941e79bddd5279abd812b31e020c64736f6c634300050c0032';
    TestLibDummyContract.contractName = 'TestLibDummy';
    return TestLibDummyContract;
}(base_contract_1.BaseContract));
exports.TestLibDummyContract = TestLibDummyContract;
// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
