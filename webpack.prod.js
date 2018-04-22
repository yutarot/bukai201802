const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const LicenseInfoWebpackPlugin = require('license-info-webpack-plugin').default;

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    },
                    output: {
                        ascii_only: true,
                        comments: /^\**!|@preserve|@license|@cc_on/,
                    }
                },
            }),
        ],
    },
    plugins: [
        new LicenseInfoWebpackPlugin({
            glob: '{LICENSE,license,License}*',
        }),
    ],
    module: {
        rules: []
    }
});