const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig,{
  devServer: {
    port: 3000
  }
});
