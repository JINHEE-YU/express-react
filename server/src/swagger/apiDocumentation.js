/**
 * @swagger
 * tags:
 *   - name: API
 *     description: 테스트 및 SWAGGER 설정을 위한 임시 API
 *   - name: JWT
 *     description: JWT 토큰 생성 및 확인
 */
/**
 * @swagger
 * /api/:
 *   get:
 *     tags: [API]
 *     summary: API 동작 확인
 *     description: hello api router 메시지를 반환합니다.
 *     responses:
 *       '200':
 *         description: 성공적으로 응답
 *         content:
 *           text/html:
 *             schema:
 *               $ref: '#components/schemas/SuccessResponse'
 *       '400':
 *         $ref: '#components/responses/BadResponse'
 */
/**
 * @swagger
 * /api/example:
 *   get:
 *     tags: [API]
 *     summary: 예제 API
 *     responses:
 *       200:
 *         description: 성공적으로 응답
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, World!"
 */
/**
 * @swagger
 * /api/test/:
 *   get:
 *     tags: [API]
 *     summary: API 동작 확인
 *     description: hello api router 메시지를 반환합니다.
 *     responses:
 *       200:
 *         description: 성공적으로 응답
 *         content:
 *           text/html:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "hello api router"
 */
/**
 * @swagger
 * /api/test/db-test:
 *   get:
 *     tags: [API]
 *     summary: DB 정보 확인
 *     description: 연결된 DB 버전을 반환합니다.
 *     responses:
 *       200:
 *         description: 성공적으로 응답
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 version:
 *                   type: string
 *                   example: "PostgreSQL 17.0 on x86_64-windows, compiled by msvc-19.41.34120, 64-bit"
 */
/**
 * @swagger
 * /api/test/log:
 *   get:
 *     tags: [API]
 *     summary: log 확인
 *     description: 프로젝트에 설정된 로그에 맞게 파일에 log를 쌓습니다.<br>(로그파일 확인해보기)
 *     responses:
 *       200:
 *         description: 성공적으로 응답
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 version:
 *                   type: string
 *                   example: "hello log"
 */
/**
 * @swagger
 * /api/jwt/login:
 *   post:
 *     tags: [JWT]
 *     summary: 사용자 로그인
 *     description: 사용자가 로그인하기 위한 엔드포인트입니다. 유효한 자격 증명을 제공하면 JWT를 반환합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: 사용자 이름
 *                 example: user1
 *               password:
 *                 type: string
 *                 description: 사용자 비밀번호
 *                 example: password1
 *     responses:
 *       200:
 *         description: 로그인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT 토큰
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       401:
 *         description: 인증 실패 (잘못된 자격 증명)
 *       400:
 *         description: 잘못된 요청 (필수 필드 누락)
 */
/**
 * @swagger
 * /api/jwt/protected:
 *   get:
 *     tags: [JWT]
 *     summary: JWT 토큰 데이터 조회
 *     description: 사용자의 프로젝트 데이터를 조회하는 엔드포인트입니다. JWT 토큰이 필요합니다.
 *     security:
 *       - Token: []
 *     responses:
 *       200:
 *         description: 프로젝트 데이터 성공적으로 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: 프로젝트 ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: 프로젝트 이름
 *                     example: My Project
 *                   status:
 *                     type: string
 *                     description: 프로젝트 상태
 *                     example: active
 *       401:
 *         description: 인증 실패 (유효하지 않은 토큰)
 *       403:
 *         description: 권한 없음 (접근 권한이 없는 경우)
 */