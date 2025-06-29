## [0.3.0](https://github.com/u-sho/eslint-config/compare/v0.2.0...v0.3.0) Add Module Type (2025-06-28)

### Breaking Changes

- `min` of `id-length` is changed from `4` to `3` ([#30](https://github.com/u-sho/eslint-config/pull/30))
- `memberSyntaxOrder` of `sort-imports` is changed from `['all', 'multiple', 'single', 'none']` to `['all', 'single', 'multiple', 'none']` ([#30](https://github.com/u-sho/eslint-config/pull/30))
- `@stylistic/no-mixed-operators` rule is remove on `short` option ([#30](https://github.com/u-sho/eslint-config/pull/30))
- `@typescript-eslint/method-signature-style` rule is changed from `method` to `property` on NON `short` option ([#30](https://github.com/u-sho/eslint-config/pull/30))

### Features

- add `index.d.ts` for module declaration ([#30](https://github.com/u-sho/eslint-config/pull/30))


## [0.2.0](https://github.com/u-sho/eslint-config/compare/v0.1.2...v0.2.0) Better Package Interface (2025-06-19)

### Breaking Changes

- `exports` way ([#28](https://github.com/u-sho/eslint-config/pull/28))

### Features

- add `isJsFile` option to `getConfigTsAll` ([#28](https://github.com/u-sho/eslint-config/pull/28))
- 

### Dependencies

- chore: update typescript-eslint ([#28](https://github.com/u-sho/eslint-config/pull/28))

### Fixes

- add `globals.browser` to typescript config ([#28](https://github.com/u-sho/eslint-config/pull/28))
- `languageOptions` of markdown and js


## [0.1.2](https://github.com/u-sho/eslint-config/compare/v0.1.1...v0.1.2) More Strict Types (2025-06-15)

### Dependencies

- bump `brace-expansion` from 1.1.11 to 1.1.12 ([#25](https://github.com/u-sho/eslint-config/pull/25))

### Fix

- more strict types ([#27](https://github.com/u-sho/eslint-config/pull/27))


## [0.1.1](https://github.com/u-sho/eslint-config/compare/v0.1.0...v0.1.1) Fix `exports` Paths (2025-06-07)

### Fix

- fix `exports` paths ([#24](https://github.com/u-sho/eslint-config/pull/24))


## [0.1.0](https://github.com/u-sho/eslint-config/compare/v0.0.2...v0.1.0) TypeScript Support (2025-06-06)

### Features

- add TypeScript rules ([#13](https://github.com/u-sho/eslint-config/pull/13)) ([344b78e9](https://github.com/u-sho/eslint-config/commit/344b78e9413902bfd00e6721bc1b8cca3003dccc))

### Dependencies

- upgrade dependencies; add new rules ([#18](https://github.com/u-sho/eslint-config/pull/18)) ([5c583c54](https://github.com/u-sho/eslint-config/commit/5c583c541dd1d01ea695bfd5b256eec05213f89d))
    - upgrade eslint from 9.26 to 9.27; add `no-unassigned-vars` rule
    - upgrade `eslint` from 9.27 to 9.28; some typescript supports
    - remove `@eslint/js`; `eslint` depends on `@eslint/js`

    - update `@stylistic/eslint-plugin` from  4.2 to 4.4
    - update `typescript-eslint` from 8.32 to 8.33

    - upgrade `eslint-plugin-n` from 17.17 to 17.19; add `no-top-level-await` rule
    - feat: add engines field to specify required Node.js version; for `no-top-level-await` rule
- chore: update `globals` 16.1 to 16.2 ([88d86d53](https://github.com/u-sho/eslint-config/commit/88d86d534e4957e2560564ad92297e369b4e7445))
- upgrade `@eslint/markdown` from 6.4 to 6.5; added 7 new rules ([#19](https://github.com/u-sho/eslint-config/pull/19)) ([13bd3ca5](https://github.com/u-sho/eslint-config/commit/13bd3ca57b9028f51b66e6245922f4f2ac8fad9d))
    - Add seven new rules (cf. [Release note](https://github.com/eslint/markdown/releases/tag/v6.5.0) )
