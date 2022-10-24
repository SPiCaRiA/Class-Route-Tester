/**
 * Setup proxy for backend APIs.

 * @author Weixuan Lin
 */

'use strict';

const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_DOMAIN,
      changeOrigin: true,
    }),
  );
};
