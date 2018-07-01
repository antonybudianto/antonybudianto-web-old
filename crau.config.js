'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

module.exports = {
  modifyWebpack: function modifyWebpack(config) {
    var newConfig = _extends({}, config, {
      output: _extends({}, config.output, {
        libraryTarget: 'commonjs2'
      }),
      entry: './server/app.js'
    });
    return newConfig;
  }
};
