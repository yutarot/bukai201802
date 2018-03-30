const path = require('path');
const dist = path.resolve(__dirname, 'dist');
const devMode = process.env.NODE_ENV !== 'production';

let loaders = [];

loaders.push({
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['babel-preset-es2015']
    }
  }
});

let config = {
  mode: 'production',
  entry: './src/js/app.js',
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ["*", ".webpack.js", ".web.js", ".js"]
  },
  module: {
    rules: loaders
  }
};

if (devMode) {
  config.devtool = 'source-map';
}

module.exports = config;