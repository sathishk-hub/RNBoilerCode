module.exports = {
	env: {
		es2021: true,
		node: true,
		'react-native/react-native': true,
		jest: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
	parser: '@babel/eslint-parser',
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-native'],
	rules: {
		'global-require': 'off',
		// allow .js files to contain JSX code
		'react/jsx-filename-extension': [
			'error',
			{ extensions: ['.js', '.jsx'] },
		],
		'no-use-before-define': [
			'error',
			{
				functions: true,
				classes: true,
				variables: true,
			},
		],
		'react-native/no-unused-styles': 'error',
		'react-native/split-platform-components': 'error',
		'react-native/no-inline-styles': 'error',
		'react-native/no-color-literals': 'error',
		'react-native/no-raw-text': 'error',
		'react-native/no-single-element-style-arrays': 'error',
	},
};
