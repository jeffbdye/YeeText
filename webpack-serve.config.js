const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  devServer: {
    static: './public',
    compress: true,
    port: 3000
  },
  devtool: 'source-map',
  mode: 'development'
});
