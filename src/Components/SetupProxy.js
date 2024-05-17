const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // The path to proxy (e.g., /api)
    createProxyMiddleware({
      target: 'http://localhost:4000/', // The URL of your API server
      changeOrigin: true,
    })
  );
};
