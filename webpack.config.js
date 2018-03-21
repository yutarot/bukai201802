const path = require('path');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: './src/js/app.js',
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".js"]
  },
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