'use strict';

const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function(proxy) {
  return {
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    watchContentBase: true,
    hot: true,
    // publicPath: '/',
    quiet: true,
    // https: protocol === 'https',
    host,
    open: false,
    overlay: {
      errors: true,
      warnings: false
    },
    inline: true,
    // historyApiFallback: {
    //   disableDotRule: true
    // },
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '/api': '/api'
        }
      }
    }
  };
};
