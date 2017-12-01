module.exports = {
    entry: "./app/entry-point.js",
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                loader:"babel-loader",
                test: /\.js$/,
                exclude:"/node_modules/" 
            }
        ]
    },
    devServer:{
        port:3000,
        contentBase:'./', //to make work from directory not a file
        inline:true
    }
};