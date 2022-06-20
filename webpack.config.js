const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				type: 'asset/resource'
			}
		],
	},
}