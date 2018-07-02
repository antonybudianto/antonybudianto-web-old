module.exports = {
  modifyWebpack: config => {
    const newConfig = {
      ...config,
      output: {
        ...config.output,
        libraryTarget: 'commonjs2'
      },
      entry: './server/app.js'
    };
    return newConfig;
  }
};
