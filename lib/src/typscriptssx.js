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
exports.TypeScriptConvertor = void 0;
const cli_format_1 = __importDefault(require("cli-format"));
const Handlebars = __importStar(require("handlebars"));
const types_1 = require("./types");
const utils_1 = require("./utils");
// tslint:disable-next-line:no-unnecessary-class
class TypeScriptConvertor {
    static register(backended) {
        Handlebars.registerHelper('parameterType', utils_1.utils.solTypeToTsType.bind(utils_1.utils, types_1.ParamKind.Input, backended));
        Handlebars.registerHelper('assertionType', utils_1.utils.solTypeToAssertion.bind(utils_1.utils));
        Handlebars.registerHelper('returnType', utils_1.utils.solTypeToTsType.bind(utils_1.utils, types_1.ParamKind.Output, backended));
        Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
            return arg1 === arg2 ? options.fn(this) : options.inverse(this); // tslint:disable-line:no-invalid-this
        });
        // Check if 0 or false exists
        Handlebars.registerHelper('isDefined', (context) => {
            return context !== undefined;
        });
        // Format docstring for method description
        Handlebars.registerHelper('formatDocstringForMethodTs', (docString) => {
            // preserve newlines
            const regex = /([ ]{4,})+/gi;
            const formatted = docString.replace(regex, '\n * ');
            return new Handlebars.SafeString(formatted);
        });
        // Get docstring for method param
        Handlebars.registerHelper('getDocstringForParamTs', (paramName, devdocParamsObj) => {
            if (devdocParamsObj === undefined || devdocParamsObj[paramName] === undefined) {
                return undefined;
            }
            return new Handlebars.SafeString(`${devdocParamsObj[paramName]}`);
        });
        // Format docstring for method param
        Handlebars.registerHelper('formatDocstringForParamTs', (paramName, desc) => {
            const docString = `@param ${paramName} ${desc}`;
            const hangingIndentLength = 4;
            const config = {
                width: 80,
                paddingLeft: ' * ',
                hangingIndent: ' '.repeat(hangingIndentLength),
                ansi: false,
            };
            return new Handlebars.SafeString(`${cli_format_1.default.wrap(docString, config)}`);
        });
    }
}
exports.TypeScriptConvertor = TypeScriptConvertor;
//# sourceMappingURL=typscriptssx.js.map