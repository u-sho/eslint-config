# @u-sho/eslint-config

ESLint config for @u-sho.

## Installation

```shell
npm i -D eslint @u-sho/eslint-config
```

## Usage

Once the `@u-sho/eslint-config` package is installed, you can use it like the below.

```js
// eslint.config.js
import u_sho from '@u-sho/eslint-config';

export default [
  ...u_sho.configs.javascript,
  ...u_sho.configs.markdown
];
```

or

```js
// eslint.config.js
import {configs, getConfigJsAll} from '@u-sho/eslint-config';

export default [
  ...configs.base,
  getConfigJsAll('error', 'warn', {indent: 2, tsPluginName: ''}),
  configs.markdown
];
```

### Additional rules

Your can customize rules for your project.
For example, using alias `@c/` as `src/components`, write like below.

```js
// eslint.config.js
import u_sho from '@u-sho/eslint-config';

export default [
  ...u_sho.configs.typescript,
  ...u_sho.configs.markdown,,
  {
    files: ["**/*.js", "**/*.ts"],
    rules: {
      "n/no-restricted-import": ["error", [
        { name: "src/components/*", message: "Use @c/* instead." }
      ]]
    }
  }
  {
    files: ["**/*.js", "**/*.ts"],
    rules  : {
      // Add your custom rules here

      "n/no-restricted-import": ["error", [
        { name: "src/components/*", message: "Use @c/* instead." },
        // The below pattern is covered by `import/no-relative-parent-imports`.
        // { name: "../*", message: "Don't use relative path to any parent direction." },
      ]],
      "n/no-extraneous-import": ["error", { allowModules: ["@eslint/js"] }],

      "import/order": ["warn", {
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "index"
        ],
        pathGroups: [
          { pattern: "@c/**", group: "internal" }
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc" }
      }],
      'import/no-restricted-paths': ["error", {
        zones: [
          {
            target: "./client",
            from: "./server",
            message: "越境しないで"
          },
          {
            target: "./server",
            from: "./client",
            except: ['./api/types'],
            message: "API型情報以外は越境しないで"
          }
        ]
      }],

      'typescript/no-restricted-types': ["error", {
        types: {
          'any': { message: 'Use `unknown` instead of `any`.' },
          'Function': { message: 'Use `(...args: any[]) => any` instead of `Function`.' },
          'object': { message: 'Use `Record<string, unknown>` instead of `object`.' }
        }
      }]
    }
  },
  {
    files: ["**/*.md"],
    rules  : {
      // code blocks language must be `js` or `ts`; not allowed `javascript`, `typescript`, etc.
      "markdown/fenced-code-language": ["error", { required: ["js", "ts"]}]
    }
  }
];
```

For more information about rules, see below documents.

- <https://eslint.org/docs/v9.x/rules/>
- <https://eslint.style/rules>
- <https://github.com/eslint/markdown#rules>
- <https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/>
- <https://github.com/eslint-community/eslint-plugin-n>
- <https://github.com/eslint-community/eslint-plugin-promise#rules>

## TODO

- `'@stylistic/lines-between-class-members'`, `'@stylistic/ts/lines-between-class-members'`
- `'@stylistic/no-mixed-operators'` in `short` option
- `'@eslint-community/eslint-comments/no-restricted-disable'`
- `'html/id-naming-convention'`
- `'@typescript-eslint/no-empty-function'`
- `'@typescript-eslint/no-unsafe-type-assertion'`

## License

[MIT](./LICENSE) &copy; 2021 [u-sho](https://github.com/u-sho).
