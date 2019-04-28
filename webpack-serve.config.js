const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3500
  },
  devtool: 'source-map',
  mode: 'development'
});
