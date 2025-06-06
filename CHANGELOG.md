## [0.1.0](https://github.com/u-sho/eslint-config/compare/v0.0.2...v0.1.0) (2025-06-06)

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
