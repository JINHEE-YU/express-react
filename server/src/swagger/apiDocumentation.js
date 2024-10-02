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