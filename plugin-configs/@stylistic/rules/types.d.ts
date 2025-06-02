/**
 * @see https://eslint.style/packages/default
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check

/* eslint @stylistic/no-multi-spaces: 'off'         -- for align */
/* eslint @stylistic/no-multiple-empty-lines: 'off' -- for align */
/* eslint sort-imports: 'off' -- for align */

import type {Linter} from 'eslint';
import type {StylisticCustomizeOptions} from '@stylistic/eslint-plugin';

/** All `@stylistic/*` rules *//* eslint-disable @stylistic/object-curly-spacing */
import type {RuleOptions} from '@stylistic/eslint-plugin/rule-options';
import type {RuleOptions as   JsPrefixedRuleOptions, UnprefixedRuleOptions as UnprefixedRuleOptionsJs  } from '@stylistic/eslint-plugin-js/rule-options';
import type {RuleOptions as   TsPrefixedRuleOptions, UnprefixedRuleOptions as UnprefixedRuleOptionsTs  } from '@stylistic/eslint-plugin-ts/rule-options';
import type {RuleOptions as  JsxPrefixedRuleOptions, UnprefixedRuleOptions as UnprefixedRuleOptionsJsx } from '@stylistic/eslint-plugin-jsx/rule-options';
import type {RuleOptions as PlusPrefixedRuleOptions, UnprefixedRuleOptions as UnprefixedRuleOptionsPlus} from '@stylistic/eslint-plugin-plus/rule-options';
/* eslint-enable @stylistic/object-curly-spacing */



// Plugin names
type    PluginName = '@stylistic';
type  TsPluginName = '@typescript-eslint';
type JsxPluginName = 'react';



// Specific rule names =======================================================================================
/** `func-call-spacing` is replaced with `function-call-spacing`. */
type ReplacedRuleName = {old: 'func-call-spacing'; new: 'function-call-spacing';};
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
type UnprefixedRuleNamesJs   = keyof UnprefixedRuleOptionsJs;
type UnprefixedRuleNamesTs   = keyof UnprefixedRuleOptionsTs;
type UnprefixedRuleNamesJsx  = keyof UnprefixedRuleOptionsJsx;
type UnprefixedRuleNamesPlus = keyof UnprefixedRuleOptionsPlus;



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
type RuleNamesJsx  = `${PluginName}/${/*        */UnprefixedRuleNamesJsx}`;
type RuleNamesPlus = `${PluginName}/${/*        */UnprefixedRuleNamesPlus}`;

/** All `@stylistic/eslint-plugin-js` rule names with prefix,  EXCEPT `func-call-spacing` and `jsx-quotes`. */
type RuleNamesPureJs  = `${PluginName}/${UnprefixedRuleNamesPureJs}`;

/** All `@stylistic/eslint-plugin-jsx` rule names with prefix,   AND  `jsx-quotes`. */
type RuleNamesPureJsx = `${PluginName}/${UnprefixedRuleNamesPureJsx}`;



// All rules config with prefix, EXCEPT `func-call-spacing` ==================================================
export type RuleSeverity = Linter.RuleSeverity;

type MakeRules<RuleNames extends string> =
	Record<RuleNames, RuleSeverity | [RuleSeverity, ...Partial<RuleOptions[RuleNames]>]>;

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

type OffRulesJs  = Record<OffRuleNamesJs , 0>; // eslint-disable-line @stylistic/comma-spacing -- align
type OffRulesTs  = Record<OffRuleNamesTs , 0>; // eslint-disable-line @stylistic/comma-spacing -- align
type OffRulesJsx = Record<OffRuleNamesJsx, 0>;

/** All `@stylistic/eslint-plugin-js` rules OFF config with prefix,  EXCEPT `jsx-quotes`. */
type OffRulesPureJs = Omit<OffRulesJs, JsxRuleNamesInJsRules>;

/** All `@stylistic/eslint-plugin-jsx` rules OFF config with prefix,   AND  `jsx-quotes`. */
export type OffRulesPureJsx = OffRulesJsx & Record<JsxRuleNamesInJsRules, 0>;



// Get rules function params =======================================================================
type LogLevel = Linter.RuleSeverity;

type FormatCustomizeOptions = {
	short     ?: boolean;
	printWidth?: number;
	tabWidth  ?: number;
};

export type CustomizeOptions = StylisticCustomizeOptions & FormatCustomizeOptions;



// Get default (`@stylistic/eslint-plugin`) rules function =========================================
type CustomizeOptionsDefault = Omit<CustomizeOptions, 'pluginName'>;

/** All `@stylistic/eslint-plugin` rules,  EXCEPT `func-call-spacing`. */
export type RulesAll          = RulesPureJs & RulesTs & RulesPureJsx & RulesPlus;
export type RulesAllExceptJsx = RulesPureJs & RulesTs                & RulesPlus;

/** All rules OFF config with  */
export type OffRulesAll          = Omit<OffRulesPureJs, `${PluginName}/${OldRuleNames}`> & OffRulesTs & OffRulesPureJsx;
export type OffRulesAllExceptJsx = Omit<OffRulesPureJs, `${PluginName}/${OldRuleNames}`> & OffRulesTs;

/** Get default (`@stylistic/eslint-plugin`) rules
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
	options: Readonly<CustomizeOptionsDefault> = {}
) => options['jsx'] extends true // eslint-disable-line no-undef -- `options` is defined
/**/ ? (RulesAll          & OffRulesAll)
/**/ : (RulesAllExceptJsx & OffRulesAllExceptJsx);



// Get js (`@stylistic/eslint-plugin-js`) rules function =====================================================
type CustomizeOptionsJs = Omit<CustomizeOptions, 'pluginName'>;

type JsPrefixedRuleNames   = Exclude<keyof JsPrefixedRuleOptions, `${PluginName}/js/${OldRuleNames}`>;
type JsPrefixedRuleEntries = Linter.RuleEntry<JsPrefixedRuleOptions[JsPrefixedRuleNames]>;

type JsPrefixedRules = Record<JsPrefixedRuleNames, JsPrefixedRuleEntries>;
type JsPrefixedRulesExceptJsx = Omit<JsPrefixedRules, `${PluginName}/js/${JsxRuleNamesInJsRules}`>;

type StylisticOffRulesJs     = Record<RuleNamesJs     | `${PluginName}/${OldRuleNames}`, 0>;
type StylisticOffRulesPureJs = Record<RuleNamesPureJs | `${PluginName}/${OldRuleNames}`, 0>;

/** Get js (`@stylistic/eslint-plugin-js`) rules
 * @param formatLogLevel - default: `'warn'`
 * @param options - default:
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
	options: Readonly<CustomizeOptionsJs> = {}
) => options['jsx'] extends true // eslint-disable-line no-undef -- `options` is defined
/**/ ? (JsPrefixedRules          & OffRulesJs     & StylisticOffRulesJs)
/**/ : (JsPrefixedRulesExceptJsx & OffRulesPureJs & StylisticOffRulesPureJs);



// Get ts (`@stylistic/eslint-plugin-ts`) rules function =====================================================
type CustomizeOptionsTs = Omit<CustomizeOptions, 'pluginName' | 'printWidth' | 'tabWidth' | 'arrowParens' | 'jsx'>;

type TsPrefixedRuleNames   = Exclude<keyof TsPrefixedRuleOptions, `${PluginName}/ts/${OldRuleNames}`>;
type TsPrefixedRuleEntries = Linter.RuleEntry<TsPrefixedRuleOptions[TsPrefixedRuleNames]>;

type TsPrefixedRules = Record<TsPrefixedRuleNames, TsPrefixedRuleEntries>;

type JsUnprefixedOffRuleNamesTs = Exclude<UnprefixedRuleNamesTs, TsRuleNamesNotInJsRules>;
type JsUnprefixedOffRulesTs = Record<Exclude<JsUnprefixedOffRuleNamesTs, ReplacedRuleName['new']>, 0>;
type    StylisticOffRulesTs = Record<`${PluginName}/${UnprefixedRuleNamesTs}`, 0>;
type  JsStylisticOffRulesTs = Record<`${PluginName}/js/${JsUnprefixedOffRuleNamesTs}`, 0>;

/** Get ts (`@stylistic/eslint-plugin-ts`) rules
 * @param formatLogLevel - default: `'warn'`
 * @param options        - default:
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
	options: Readonly<CustomizeOptionsTs> = {}
) => TsPrefixedRules & JsUnprefixedOffRulesTs & OffRulesTs & StylisticOffRulesTs & JsStylisticOffRulesTs;



// Get jsx (`@stylistic/eslint-plugin-jsx`) rules function ===================================================
type CustomizeOptionsJsx = Pick<CustomizeOptions, 'blockSpacing' | 'short'>;

type JsxPrefixedRuleNames   = keyof JsxPrefixedRuleOptions;
type JsxPrefixedRuleEntries = Linter.RuleEntry<JsxPrefixedRuleOptions[JsxPrefixedRuleNames]>;
type JsxPrefixedRules = Record<JsxPrefixedRuleNames, JsxPrefixedRuleEntries>;

type StylisticOffRulesJsx    = Record<`${PluginName}/${UnprefixedRuleNamesJsx}`, 0>;

/** Get js (`@stylistic/eslint-plugin-js`) rules
 * @param formatLogLevel - default is `'warn'`
 * @param options        - default is `{ short: false, blockSpacing: true}`
 */
export type GetRulesJsx = (
	formatLogLevel: LogLevel = 'warn',
	options: Readonly<CustomizeOptionsJsx> = {}
) => JsxPrefixedRules & OffRulesJsx & StylisticOffRulesJsx;



// Get additional (`@stylistic/eslint-plugin-plus`) rules function ===========================================
type CustomizeOptionsAdditional = Pick<CustomizeOptions, 'short' | 'indent'>;

type PlusPrefixedRuleNames = keyof PlusPrefixedRuleOptions;
type PlusPrefixedRuleEntries = Linter.RuleEntry<PlusPrefixedRuleOptions[PlusPrefixedRuleNames]>;
type PlusPrefixedRules = Record<PlusPrefixedRuleNames, PlusPrefixedRuleEntries>;

type StylisticOffRulesPlus = Record<RuleNamesPlus, 0>;

/** Get additional (`@stylistic/eslint-plugin-plus`) rules
 * @param formatLogLevel - default is `'warn'`
 * @param options        - default is `{ short: false, indent: 'tab' }`
 */
export type GetRulesAdditional = (
	formatLogLevel: LogLevel = 'warn',
	options: Readonly<CustomizeOptionsAdditional> = {}
) => StylisticOffRulesPlus & PlusPrefixedRules;
