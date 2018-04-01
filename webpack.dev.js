const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: {
        main: './src/index.js',
        debug: './src/debug.js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        minimize: true,
                        sourceMap: true
                    },
                },
            ],
        }]
    }
});