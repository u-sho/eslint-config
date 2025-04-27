# @u-sho/eslint-config-format

Rules of ESLint as a formatter by u-sho.

## Installation

```shell
npm i -D eslint @u-sho/eslint-config-format
```

## Usage

Once the `@u-sho/eslint-config-format` package is installed, you can use it in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
// eslint.config.js
import u_shoFormatConfig from '@u-sho/eslint-config-format';

export default [
  ...u_shoFormatConfig
];
```

- Check the base rules at [here](https://github.com/u-sho/eslint-config-format/blob/main/.eslintrc.js).

### Additional rules

Your can customize rules for your project.
For example, using alias `@c/` as `src/components`, write like below.

```js
// eslint.config.js
import u_shoFormatConfig from '@u-sho/eslint-config-format';

export default [
  ...u_shoFormatConfig,
  {
    files: ["**/*.js", "**/*.ts"],
      rules  : {
      "n/no-restricted-import": ["error", [
        { name: "src/components/*", message: "Use @c/* instead." },
        // The below pattern is covered by `import/no-relative-parent-imports`.
        // { name: "../*", message: "Don't use relative path to any parent direction." },
      ]],
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
      }]
    }
  }
];
```

For more information about rules, see below documents.

- <https://eslint.org/docs/rules/#stylistic-issues>

## TODO

- `'@stylistic/lines-between-class-members'`, `'@stylistic/ts/lines-between-class-members'`
- `'@stylistic/no-mixed-operators'` in `short` option
- `'@eslint-community/eslint-comments/no-restricted-disable'`
- `'html/id-naming-convention'`

## License

[MIT](./LICENSE) &copy; 2021 [u-sho](https://github.com/u-sho).
