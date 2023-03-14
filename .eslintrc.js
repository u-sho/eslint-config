const OFF = 0;
const WARN = 1;
const ERROR = 2;

const prettierrc = require('./prettierrc');

const possibleProblemRules = require('./rules/possible-problems');
const suggestionRules = require('./rules/suggestions');
const layoutAndFormattingRules = require('./rules/layout-and-formatting');

/**
 * Enforce the usage of smart tabs, as defined in the emacs wiki
 * @type {import('eslint').Linter.RulesRecord}
 */
const smarterTabsRule = prettierrc.useTabs ? {'smarter-tabs/smarter-tabs': WARN} : {};

/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line object-curly-newline
module.exports = {
	// eslint-disable-next-line array-bracket-newline
	ignorePatterns: [
		'node_modules',
		'dist',
		'package-lock.json',
		'yarn.lock',
		'*.local'],

	root: true,
	env : {browser: true,
	       node   : true},
	parserOptions: {ecmaFeatures: {impliedStrict: true},
	                ecmaVersion : 'latest',
	                sourceType  : 'module'},
	plugins: prettierrc.useTabs ? ['smarter-tabs'] : [],

	// eslint-disable-next-line object-curly-newline
	rules: {
		...possibleProblemRules,
		...suggestionRules,
		...layoutAndFormattingRules,
		...smarterTabsRule},

	// eslint-disable-next-line array-bracket-newline
	overrides: [
		// eslint-disable-next-line array-element-newline
		{files: ['.eslintrc.*', 'rules/*.js'],
		 rules: {'array-bracket-newline': [WARN, 'never'], // To emphasise warning level of each rule
		         'array-element-newline': [WARN, {multiline: true, minItems: 3}],

		         'line-comment-position'  : OFF,
		         'multiline-comment-style': [WARN, 'bare-block'],
		         'no-inline-comments'     : OFF,
		         'object-curly-newline'   : [WARN, 'never']}},

		// eslint-disable-next-line array-element-newline
		{files: ['.eslintrc.*', 'rules/*.js', 'prettierrc.*'],
		 rules: {'id-length'            : [WARN, {min: 2}],
		         // eslint-disable-next-line array-element-newline
		         'no-restricted-globals': [ERROR, 'document', 'event', 'window', 'navigator'],
		         'sort-keys'            : [ERROR,
		                                  'asc',
		                                  {caseSensitive: false,
		                                   natural      : true,
		                                   minKeys      : 20}]}},

		{files: ['prettierrc.js'],
		 rules: {'capitalized-comments'   : OFF,
		         'lines-around-comment'   : OFF,
		         'multiline-comment-style': [WARN, 'separate-lines']}},

		{files: ['prettierrc.default.js'],
		 rules: {'no-undefined': OFF, 'sort-keys': OFF}}]};