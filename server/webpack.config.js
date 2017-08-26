var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

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
    chunkFilename: '[id].[hash].chunk.js',
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
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
