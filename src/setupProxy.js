const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/movieList',
    createProxyMiddleware({
      target: 'https://hoblist.com',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3004'
      }
    })
  );
};

// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();
// const apiProxy = createProxyMiddleware('/api/movieList', {
//   target: 'https://hoblist.com', 
//   changeOrigin: true,
// });

// // Apply the proxy to the app
// app.use(apiProxy);

// // Start the server
// const port = 3004; // Choose a port for your proxy server
// app.listen(port, () => {
//   console.log(`Proxy server listening on port ${port}`);
// });
