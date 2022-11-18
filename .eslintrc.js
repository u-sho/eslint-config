const OFF = 0
const WARN = 1
const ERROR = 2

// Prettier options
const prettierrc = {
  printWidth    : 80,
  tabWidth      : 2,
  useTabs       : false,
  semi          : false,
  singleQuote   : true,
  quoteProps    : 'as-needed',
  trailingCommas: 'none',
  bracketSpacing: true,
  rangeEnd      : Infinity,
  endOfLine     : 'lf'

  /*
   * Non-used options
   *
   * jsxSingleQuote           : false,
   * jsxBracketSameLine       : false,
   * arrowParens              : 'always',
   * rangeStart               : 0,
   * htmlWhitespaceSensitivity: 'css',
   * vueIndentScriptAndStyle  : false,
   */
}

// EditorConfig properties
const editorConfig = {
  indent_style            : prettierrc.useTabs ? 'tab' : 'space',
  indent_size             : prettierrc.tabWidth,
  end_of_line             : prettierrc.endOfLine,
  charset                 : 'utf-8',
  trim_trailing_whitespace: true,
  insert_final_newline    : true,
  max_line_length         : prettierrc.printWidth
}

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: [
    'node_modules',
    'dist',
    'package-lock.json',
    'yarn.lock.json',
    '*.local'
  ],

  root: true,
  env : {
    browser: true,
    node   : true
  },
  parserOptions: {
    ecmaFeatures: { impliedStrict: true },
    ecmaVersion : 2020,
    sourceType  : 'module'
  },
  rules: {
    // Enforce linebreak after opening and before closing array brackets,
    'array-bracket-newline': [ERROR, { multiline: true }],

    // Enforce consistent spacing inside array brackets,
    'array-bracket-spacing': ERROR,

    // Enforce line breaks after each array element
    'array-element-newline': [ERROR, 'consistent'],

    // Enforce spaces; after opening block and before closing block
    'block-spacing': [ERROR, prettierrc.bracketSpacing ? 'always' : 'never'],

    // Consistent brace style for blocks
    'brace-style': [ERROR, '1tbs', { allowSingleLine: true }],

    // Enforce camelcase naming convention
    'camelcase': ERROR,

    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': [ERROR, 'always'],

    // Require or disallow trailing commas
    'comma-dangle': [ERROR, 'never'],

    // Enforce consistent spacing before and after commas
    'comma-spacing': ERROR,

    // Enforce consistent comma style
    'comma-style': ERROR,

    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ERROR,

    // Enforce consistent naming when capturing the current execution context
    'consistent-this': [ERROR, 'self'],

    // Require or disallow newline at the end of files
    'eol-last': [ERROR, editorConfig.insert_final_newline ? 'always' : 'never'],

    // Disallow spacing between function identifiers and their invocations
    'func-call-spacing': ERROR,

    /*
     * Require function names to match the name of the variable or property
     * to which they are assigned
     */
    'func-name-matching': [ERROR,
      { considerPropertyDescriptor: true, includeCommonJSModuleExports: true }],

    // Require or disallow named `function` expressions
    'func-names': [ERROR, 'as-needed'],

    // Enforce the consistent use of either function declarations or expressions
    'func-style': ERROR,

    // Enforce line breaks between arguments of a function call
    'function-call-argument-newline': [ERROR, 'consistent'],

    // Enforce consistent line breaks inside function parentheses
    'function-paren-newline': ERROR,

    // Disallow specified identifiers
    'id-denylist': OFF,

    // Enforce minimum and maximum identifier lengths
    'id-length': ERROR,

    // Require identifiers to match a specified regular expression
    'id-match': OFF,

    // Enforce the location of arrow function bodies
    'implicit-arrow-linebreak': ERROR,

    // Enforce consistent indentation
    'indent': [ERROR, prettierrc.useTabs ? 'tab' : prettierrc.tabWidth],

    // Enforce the consistent use of either " or ' quotes in JSX attributes
    'jsx-quotes': ERROR,

    // Enforce consistent spacing in every key-value object literal properties
    'key-spacing': ERROR,

    // Enforce consistent spacing before and after keywords
    'keyword-spacing': [ERROR,
      {
        overrides: {
          for  : { after: false },
          if   : { after: false },
          while: { after: false }
        }
      }],

    // Enforce position of line comments
    'line-comment-position': [ERROR,
      { ignorePattern: 'webpackChunkName:\\s.+' }],

    // Enforce consistent linebreak style
    'linebreak-style': [ERROR,
      prettierrc.endOfLine === 'lf' ? 'unix' : 'windows'],

    // Require empty lines around comments
    'lines-around-comment': [ERROR,
      {
        allowArrayEnd     : true,
        allowArrayStart   : true,
        allowBlockStart   : true,
        allowClassStart   : true,
        allowObjectEnd    : true,
        allowObjectStart  : true,
        beforeBlockComment: true,
        beforeLineComment : true
      }],

    // Require or disallow an empty line between class members
    'lines-between-class-members': ERROR,

    // Enforce a maximum depth that blocks can be nested
    'max-depth': [ERROR, 3],

    // Enforce a maximum line length
    'max-len': [ERROR,
      {
        code                  : prettierrc.printWidth,
        tabWidth              : prettierrc.tabWidth,
        ignoreUrls            : true,
        ignoreStrings         : true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals  : true

      }],

    // Enforce a maximum number of lines per file
    'max-lines': prettierrc.rangeEnd === Infinity
      ? OFF
      : [ERROR,
        {
          max           : prettierrc.rangeEnd,
          skipBlankLines: true,
          skipComments  : true
        }],

    // Enforce a maximum number of lines of code in a function
    'max-lines-per-function': [ERROR,
      { max: 20, skipBlankLines: true, skipComments: true }],

    // Enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': [ERROR, { max: 2 }],

    // Enforce a maximum number of parameters in function definitions
    'max-params': ERROR,

    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': ERROR,

    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': [ERROR, { max: 2 }],

    // Enforce a particular style for multiline comments
    'multiline-comment-style': ERROR,

    // Enforce newlines between operands of ternary expressions
    'multiline-ternary': [ERROR, 'always-multiline'],

    // Require constructor names to begin with a capital letter
    'new-cap': ERROR,

    // Disallow parentheses when invoking a constructor with no arguments
    'new-parens': [ERROR, 'never'],

    // Require a newline after each call in a method chain
    'newline-per-chained-call': ERROR,

    // Disallow `Array` constructors
    'no-array-constructor': ERROR,

    // Disallow bitwise operators
    'no-bitwise': ERROR,

    // Disallow `continue` statements
    'no-continue': OFF,

    // Disallow inline comments after code
    'no-inline-comments': [ERROR, { ignorePattern: 'webpackChunkName:\\s.+' }],

    // Disallow `if` statements as the only statement in `else` blocks
    'no-lonely-if': ERROR,

    // Disallow mixed binary operators
    'no-mixed-operators': ERROR,

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': [ERROR, 'smart-tabs'],

    // Disallow use of chained assignment expressions
    'no-multi-assign': ERROR,

    // Disallow multiple empty lines
    'no-multiple-empty-lines': [ERROR,
      { max: 1, maxBOF: 0, maxEOF: 0 }],

    // Disallow negated conditions
    'no-negated-condition': ERROR,

    // Disallow nested ternary expressions
    'no-nested-ternary': ERROR,

    // Disallow `Object` constructors
    'no-new-object': ERROR,

    // Disallow the unary operators `++` and `--`
    'no-plusplus': [ERROR, { allowForLoopAfterthoughts: true }],

    // Disallow specified syntax
    'no-restricted-syntax': [ERROR,
      {
        selector: 'FunctionExpression',
        message : 'Function expressions are not allowed.'
      },
      {
        selector: 'WithStatement',
        message : 'With statements are not allowed.'
      },
      {
        selector: "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
        message : 'setTimeout must always be invoked with two arguments.'
      },
      {
        selector: 'TemplateLiteral[expressions.length=0]',
        message : 'In this case, back quotes are not allowed. Use single quotes.'
      }],

    // Disallow all tabs
    'no-tabs': [ERROR, { allowIndentationTabs: prettierrc.useTabs }],

    // Disallow ternary operators
    'no-ternary': OFF,

    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': editorConfig.trim_trailing_whitespace ? ERROR : OFF,

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': ERROR,

    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ERROR,

    // Disallow whitespace before properties
    'no-whitespace-before-property': ERROR,

    // Enforce the location of single-line statements
    'nonblock-statement-body-position': ERROR,

    // Enforce consistent line breaks after opening and before closing braces
    'object-curly-newline': [ERROR, { multiline: true }],

    // Enforce consistent spacing inside braces
    'object-curly-spacing': [ERROR,
      prettierrc.bracketSpacing ? 'always' : 'never',
      { objectsInObjects: !(prettierrc.bracketSpacing) }],

    // Enforce placing object properties on separate lines
    'object-property-newline': [ERROR, { allowAllPropertiesOnSameLine: true }],

    // Enforce variables to be declared together in functions
    'one-var': [ERROR,
      { var: 'always', let: 'always', const: 'never' }],

    // Require or disallow newlines around variable declarations
    'one-var-declaration-per-line': ERROR,

    // Require or disallow assignment operator shorthand where possible
    'operator-assignment': ERROR,

    // Enforce consistent linebreak style for operators
    'operator-linebreak': [ERROR, 'before'],

    // Require or disallow padding within blocks
    'padded-blocks': [ERROR, 'never'],

    // Require or disallow padding lines between statements
    'padding-line-between-statements': [ERROR,
      { blankLine: 'always', next: '*', prev: 'import' },
      { blankLine: 'any', next: 'import', prev: 'import' },
      { blankLine: 'never', next: '*', prev: 'singleline-let' },
      { blankLine: 'always', next: 'return', prev: '*' }],

    // Disallow the use of `Math.pow` in favor of the `**` operator
    'prefer-exponentiation-operator': ERROR,

    /*
     * Disallow using Object.assign with an object literal as the first argument
     * and 'prefer the use of object spread instead.
     */
    'prefer-object-spread': ERROR,

    // Require quotes around object literal property names
    'quote-props': [ERROR, prettierrc.quoteProps],

    // Enforce the consistent use of either double, or single quotes
    'quotes': [ERROR,
      prettierrc.singleQuote ? 'single' : 'double',
      { allowTemplateLiterals: false, avoidEscape: true }],

    // Require or disallow semicolons instead of ASI
    'semi': [ERROR, prettierrc.semi ? 'always' : 'never'],

    // Enforce consistent spacing before and after semicolons
    'semi-spacing': ERROR,

    // Enforce location of semicolons
    'semi-style': ERROR,

    // Require object keys to be sorted
    'sort-keys': [ERROR, 'asc', { caseSensitive: false, natural: true }],

    // Require variables within the same declaration block to be sorted
    'sort-vars': [ERROR, { ignoreCase: true }],

    // Enforce consistent spacing before blocks
    'space-before-blocks': ERROR,

    // Enforce consistent spacing before `function` definition opening parens
    'space-before-function-paren': [ERROR,
      { anonymous: 'never', named: 'never', asyncArrow: 'always' }],

    // Enforce consistent spacing inside parentheses
    'space-in-parens': [ERROR, 'never', { exceptions: ['()'] }],

    // Require spacing around infix operators
    'space-infix-ops': ERROR,

    // Enforce consistent spacing before or after unary operators
    'space-unary-ops': ERROR,

    // Enforce consistent spacing after the `//` or `/*` in a comment
    'spaced-comment': [ERROR, 'always', { line: { markers: ['/'] }}],

    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': ERROR,

    // Require or disallow spacing between template tags and their literals
    'template-tag-spacing': ERROR,

    // Require or disallow Unicode byte order mark (BOM)
    'unicode-bom': [ERROR,
      editorConfig.charset === 'utf-8-bom' ? 'always' : 'never'],

    // Require parenthesis around regex literals
    'wrap-regex': OFF,

    // Custom rules
    // eslint-disable-next-line sort-keys
    'arrow-parens'          : [ERROR, 'as-needed'],
    'complexity'            : [ERROR, { max: 2 }],
    'curly'                 : [ERROR, 'multi-or-nest', 'consistent'],
    'dot-location'          : [ERROR, 'property'],
    'grouped-accessor-pairs': [ERROR, 'getBeforeSet'],
    'object-shorthand'      : [ERROR, 'always', { avoidExplicitReturnArrows: true }],

    // Off rules
    // eslint-disable-next-line sort-keys
    'no-multi-spaces'        : OFF,
    'no-useless-computed-key': OFF,
    'sort-imports'           : OFF
  },
  overrides: [
    {
      files: ['.eslintrc.*'],
      rules: {
        'array-bracket-newline': [ERROR, 'consistent'],
        'camelcase'            : OFF,
        'key-spacing'          : [ERROR, { align: 'colon' }],
        'max-lines'            : OFF,
        'no-restricted-globals': [ERROR, 'document', 'window', 'navigator'],
        'sort-keys'            : [ERROR, 'asc', { minKeys: 20 }],
        'quote-props'          : [ERROR, 'consistent']
      }
    }
  ]
}
