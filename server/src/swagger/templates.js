/**
 * @swagger
 * components:
 *   schemas:
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *     SuccessResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Success"
 *   responses:
 *     BadResponse:
 *       description: 잘못된 요청
 *       content:
 *         text/html:
 *           schema:
 *             $ref: '#components/schemas/ErrorResponse'
 */