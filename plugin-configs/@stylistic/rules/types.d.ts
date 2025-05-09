/**
 * @see https://eslint.style/packages/default
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check
'use strict';


// plugin names
type    PluginName = '@stylistic';
type  TsPluginName = '@typescript-eslint';
type JsxPluginName = 'react';



// specific rule names =======================================================================================
/** `func-call-spacing` is replaced with `function-call-spacing`. */
type ReplacedRuleName = { old: 'func-call-spacing', new: 'function-call-spacing' };
type OldRuleNames = ReplacedRuleName['old'];

/** The rules are in `@stylistic/eslint-plugin-js`, but not in `@eslint/js`. */
type NewRuleNamesJs = ReplacedRuleName['new'] | 'line-comment-position' | 'multiline-comment-style';

/** The rules are in `@stylistic/eslint-plugin-ts`, but not in `@typescript-eslint/eslint-plugin`. */
type NewRuleNamesTs = ReplacedRuleName['new']
                    | 'object-curly-spacing'
                    | 'object-curly-newline'
                    | 'object-property-newline'
                    | 'quote-props'
                    | 'semi-spacing';

/** The rules are in `@stylistic/eslint-plugin-jsx`, but not in `eslint-plugin-react`. */
type NewRuleNamesJsx = 'jsx-function-call-newline' | 'jsx-pascal-case';

/**
 * `jsx-quotes` rule should be in JSX plugins, but in JS plugins. It's because of `@eslint/js` had this rule.
 * This rule is not in `eslint-plugin-react`.
 */
type JsxRuleNamesInJsRules = 'jsx-quotes';

/** The rules are in Ts plugins, but not in JS plugins. */
type TsRuleNamesNotInJsRules = 'member-delimiter-style' | 'type-annotation-spacing';



// All rule names without prefix. ============================================================================
type UnprefixedRuleNamesJs   = keyof import('../../../node_modules/@stylistic/eslint-plugin-js/dist/dts')  .UnprefixedRuleOptions;
type UnprefixedRuleNamesTs   = keyof import('../../../node_modules/@stylistic/eslint-plugin-ts/dist/dts')  .UnprefixedRuleOptions;
type UnprefixedRuleNamesJsx  = keyof import('../../../node_modules/@stylistic/eslint-plugin-jsx/dist/dts') .UnprefixedRuleOptions;
type UnprefixedRuleNamesPlus = keyof import('../../../node_modules/@stylistic/eslint-plugin-plus/dist/dts').UnprefixedRuleOptions;



// All rule names without prefix,  EXCEPT `func-call-spacing`. ===============================================
type DeDuplicatedUnprefixedRuleNamesJs = Exclude<UnprefixedRuleNamesJs, OldRuleNames>;
type DeDuplicatedUnprefixedRuleNamesTs = Exclude<UnprefixedRuleNamesTs, OldRuleNames>;

/** All `@stylistic/eslint-plugin-js` rule names without prefix,  EXCEPT `func-call-spacing` and `jsx-quotes`. */
type UnprefixedRuleNamesPureJs  = Exclude<DeDuplicatedUnprefixedRuleNamesJs, JsxRuleNamesInJsRules>;
/** All `@stylistic/eslint-plugin-jsx` rule names without prefix,   AND  `jsx-quotes`. */
type UnprefixedRuleNamesPureJsx = UnprefixedRuleNamesJsx | JsxRuleNamesInJsRules;



// All rule names with prefix,  EXCEPT `func-call-spacing`. ==================================================
type RuleNamesJs   = `${PluginName}/${DeDuplicatedUnprefixedRuleNamesJs}`;
type RuleNamesTs   = `${PluginName}/${DeDuplicatedUnprefixedRuleNamesTs}`;
type RuleNamesJsx  = `${PluginName}/${            UnprefixedRuleNamesJsx}`;
type RuleNamesPlus = `${PluginName}/${            UnprefixedRuleNamesPlus}`;

/** All `@stylistic/eslint-plugin-js` rule names with prefix,  EXCEPT `func-call-spacing` and `jsx-quotes`. */
type RuleNamesPureJs  = `${PluginName}/${UnprefixedRuleNamesPureJs}`;
/** All `@stylistic/eslint-plugin-jsx` rule names with prefix,   AND  `jsx-quotes`. */
type RuleNamesPureJsx = `${PluginName}/${UnprefixedRuleNamesPureJsx}`;



// All rules config with prefix, EXCEPT `func-call-spacing` ==================================================
/** All `@stylistic/*` rules */
type RuleOptions = import('../../../node_modules/@stylistic/eslint-plugin/dist/dts/').RuleOptions;
export type RuleSeverity = import('../../../node_modules/eslint').Linter.RuleSeverity;

type MakeRules<RuleNames extends string> = Record<RuleNames, RuleSeverity | [RuleSeverity, ...Partial<RuleOptions[RuleNames]>]>;

type RulesJs   = MakeRules<RuleNamesJs>;
type RulesTs   = MakeRules<RuleNamesTs>;
type RulesJsx  = MakeRules<RuleNamesJsx>;
type RulesPlus = MakeRules<RuleNamesPlus>;

/** All `@stylistic/eslint-plugin-js` rules config with prefix,  EXCEPT `func-call-spacing` and `jsx-quotes`. */
       type RulesPureJs  = Omit<RulesJs, `${PluginName}/${JsxRuleNamesInJsRules}`>;
/** All `@stylistic/eslint-plugin-jsx` rules config with prefix,   AND  `jsx-quotes`. */
export type RulesPureJsx = RulesJsx & Record<`${PluginName}/${JsxRuleNamesInJsRules}`, RulesJs[`${PluginName}/${JsxRuleNamesInJsRules}`]>;



// All rules OFF config with each plugin's prefix. =================================================
type OffRuleNamesJs = `${PluginName}/${OldRuleNames}` | Exclude<UnprefixedRuleNamesJs, NewRuleNamesJs>;
type OffRuleNamesTs = `${PluginName}/${OldRuleNames}` | `${TsPluginName}/${Exclude<UnprefixedRuleNamesTs, NewRuleNamesTs>}`;
type OffRuleNamesJsx = `${JsxPluginName}/${Exclude<UnprefixedRuleNamesJsx, NewRuleNamesJsx>}`;

type OffRulesJs  = Record<OffRuleNamesJs , 0>;
type OffRulesTs  = Record<OffRuleNamesTs , 0>;
type OffRulesJsx = Record<OffRuleNamesJsx, 0>;

/** All `@stylistic/eslint-plugin-js` rules OFF config with prefix,  EXCEPT `jsx-quotes`. */
type OffRulesPureJs = Omit<OffRulesJs, JsxRuleNamesInJsRules>;
/** All `@stylistic/eslint-plugin-jsx` rules OFF config with prefix,   AND  `jsx-quotes`. */
export type OffRulesPureJsx = OffRulesJsx & Record<JsxRuleNamesInJsRules, 0>;



// get rules function params =======================================================================
type LogLevel = import('../../../node_modules/eslint').Linter.RuleSeverity;

type StylisticCustomizeOptions = import('../../../node_modules/@stylistic/eslint-plugin').StylisticCustomizeOptions;
type FormatCustomizeOptions = {
	short?:      boolean;
	printWidth?: number;
	tabWidth?:   number;
};
export type CustomizeOptions = StylisticCustomizeOptions & FormatCustomizeOptions;



// get default (`@stylistic/eslint-plugin`) rules function =========================================
type CustomizeOptionsDefault = Omit<CustomizeOptions, 'pluginName'>;

/** All `@stylistic/eslint-plugin` rules,  EXCEPT `func-call-spacing`. */
export type RulesAll          = RulesPureJs & RulesTs & RulesPureJsx & RulesPlus;
export type RulesAllExceptJsx = RulesPureJs & RulesTs                & RulesPlus;

/** All rules OFF config with  */
export type OffRulesAll          = Omit<OffRulesPureJs, `${PluginName}/${OldRuleNames}`> & OffRulesTs & OffRulesPureJsx;
export type OffRulesAllExceptJsx = Omit<OffRulesPureJs, `${PluginName}/${OldRuleNames}`> & OffRulesTs;

/** get default (`@stylistic/eslint-plugin`) rules
 * @param formatLogLevel  default is `'warn'`
 * @param options - default is
 * ```javascript
 * {
 * 	short       : false,
 * 	printWidth  : 100,
 * 	tabWidth    : 3,
 * 	arrowParens : false,
 * 	blockSpacing: true,
 * 	braceStyle  : '1tbs',
 * 	commaDangle : 'never',
 * 	indent      : 'tab',
 * 	jsx         : false,
 * 	quoteProps  : 'consistent-as-needed',
 * 	quotes      : 'single',
 * 	semi        : true
 * }
 * ```
 */
export type GetRulesDefault = (
	formatLogLevel: LogLevel = 'warn', 
	options: CustomizeOptionsDefault = {}
) => options['jsx'] extends true
     ? (RulesAll          & OffRulesAll)
     : (RulesAllExceptJsx & OffRulesAllExceptJsx);



// get js (`@stylistic/eslint-plugin-js`) rules function =====================================================
type CustomizeOptionsJs = Omit<CustomizeOptions, 'pluginName'>;

type JsPrefixedRuleOptions = import('../../../node_modules/@stylistic/eslint-plugin-js/dist/dts').RuleOptions;
type JsPrefixedRuleNames   = Exclude<keyof JsPrefixedRuleOptions, `${PluginName}/js/${OldRuleNames}`>;
type JsPrefixedRuleEntries = import('../../../node_modules/eslint').Linter.RuleEntry<JsPrefixedRuleOptions[JsPrefixedRuleNames]>;

type JsPrefixedRules = Record<JsPrefixedRuleNames, JsPrefixedRuleEntries>;
type JsPrefixedRulesExceptJsx = Omit<JsPrefixedRules, `${PluginName}/js/${JsxRuleNamesInJsRules}`>;

type StylisticOffRulesJs     = Record<RuleNamesJs    |`${PluginName}/${OldRuleNames}`, 0>;
type StylisticOffRulesPureJs = Record<RuleNamesPureJs|`${PluginName}/${OldRuleNames}`, 0>;

/** get js (`@stylistic/eslint-plugin-js`) rules
 * @param formatLogLevel - default: `'warn'`
 * @param options - defaults:
 * ```javascript
 * {
 * 	short       : false,
 * 	printWidth  : 100,
 * 	tabWidth    : 3,
 * 	arrowParens : true,
 * 	blockSpacing: true,
 * 	braceStyle  : '1tbs',
 * 	commaDangle : 'never',
 * 	indent      : 'tab',
 * 	jsx         : false,
 * 	quoteProps  : 'consistent-as-needed',
 * 	quotes      : 'single',
 * 	semi        : true
 * }
 * ```
 */
export type GetRulesJs = (
	formatLogLevel: LogLevel = 'warn',
	options: CustomizeOptionsJs = {}
) => options['jsx'] extends true
     ? (JsPrefixedRules          & OffRulesJs     & StylisticOffRulesJs)
     : (JsPrefixedRulesExceptJsx & OffRulesPureJs & StylisticOffRulesPureJs);



// get ts (`@stylistic/eslint-plugin-ts`) rules function =====================================================
type CustomizeOptionsTs = Omit<CustomizeOptions, 'pluginName'|'printWidth'|'tabWidth'|'arrowParens'|'jsx'>;

type TsPrefixedRuleOptions = import('../../../node_modules/@stylistic/eslint-plugin-ts/dist/dts').RuleOptions;
type TsPrefixedRuleNames   = Exclude<keyof TsPrefixedRuleOptions, `${PluginName}/ts/${OldRuleNames}`>;
type TsPrefixedRuleEntries = import('../../../node_modules/eslint').Linter.RuleEntry<TsPrefixedRuleOptions[TsPrefixedRuleNames]>;

type TsPrefixedRules = Record<TsPrefixedRuleNames, TsPrefixedRuleEntries>;

type JsUnprefixedOffRuleNamesTs = Exclude<UnprefixedRuleNamesTs, TSRuleNamesNotInJsRules>;
type JsUnprefixedOffRulesTs = Recode<Exclude<JsUnprefixedOffRuleNamesTs, ReplacedRuleName['new']>, 0>;
type    StylisticOffRulesTs = Record<`${PluginName}/${UnprefixedRuleNamesTs}`, 0>;
type  JsStylisticOffRulesTs = Record<`${PluginName}/js/${JsUnprefixedOffRuleNamesTs}`, 0>;

/** get ts (`@stylistic/eslint-plugin-ts`) rules
 * @param formatLogLevel - default: `'warn'`
 * @param options - defaults:
 * ```javascript
 * {
 * 	short       : false,
 * 	blockSpacing: true,
 * 	braceStyle  : '1tbs',
 * 	commaDangle : 'never',
 * 	indent      : 'tab',
 * 	quoteProps  : 'consistent-as-needed',
 * 	quotes      : 'single',
 * 	semi        : true
 * }
 * ```
 */
export type GetRulesTs = (
	formatLogLevel: LogLevel = 'warn',
	options: CustomizeOptionsTs = {}
) => TsPrefixedRules & JsUnprefixedOffRulesTs & OffRulesTs & StylisticOffRulesTs & JsStylisticOffRulesTs;



// get jsx (`@stylistic/eslint-plugin-jsx`) rules function ===================================================
type CustomizeOptionsJsx = Pick<CustomizeOptions, 'blockSpacing'|'short'>;

type JsxPrefixedRuleOptions = import('../../../node_modules/@stylistic/eslint-plugin-jsx/dist/dts').RuleOptions;
type JsxPrefixedRuleNames   = keyof JsxPrefixedRuleOptions;
type JsxPrefixedRuleEntries = import('../../../node_modules/eslint').Linter.RuleEntry<JsxPrefixedRuleOptions[JsxPrefixedRuleNames]>;
type JsxPrefixedRules = Record<JsxPrefixedRuleNames, JsxPrefixedRuleEntries>;

type StylisticOffRulesJsx    = Record<`${PluginName}/${UnprefixedRuleNamesJsx}`, 0>;

/** get js (`@stylistic/eslint-plugin-js`) rules
 * @param formatLogLevel - default: `'warn'`
 * @param options - defaults:`{ short: false, blockSpacing: true}`
 */
export type GetRulesJsx = (
	formatLogLevel: LogLevel = 'warn',
	options: CustomizeOptionsJsx = {}
) => JsxPrefixedRules & OffRulesJsx & StylisticOffRulesJsx;



// get additional (`@stylistic/eslint-plugin-plus`) rules function ===========================================
type CustomizeOptionsAdditional = Pick<CustomizeOptions, 'short' | 'indent'>;
type PlusPrefixedRuleOptions = import('../../../node_modules/@stylistic/eslint-plugin-plus/dist/dts').RuleOptions;
type PlusPrefixedRuleNames = keyof PlusPrefixedRuleNames;
type PlusPrefixedRuleEntries = import('../../../node_modules/eslint').Linter.RuleEntry<PlusPrefixedRuleOptions[PlusPrefixedRuleNames]>;
type PlusPrefixedRules = Record<PlusPrefixedRuleNames, PlusPrefixedRuleEntries>;

type StylisticOffRulesPlus = Record<RuleNamesPlus, 0>;

/** get additional (`@stylistic/eslint-plugin-plus`) rules
 * @param formatLogLevel - default is `'warn'`
 * @param options        - default is `{ short: false, indent: 'tab' }`
 */
export type GetRulesAdditional = (
	formatLogLevel: LogLevel = 'warn',
	options: CustomizeOptionsAdditional = {}
) => StylisticOffRulesPlus & PlusPrefixedRules;
