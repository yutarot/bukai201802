const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(dist),
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