const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0', // OpenAPI 버전
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'API documentation example',
        },
        servers: [
            {
                url: 'http://localhost:5000', // 서버 URL
            },
        ],
        components: {
            securitySchemes: {
                Token: {
                    type: 'http',
                    scheme : 'Bearer',
                    bearerFormat: 'JWT',
                    in: 'header',
                    name: 'Authorization',
                },
            },
            security: [
                {
                  Token: [],
                },
              ],
        },
    },
    apis: ['./routers/**/*.js', './src/swagger/*.js'], // server.js 위치 기준으로 설정하기
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;