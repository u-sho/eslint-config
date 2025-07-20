import globals from 'globals';
import svelte from 'eslint-plugin-svelte';
import u_sho from '@u-sho/eslint-config';

import { config as makeConfig, parser as tsParser } from 'typescript-eslint';

import svelteConfig from './svelte.config.js';


/** @type {Parameters<typeof u_sho.getConfigTsAll>[2]} */
const options = {
	blockSpacing            : true,
	eslintCommentsPluginName: 'eslint-comments',
	tsPluginName            : 'typescript'
};

const configJs = u_sho.getConfigTsAll('error', 'warn', { ...options, isJsFile: true });
const configTs = u_sho.getConfigTsAll('error', 'warn', options);

export default makeConfig([
	...u_sho.configs.markdown,
	...u_sho.configs.base,
	{
		...configTs,
		rules: {
			...configTs.rules,
			'@stylistic/space-in-parens'     : ['warn', 'never'],
			'typescript/prefer-destructuring': ['error', { array: true, object: true }, { enforceForRenamedProperties: false }]
		},
		settings: {
			tsconfigPath: './tsconfig.json'
		}
	},
	{
		files: ['src/vite-env.d.ts'],
		rules: {
			'@stylistic/eol-last'              : ['warn', 'never'],
			'typescript/triple-slash-reference': 'off'
		}
	},
	...svelte.configs.recommended.map(config => ({
		...config,
		files: ['*.svelte', '**/*.svelte']
	})),
	{
		files          : ['*.svelte', '**/*.svelte'],
		languageOptions: {
			ecmaVersion: 'latest',
			globals    : {
				...globals.browser,
				...globals.node
			},
			parserOptions: {
				ecmaFeatures: {
					impliedStrict: true
				},
				extraFileExtensions: ['.svelte'],
				parser             : tsParser,
				projectService     : true,
				svelteConfig,
				tsconfigRootDir    : import.meta.dirname
			}
		},
		plugins: {
			...configTs.plugins
		},
		rules: {
			...configTs.rules,
			'@stylistic/eol-last'       : ['warn', 'never'],
			'@stylistic/space-in-parens': ['warn', 'never'],

			'eslint-comments/no-restricted-disable': ['warn', '!typescript/*'],

			'id-length': [
				'warn',
				{
					exceptions: ['i', 'e'],
					max       : 26,
					min       : 3,
					properties: 'never'
				}
			],
			'no-console'       : ['error', { allow: ['info', 'warn', 'error', 'table'] }],
			'no-nested-ternary': 'off',

			'n/no-missing-import': 'off',

			'typescript/explicit-function-return-type': [
				'error',
				{
					allowConciseArrowFunctionExpressionsStartingWithVoid: true,

					allowedNames: ['handleSquareClick', 'handleCollapse', 'handleNextGameClick', 'handleResetGameClick']
				}
			],
			'typescript/naming-convention': [
				'warn',
				{
					custom: {
						match: false,
						regex: '^X|Y$'
					},
					format  : ['camelCase'],
					selector: 'objectLiteralProperty'
				}
			],
			'typescript/no-confusing-void-expression': 'off',
			'typescript/prefer-destructuring'        : [
				'error',
				{ array: true, object: true },
				{ enforceForRenamedProperties: false }
			],
			'typescript/prefer-readonly-parameter-types': [
				'error',
				{
					allow: [
						{ from: 'lib', name: 'MouseEvent' },
						{ from: 'lib', name: 'KeyboardEvent' }
					],
					ignoreInferredTypes: true
				}
			]
		}
	},
	{
		...configJs,
		files          : ['*.js'],
		languageOptions: {
			...configJs.languageOptions,
			parserOptions: {
				// ...configJs.languageOptions.parserOptions,
				ecmaFeatures: {
					impliedStrict: true
				},
				projectService: {
					allowDefaultProject: ['svelte.config.js', 'eslint.config.js']
				}
			}
		},
		rules: {
			...configJs.rules,
			'@stylistic/space-in-parens': ['warn', 'never'],
			'n/no-extraneous-import'    : [
				'error',
				{ allowModules: ['typescript-eslint', 'globals'] }
			],
			'typescript/naming-convention'                     : 'off',
			'typescript/no-unnecessary-boolean-literal-compare': 'off',
			'typescript/no-unnecessary-condition'              : 'off',
			'typescript/prefer-nullish-coalescing'             : 'off',
			'typescript/strict-boolean-expressions'            : 'off'
		}
	},
	{
		files: ['eslint.config.js'],
		rules: {
			'n/file-extension-in-import'        : ['error', 'always'],
			'typescript/no-unsafe-member-access': 'off'
		}
	},
	{
		files: ['eslint.config.js', '*.svelte', '**/*.svelte'],
		rules: {
			'typescript/no-magic-numbers': [
				'warn',
				{
					enforceConst                 : true,
					ignore                       : [0, 1, 2, 3, 9],
					ignoreDefaultValues          : true,
					ignoreEnums                  : true,
					ignoreNumericLiteralTypes    : true,
					ignoreReadonlyClassProperties: true
				}
			]
		}
	},
	{
		files: ['src/lib/QuantumTTT.svelte', 'src/lib/ViewOfflineApp.svelte'],
		rules: {
			'eslint-comments/no-use': ['warn', { allow: ['eslint-disable', 'eslint-enable'] }]
		}
	}
]);
