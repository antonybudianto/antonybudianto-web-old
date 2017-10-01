var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var NodemonPlugin = require('nodemon-webpack-plugin');

function isProd(valProd, valDev) {
  return process.env.NODE_ENV === 'production' ? valProd : valDev;
}

module.exports = {
  // For Firebase function/package bundle
  entry: './src/app.js',

  // For standalone express bundle
  // entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    chunkFilename: isProd('[id].[hash].chunk.js', '[id].chunk.js'),
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: [
    nodeExternals()
  ],
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
          presets: ['env', 'react-app'],
          plugins: [
            [require.resolve('babel-plugin-import-inspector'), {
              serverSideRequirePath: true,
              webpackRequireWeakId: true
            }]
          ]
        }
      },
      {
        test: /\.(css|svg)?$/,
        loaders: 'null-loader'
      }
    ],
  },
  plugins: isProd([
      new webpack.optimize.UglifyJsPlugin()
    ], [
      new NodemonPlugin()
    ])
}
