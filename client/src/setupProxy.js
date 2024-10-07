const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use( 
        createProxyMiddleware("/api", {
            target: `http://localhost:${process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000}`,
            changeOrigin: true
        })
    );
};