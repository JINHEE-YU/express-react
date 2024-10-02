// src/config/morgan.js
const morgan = require('morgan');
const rfs = require('rotating-file-stream');

const logDirectory = 'C:/log/express-react';

// 로그 파일 회전 설정 : HTTP 요청 로그를 access.log 파일에 기록
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // 하루에 한 번 회전
  path: logDirectory // 로그 파일이 저장될 디렉토리
});

// Morgan 미들웨어 설정
const morganMiddleware = morgan('combined', {
  stream: accessLogStream // morgan 로그를 access.log로 직접 기록
});

module.exports = morganMiddleware; // 미들웨어를 모듈로 내보냄
