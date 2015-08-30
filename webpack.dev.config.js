var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/assets/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dicogame',
      template: path.join(__dirname, 'assets/html/index-template.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js']
  },
  module: {
    loaders: [{
      test: /\.ts(x?)$/,
      loaders: ['react-hot', 'ts-loader?instance=jsx&compiler=ntypescript']
    }]
  }
}
