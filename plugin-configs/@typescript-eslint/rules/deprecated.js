/**
 * @see https://typescript-eslint.io/rules/?=deprecated
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check


/** @returns {import('eslint').Linter.RulesRecord} */
export default () => ({
	// Disallow the declaration of empty interfaces
	'@typescript-eslint/no-empty-interface': 0, // Subset of `@typescript-eslint/no-empty-object-type`.

	// Disallow literal numbers that lose precision
	'@typescript-eslint/no-loss-of-precision': 0, // Use `no-loss-of-precision` instead.

	// Disallow type aliases
	'@typescript-eslint/no-type-alias': 0, // Subset of `@typescript-eslint/consistent-type-definitions`.

	// Disallow `require` statements except in import statements
	'@typescript-eslint/no-var-requires': 0, // Subset of `@typescript-eslint/no-require-imports`.

	// Enforce using `@ts-expect-error` over `@ts-ignore`
	'@typescript-eslint/prefer-ts-expect-error': 0, // Subset of `@typescript-eslint/ban-ts-comment`.

	// Enforce constituents of a type union/intersection to be sorted alphabetically
	'@typescript-eslint/sort-type-constituents': 0 /* Subset of `@typescript-eslint/sort-intersection-types`
	                                                            and `perfectionist/sort-union-types`. */
});
