# @u-sho/eslint-config

ESLint config for @u-sho.

## Installation

```shell
npm i -D eslint @u-sho/eslint-config
```

## Usage

Once the `@u-sho/eslint-config` package is installed, you can use it in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
	extends: "@u-sho",
}
```

- Check the base rules at [here](https://github.com/u-sho/eslint-config-format/blob/main/.eslintrc.js).

### Additional rules

Your can customize rules for your project.
For example, using alias `@c/` as `src/components`, write like below.

```js
{
	extends: "@u-sho",
	rules  : {
		"no-restricted-imports": ["error", { pattern: ["@/components/*"] }]
	}
}
```

For more information about rules, see below documents.

- <https://eslint.org/docs/rules/#stylistic-issues>

## License

[MIT](./LICENSE) &copy; 2021 [u-sho](https://github.com/u-sho).
