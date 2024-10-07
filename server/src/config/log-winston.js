// src/config/logger.js
const winston = require('winston');
const rfs = require('rotating-file-stream');
const p = require('path');
const moment = require('moment-timezone');

const logDirectory = 'C:/log/express-react';

// 원하는 형식으로 한국 시간 출력
const getFormattedTimestamp = () => {
  return moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
};
// 콘솔 출력 설정
const consoleTransport = new winston.transports.Console({
  level: 'debug', // 'debug' 이상의 로그만 콘솔에 출력
  format: winston.format.combine(
    // winston.format.colorize(),
    winston.format.timestamp({ format: getFormattedTimestamp }),
    // winston.format.prettyPrint(),
    //winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  handleExceptions: true,
  exitOnError: false,
})

// 로그 파일 회전 설정 : 애플리케이션 로그를 application.log 파일에 기록
const accessLogStream = rfs.createStream('application.log', {
  interval: '1d',
  size: "10M",
  path: logDirectory,
  compress: 'gzip',
  maxFiles: 30,
});

// Winston 로거 설정
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: getFormattedTimestamp }),
    winston.format.json()
  ),
  transports: [
    //new winston.transports.Console(),
    consoleTransport,
    new winston.transports.Stream({ stream: accessLogStream }) // 회전 파일에 로그 저장
    // new winston.transports.File({ filename: 'application.log' })
  ],
});

module.exports = logger; // 로거를 모듈로 내보냄