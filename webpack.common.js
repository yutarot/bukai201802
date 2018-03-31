const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dist = path.resolve(__dirname, 'dist');

var webpack = require('webpack');

module.exports = {
  output: {
    filename: '[name].bundle.js',
    path: dist
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  },
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(dist)
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-es2015']
        }
      }
    }]
  }
};