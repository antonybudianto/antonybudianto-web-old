const env = process.env.NODE_ENV || 'development';

module.exports = {
  modifyWebpack: config => {
    const newConfig = {
      ...config,
      output: {
        ...config.output,
        libraryTarget: 'commonjs2'
      },
      entry: env === 'development' ? './server/index.js' : './server/app.js'
    };
    return newConfig;
  }
};
