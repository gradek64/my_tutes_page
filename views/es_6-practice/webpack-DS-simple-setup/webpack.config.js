module.exports = {
    entry: './app-entry-point.js', 
    output: {
        filename: 'app.bundle.js', 
        path: __dirname, 
        publicPath: __dirname
    }
};