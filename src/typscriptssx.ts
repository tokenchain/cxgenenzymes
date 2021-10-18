import cliFormat from 'cli-format';
import * as Handlebars from 'handlebars';

import {ContractsBackend, ParamKind} from './types';
import {utils} from './utils';

// tslint:disable-next-line:no-unnecessary-class
export class TypeScriptConvertor {
    public static register(backended: ContractsBackend): void {
        Handlebars.registerHelper('parameterType', utils.solTypeToTsType.bind(utils, ParamKind.Input, backended));
        Handlebars.registerHelper('assertionType', utils.solTypeToAssertion.bind(utils));
        Handlebars.registerHelper('returnType', utils.solTypeToTsType.bind(utils, ParamKind.Output, backended));
        Handlebars.registerHelper('ifEquals', function(this: typeof Handlebars, arg1: any, arg2: any, options: any): void {
            return arg1 === arg2 ? options.fn(this) : options.inverse(this); // tslint:disable-line:no-invalid-this
        });
        // Check if 0 or false exists
        Handlebars.registerHelper('isDefined', (context: any): boolean => {
                return context !== undefined;
            },
        );
        // Format docstring for method description
        Handlebars.registerHelper('formatDocstringForMethodTs', (docString: string): Handlebars.SafeString => {
                // preserve newlines
                const regex = /([ ]{4,})+/gi;
                const formatted = docString.replace(regex, '\n * ');
                return new Handlebars.SafeString(formatted);
            },
        );
        // Get docstring for method param
        Handlebars.registerHelper('getDocstringForParamTs', (paramName: string, devdocParamsObj: { [name: string]: string }): Handlebars.SafeString | undefined => {
                if (devdocParamsObj === undefined || devdocParamsObj[paramName] === undefined) {
                    return undefined;
                }
                return new Handlebars.SafeString(`${devdocParamsObj[paramName]}`);
            },
        );

        // Format docstring for method param
        Handlebars.registerHelper('formatDocstringForParamTs', (paramName: string, desc: Handlebars.SafeString): Handlebars.SafeString => {
                const docString = `@param ${paramName} ${desc}`;
                const hangingIndentLength = 4;
                const config = {
                    width: 80,
                    paddingLeft: ' * ',
                    hangingIndent: ' '.repeat(hangingIndentLength),
                    ansi: false,
                };
                return new Handlebars.SafeString(`${cliFormat.wrap(docString, config)}`);
            },
        );
    }
}
