module.exports = {
	context: __dirname,
	entry: "./test.js",
	output : {
		filename: 'test/bundle.js',
	},
	module: {
		rules: [
			{
				test: [require.resolve('./test')],
				loader: __dirname + '/../index?brfs',
				enforce: 'post',
			},
			{
				test: [require.resolve('./test.coffee')],
				loader: __dirname + "/../index?coffeeify",
				enforce: 'post',
			}
		]
	}
}
