const express = require('express');
const router = express.Router();
// const dbPool = require('../../src/config/dbconnect-postgresql');

const logger = require('../../src/config/log-winston'); // Winston 로거 가져오기

// 사용자 인증을 위한 임시 데이터 (실제 데이터베이스를 사용해야 함)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

const authenticate = require('../../src/config/jwt-authenticate');

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // JWT 생성
  const token = authenticate.makeToken({ id: user.id, username: user.username });
  res.json({ token })
});


// 보호된 라우트
router.get('/protected', authenticate.checkTokenMW, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});


module.exports = router;