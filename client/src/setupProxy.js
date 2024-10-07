const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use( 
        createProxyMiddleware("/api", {
            target: `http://localhost:${process.env.NODE_ENV ? process.env.NODE_ENV : 5000}`,
            changeOrigin: true
        })
    );
};