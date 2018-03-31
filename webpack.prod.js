const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJSPlugin()
    ],
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
                    },
                },
            ],
        }]
    }
});