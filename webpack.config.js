// webpack is a code/module bundler for JS apps - it takes code and makes it usable in a browser.
// when webpack processes an app, it builds a 'dependency graph' which maps code and assets the project needs and generates one or more 'bundles'.
// A 'bundle' is a group of connected code that has been compiled for the browser.

// there are 3 things webpack needs to know
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	// 1. starting point webpack uses to start building dependency graph (root JS file)
	entry: './src/index.jsx',
  // 2. which transformations to make
  //      by default webpack only understands JS and JSON files, all other files need to be converted
	//      loaders transform non-JS source code so we can preprocess the files and add to dependency graph
	module: {
		rules: [
			{ test: /\.(js||jsx)$/, use: 'babel-loader' }, // use babel JS compiler on all extensions that end with .jsx
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] }, // interprets @import and url() like import/require()
			{ test: /\.svg$/, use: ['@svgr/webpack'] },
		],
	},
	// 3. where to output newly transformed code when webpack runs (it will end up in {AppName}/dist/bundle.js)
	output: {
		path: path.resolve(__dirname, 'dist'),
		// path: __dirname + 'app/assets/javascript',
		filename: 'bundle.js',
  },
  // optional configuratins below
	// 1. plugins are used for any other task that loaders can’t do (asset mgmt, optimization etc.)
	plugins: [
		// this plugin injects bundled JS as part of build process,
		// otherwise we have to manually add it in index.html
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
};
