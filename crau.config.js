module.exports = {
  modifyWebpack: function(config) {
    var newConfig = Object.assign({}, config, {
      output: Object.assign({}, config.output, { libraryTarget: 'commonjs2' }),
      entry: './server/app.js'
    });
    return newConfig;
  }
};
