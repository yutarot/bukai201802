const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
    extensions: ["*", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(dist),
    new HtmlWebpackPlugin({
      template: 'template.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    })
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
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: {
          loader: "css-loader",
          options: {
            url: false,
            minimize: true
          }
        }
      })
    }
    ]
  }
};