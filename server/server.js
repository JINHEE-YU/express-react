const express = require('express');
const app = express();

// 환경변수 설정
// NODE_ENV에 따라 적절한 .env 파일 로드
const envFile = `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`;
require('dotenv').config({ path: envFile });

// 개발 모드와 프로덕션 모드에 따른 설정
if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
} else {
    console.log('Production mode');
}

// 로그 설정
const morganMiddleware = require('./src/config/log-morgan');
app.use(morganMiddleware);


// Swagger 설정
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./src/swagger/swaggerOptions');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// router 설정
const apiRouter = require('./routers/api');
app.use('/api', apiRouter);

// 서버 실행 설정
const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})