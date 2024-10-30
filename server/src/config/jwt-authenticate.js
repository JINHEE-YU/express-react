const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const logger = require('./log-winston'); // Winston 로거 가져오기

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key'
logger.info(`SECRET_KEY : ${SECRET_KEY}`)

// 인증 미들웨어
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer 토큰 형식

  if (!token) {
    return res.sendStatus(401); // 토큰이 없으면 401 Unauthorized
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    
    if (err) {
      logger.error('Token verification failed:', err);
      return res.sendStatus(403); // 토큰이 유효하지 않으면 403 Forbidden
    }
    req.user = user; // 요청 객체에 사용자 정보 추가
    next();
  });
};

const makeToken = (payload)=>{
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // 1시간만 유지
}

module.exports = {
  "makeToken" : makeToken,
  "checkTokenMW" : authenticateToken,
};