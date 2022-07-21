const express = require('express');
const statusController = require('../../controllers/status.controller');

const router = express.Router();

router.get('/', statusController.getStatus);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: Status Routes
 */

/**
 * @swagger
 * /v1/status:
 *   get:
 *     summary: Check server status
 *     tags: [Status]
 *     responses:
 *       "200":
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *               example:
 *                 message: Success
 */
