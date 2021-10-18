"use strict";
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
var dev_utils_1 = require("@0x/dev-utils");
var utils_1 = require("@0x/utils");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var ChaiBigNumber = require("chai-bignumber");
var dirtyChai = require("dirty-chai");
var Sinon = require("sinon");
var src_1 = require("../src");
var txDefaults = {
    from: dev_utils_1.devConstants.TESTRPC_FIRST_ADDRESS,
    gas: dev_utils_1.devConstants.GAS_LIMIT,
};
var provider = dev_utils_1.web3Factory.getRpcProvider({ shouldUseInProcessGanache: true });
var web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
chai.config.includeStack = true;
chai.use(ChaiBigNumber());
chai.use(dirtyChai);
chai.use(chaiAsPromised);
var expect = chai.expect;
var blockchainLifecycle = new dev_utils_1.BlockchainLifecycle(web3Wrapper);
describe('AbiGenDummy Contract', function () {
    var abiGenDummy;
    var runTestAsync = function (contractMethodName, contractMethod, input, output) { return __awaiter(void 0, void 0, void 0, function () {
        var transaction, decodedInput, rawOutput, decodedOutput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    transaction = contractMethod.getABIEncodedTransactionData();
                    decodedInput = abiGenDummy.getABIDecodedTransactionData(contractMethodName, transaction);
                    expect(decodedInput, 'decoded input').to.be.deep.equal(input);
                    return [4 /*yield*/, web3Wrapper.callAsync({
                            to: abiGenDummy.address,
                            data: transaction,
                        })];
                case 1:
                    rawOutput = _a.sent();
                    decodedOutput = abiGenDummy.getABIDecodedReturnData(contractMethodName, rawOutput);
                    expect(decodedOutput, 'decoded output').to.be.deep.equal(output);
                    return [2 /*return*/];
            }
        });
    }); };
    before(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    utils_1.providerUtils.startProviderEngine(provider);
                    return [4 /*yield*/, src_1.AbiGenDummyContract.deployFrom0xArtifactAsync(src_1.artifacts.AbiGenDummy, provider, txDefaults, src_1.artifacts)];
                case 1:
                    abiGenDummy = _a.sent();
                    return [4 /*yield*/, blockchainLifecycle.startAsync()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    after(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchainLifecycle.revertAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe('simplePureFunction', function () {
        it('should call simplePureFunction', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, abiGenDummy.simplePureFunction().callAsync()];
                    case 1:
                        result = _a.sent();
                        expect(result).to.deep.equal(new utils_1.BigNumber(1));
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('simplePureFunctionWithInput', function () {
        it('should call simplePureFunctionWithInput', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, abiGenDummy.simplePureFunctionWithInput(new utils_1.BigNumber(5)).callAsync()];
                    case 1:
                        result = _a.sent();
                        expect(result).to.deep.equal(new utils_1.BigNumber(6));
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('pureFunctionWithConstant', function () {
        it('should call pureFunctionWithConstant', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, abiGenDummy.pureFunctionWithConstant().callAsync()];
                    case 1:
                        result = _a.sent();
                        expect(result).to.deep.equal(new utils_1.BigNumber(1234));
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('simpleRevert', function () {
        it('should call simpleRevert', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(abiGenDummy.simpleRevert().callAsync())
                    .to.eventually.be.rejectedWith(utils_1.StringRevertError)
                    .and.deep.equal(new utils_1.StringRevertError('SIMPLE_REVERT'));
                return [2 /*return*/];
            });
        }); });
    });
    describe('revertWithConstant', function () {
        it('should call revertWithConstant', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(abiGenDummy.revertWithConstant().callAsync())
                    .to.eventually.be.rejectedWith(utils_1.StringRevertError)
                    .and.deep.equal(new utils_1.StringRevertError('REVERT_WITH_CONSTANT'));
                return [2 /*return*/];
            });
        }); });
    });
    describe('simpleRequire', function () {
        it('should call simpleRequire', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(abiGenDummy.simpleRequire().callAsync())
                    .to.eventually.be.rejectedWith(utils_1.StringRevertError)
                    .and.deep.equal(new utils_1.StringRevertError('SIMPLE_REQUIRE'));
                return [2 /*return*/];
            });
        }); });
    });
    describe('requireWithConstant', function () {
        it('should call requireWithConstant', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                expect(abiGenDummy.requireWithConstant().callAsync())
                    .to.eventually.be.rejectedWith(utils_1.StringRevertError)
                    .and.deep.equal(new utils_1.StringRevertError('REQUIRE_WITH_CONSTANT'));
                return [2 /*return*/];
            });
        }); });
    });
    describe('struct handling', function () {
        var sampleStruct = {
            aDynamicArrayOfBytes: ['0x3078313233', '0x3078333231'],
            anInteger: new utils_1.BigNumber(5),
            aString: 'abc',
            someBytes: '0x3078313233',
        };
        it('should be able to handle struct output', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, abiGenDummy.structOutput().callAsync()];
                    case 1:
                        result = _a.sent();
                        expect(result).to.deep.equal(sampleStruct);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('ecrecoverFn', function () {
        it('should implement ecrecover', function () { return __awaiter(void 0, void 0, void 0, function () {
            var signerAddress, message, signature, r, s, v, v_decimal, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        signerAddress = dev_utils_1.devConstants.TESTRPC_FIRST_ADDRESS;
                        message = '0x6927e990021d23b1eb7b8789f6a6feaf98fe104bb0cf8259421b79f9a34222b0';
                        return [4 /*yield*/, web3Wrapper.signMessageAsync(signerAddress, message)];
                    case 1:
                        signature = _a.sent();
                        r = "0x" + signature.slice(2, 66);
                        s = "0x" + signature.slice(66, 130);
                        v = signature.slice(130, 132);
                        v_decimal = parseInt(v, 16) + 27;
                        return [4 /*yield*/, abiGenDummy.ecrecoverFn(message, v_decimal, r, s).callAsync()];
                    case 2:
                        result = _a.sent();
                        expect(result).to.equal(signerAddress);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('event subscription', function () {
        var indexFilterValues = {};
        var emptyCallback = function () { }; // tslint:disable-line:no-empty
        var stubs = [];
        afterEach(function () {
            stubs.forEach(function (s) { return s.restore(); });
            stubs = [];
        });
        it('should return a subscription token', function (done) {
            var subscriptionToken = abiGenDummy.subscribe(src_1.AbiGenDummyEvents.Withdrawal, indexFilterValues, emptyCallback);
            expect(subscriptionToken).to.be.a('string');
            done();
        });
        it('should allow unsubscribeAll to be called successfully after an error', function (done) {
            abiGenDummy.subscribe(src_1.AbiGenDummyEvents.Withdrawal, indexFilterValues, emptyCallback);
            stubs.push(Sinon.stub(abiGenDummy._web3Wrapper, 'getBlockIfExistsAsync').throws(new Error('JSON RPC error')));
            abiGenDummy.unsubscribeAll();
            done();
        });
    });
    describe('getLogsAsync', function () {
        var blockRange = {
            fromBlock: 0,
            toBlock: web3_wrapper_1.BlockParamLiteral.Latest,
        };
        it('should get logs with decoded args emitted by EventWithStruct', function () { return __awaiter(void 0, void 0, void 0, function () {
            var eventName, indexFilterValues, logs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, abiGenDummy.emitSimpleEvent().awaitTransactionSuccessAsync()];
                    case 1:
                        _a.sent();
                        eventName = src_1.AbiGenDummyEvents.SimpleEvent;
                        indexFilterValues = {};
                        return [4 /*yield*/, abiGenDummy.getLogsAsync(eventName, blockRange, indexFilterValues)];
                    case 2:
                        logs = _a.sent();
                        expect(logs).to.have.length(1);
                        expect(logs[0].event).to.be.equal(eventName);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should only get the logs with the correct event name', function () { return __awaiter(void 0, void 0, void 0, function () {
            var differentEventName, indexFilterValues, logs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, abiGenDummy.emitSimpleEvent().awaitTransactionSuccessAsync()];
                    case 1:
                        _a.sent();
                        differentEventName = src_1.AbiGenDummyEvents.Withdrawal;
                        indexFilterValues = {};
                        return [4 /*yield*/, abiGenDummy.getLogsAsync(differentEventName, blockRange, indexFilterValues)];
                    case 2:
                        logs = _a.sent();
                        expect(logs).to.have.length(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should only get the logs with the correct indexed fields', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, addressOne, addressTwo, eventName, indexFilterValues, logs, args;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, web3Wrapper.getAvailableAddressesAsync()];
                    case 1:
                        _a = _b.sent(), addressOne = _a[0], addressTwo = _a[1];
                        return [4 /*yield*/, abiGenDummy.withdraw(new utils_1.BigNumber(1)).awaitTransactionSuccessAsync({ from: addressOne })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, abiGenDummy.withdraw(new utils_1.BigNumber(1)).awaitTransactionSuccessAsync({ from: addressTwo })];
                    case 3:
                        _b.sent();
                        eventName = src_1.AbiGenDummyEvents.Withdrawal;
                        indexFilterValues = {
                            _owner: addressOne,
                        };
                        return [4 /*yield*/, abiGenDummy.getLogsAsync(eventName, blockRange, indexFilterValues)];
                    case 4:
                        logs = _b.sent();
                        expect(logs).to.have.length(1);
                        args = logs[0].args;
                        expect(args._owner).to.be.equal(addressOne);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('withAddressInput', function () {
        it('should normalize address inputs to lowercase', function () { return __awaiter(void 0, void 0, void 0, function () {
            var xAddress, yAddress, a, b, c, output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xAddress = dev_utils_1.devConstants.TESTRPC_FIRST_ADDRESS.toUpperCase();
                        yAddress = dev_utils_1.devConstants.TESTRPC_FIRST_ADDRESS;
                        a = new utils_1.BigNumber(1);
                        b = new utils_1.BigNumber(2);
                        c = new utils_1.BigNumber(3);
                        return [4 /*yield*/, abiGenDummy.withAddressInput(xAddress, a, b, yAddress, c).callAsync()];
                    case 1:
                        output = _a.sent();
                        expect(output).to.equal(xAddress.toLowerCase());
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('Encoding/Decoding Transaction Data and Return Values', function () {
        it('should successfully encode/decode (no input / no output)', function () { return __awaiter(void 0, void 0, void 0, function () {
            var input, output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = undefined;
                        output = undefined;
                        return [4 /*yield*/, runTestAsync('noInputNoOutput', abiGenDummy.noInputNoOutput(), input, output)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should successfully encode/decode (no input / simple output)', function () { return __awaiter(void 0, void 0, void 0, function () {
            var input, output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = undefined;
                        output = new utils_1.BigNumber(1991);
                        return [4 /*yield*/, runTestAsync('noInputSimpleOutput', abiGenDummy.noInputSimpleOutput(), input, output)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should successfully encode/decode (simple input / no output)', function () { return __awaiter(void 0, void 0, void 0, function () {
            var input, output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = new utils_1.BigNumber(1991);
                        output = undefined;
                        return [4 /*yield*/, runTestAsync('simpleInputNoOutput', abiGenDummy.simpleInputNoOutput(input), input, output)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should successfully encode/decode (simple input / simple output)', function () { return __awaiter(void 0, void 0, void 0, function () {
            var input, output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = new utils_1.BigNumber(16);
                        output = new utils_1.BigNumber(1991);
                        return [4 /*yield*/, runTestAsync('simpleInputSimpleOutput', abiGenDummy.simpleInputSimpleOutput(input), input, output)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should successfully encode/decode (complex input / complex output)', function () { return __awaiter(void 0, void 0, void 0, function () {
            var input, output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = {
                            foo: new utils_1.BigNumber(1991),
                            bar: '0x1234',
                            car: 'zoom zoom',
                        };
                        output = {
                            input: input,
                            lorem: '0x12345678',
                            ipsum: '0x87654321',
                            dolor: 'amet',
                        };
                        return [4 /*yield*/, runTestAsync('complexInputComplexOutput', abiGenDummy.complexInputComplexOutput(input), input, output)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should successfully encode/decode (multi-input / multi-output)', function () { return __awaiter(void 0, void 0, void 0, function () {
            var input, output, transaction, decodedInput, rawOutput, decodedOutput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = [new utils_1.BigNumber(1991), '0x1234', 'zoom zoom'];
                        output = ['0x12345678', '0x87654321', 'amet'];
                        transaction = abiGenDummy
                            .multiInputMultiOutput(input[0], input[1], input[2])
                            .getABIEncodedTransactionData();
                        decodedInput = abiGenDummy.getABIDecodedTransactionData('multiInputMultiOutput', transaction);
                        expect(decodedInput, 'decoded input').to.be.deep.equal(input);
                        return [4 /*yield*/, web3Wrapper.callAsync({
                                to: abiGenDummy.address,
                                data: transaction,
                            })];
                    case 1:
                        rawOutput = _a.sent();
                        decodedOutput = abiGenDummy.getABIDecodedReturnData('multiInputMultiOutput', rawOutput);
                        expect(decodedOutput, 'decoded output').to.be.deep.equal(output);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('awaitTransactionSuccessAsync', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            it('should successfully call the non pure function', function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    expect(abiGenDummy.nonPureMethod().awaitTransactionSuccessAsync({}, { pollingIntervalMs: 10, timeoutMs: 100 })).to.be.fulfilled('');
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    }); });
});
describe('Lib dummy contract', function () {
    var libDummy;
    before(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchainLifecycle.startAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    after(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchainLifecycle.revertAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    before(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, src_1.TestLibDummyContract.deployFrom0xArtifactAsync(src_1.artifacts.TestLibDummy, provider, txDefaults, src_1.artifacts)];
                case 1:
                    libDummy = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchainLifecycle.startAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, blockchainLifecycle.revertAsync()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should call a library function', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, libDummy.publicAddOne(new utils_1.BigNumber(1)).callAsync()];
                case 1:
                    result = _a.sent();
                    expect(result).to.deep.equal(new utils_1.BigNumber(2));
                    return [2 /*return*/];
            }
        });
    }); });
    it('should call a library function referencing a constant', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, libDummy.publicAddConstant(new utils_1.BigNumber(1)).callAsync()];
                case 1:
                    result = _a.sent();
                    expect(result).to.deep.equal(new utils_1.BigNumber(1235));
                    return [2 /*return*/];
            }
        });
    }); });
});
