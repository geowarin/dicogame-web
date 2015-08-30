var path = require('path');
var webpack = require('webpack');
var jeet = require('jeet');
var nib = require('nib');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dicogame',
      template: path.join(__dirname, 'assets/html/index-template.html')
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js']
  },
  module: {
    loaders: [{
      test: /\.ts(x?)$/,
      loaders: ['react-hot', 'ts-loader?instance=jsx&compiler=ntypescript'],
      exclude: /node_modules/
    }, {
      test: /\.styl$/,
      loaders: ['style-loader', 'css-loader', 'stylus-loader']
    }]
  },
  stylus: {
    use: [jeet(), nib()]
  }
};
