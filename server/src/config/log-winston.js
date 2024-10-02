// src/config/logger.js
const winston = require('winston');
const rfs = require('rotating-file-stream');
const p = require('path');

const logDirectory = 'C:/log/express-react';

// 로그 파일 회전 설정 : 애플리케이션 로그를 application.log 파일에 기록
const accessLogStream = rfs.createStream('application.log', {
  interval: '1d', // 하루에 한 번 회전
  path: logDirectory // 로그 파일이 저장될 디렉토리
});

// Winston 로거 설정
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(), // 콘솔에 로그 출력
    new winston.transports.Stream({ stream: accessLogStream }) // 회전 파일에 로그 저장
    // new winston.transports.File({ filename: 'application.log' })
  ],
});

module.exports = logger; // 로거를 모듈로 내보냄