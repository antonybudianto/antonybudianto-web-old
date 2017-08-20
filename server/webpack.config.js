var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/app.js',
  // entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          presets: ['env', 'react-app']
        }
      },
      {
        test: /\.(css|svg)?$/,
        loaders: 'null-loader'
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
