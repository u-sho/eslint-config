import u_sho from '@u-sho/eslint-config';

/** @type {Parameters<typeof u_sho.getConfigTsAll>[2]} */
const options = {
	blockSpacing            : true,
	eslintCommentsPluginName: 'eslint-comments',
	tsPluginName            : 'typescript'
};

const configJs = u_sho.getConfigTsAll('error', 'warn', { ...options, isJsFile: true });
const configTs = u_sho.getConfigTsAll('error', 'warn', options);

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} */
export default [
	...u_sho.configs.markdown,
	...u_sho.configs.base,
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
			'@stylistic/space-in-parens'                       : ['warn', 'never'],
			'typescript/naming-convention'                     : 'off',
			'typescript/no-unnecessary-boolean-literal-compare': 'off',
			'typescript/no-unnecessary-condition'              : 'off',
			'typescript/prefer-nullish-coalescing'             : 'off',
			'typescript/strict-boolean-expressions'            : 'off'
		}
	},
	{
		...configTs,
		rules: {
			...configTs.rules,
			'@stylistic/space-in-parens': ['warn', 'never']
		}
	},
	{
		files: ['src/vite-env.d.ts'],
		rules: {
			'@stylistic/eol-last'              : ['warn', 'never'],
			'typescript/triple-slash-reference': 'off'
		}
	}
];
