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
        rules: []
    }
});