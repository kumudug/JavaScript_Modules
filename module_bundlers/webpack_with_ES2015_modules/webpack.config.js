module.exports = {
    entry: './module_bundlers/webpack_with_ES2015_modules/js/app.js',
    output: {
        path: './module_bundlers/webpack_with_ES2015_modules/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};