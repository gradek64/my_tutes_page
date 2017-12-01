var webpack = require('webpack');

var config = {
    //context:  SRC_DIR,//specyfiy the starting point folder  (optional)
    entry: [
    'webpack-dev-server/client?https://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app/index.js'], 
    output: {
        filename: 'bundle.js', 
        path: __dirname+'/build'
    },
	module: {
		 loaders: [
		 		{
				 	loader:'babel-loader',
				 	test:/\.js$/,
				 	exclude:'/node_modules'
		 		}
			]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	    //specify port for server
    devServer: {
        inline:true,
        contentBase: __dirname,
        hot:true
    }
}

module.exports = config;