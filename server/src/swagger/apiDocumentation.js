/**
 * @swagger
 * tags:
 *   - name: API
 *     description: 테스트 및 SWAGGER 설정을 위한 임시 API
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