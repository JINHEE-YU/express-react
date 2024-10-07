// src/config/morgan.js
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const moment = require('moment-timezone');

const logDirectory = 'C:/log/express-react';

// 한국 시간으로 포맷하는 함수
const getKoreanTimestamp = () => {
  return moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
};

// 로그 파일 회전 설정 : HTTP 요청 로그를 access.log 파일에 기록
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  size: "10M",
  path: logDirectory,
  compress: 'gzip',
  maxFiles: 30,
});

// Morgan 미들웨어 설정
const morganMiddleware = morgan((tokens, req, res) => {
  const timestamp = getKoreanTimestamp();
  return [
    timestamp,
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens['remote-addr'](req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens['user-agent'](req, res)
  ].join(' ');
}, {
  stream: accessLogStream, 
  skip: (req, res) => false
});

module.exports = morganMiddleware; // 미들웨어를 모듈로 내보냄
