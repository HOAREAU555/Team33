const express = require('express');
const sensorsController = require('../../controllers/sensors.controller');

const router = express.Router();

router.get('/', sensorsController.sendId);
router.post('/', sensorsController.initialize);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Sensors
 *   description: Sensors Routes
 */

/**
 * @swagger
 * /v1/sensors:
 *   get:
 *     summary: Send ID from API to sensor
 *     tags: [Sensors]
 *     responses:
 *       "200":
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sensorIdentifier:
 *                   type: string
 *               example:
 *                sensorIdentifier: 1ba71233-4597-4a94-b384-f3a54a4EDd6d
 *
 * @swagger
 * /v1/sensors:
 *   post:
 *     summary: Create sensor with sensor identifier in database
 *     tags: [Sensors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - sensorIdentifier
 *             properties:
 *              sensorIdentifier:
 *                type: string
 *             example:
 *              sensorIdentifier: 1ba71233-4597-4a94-b384-f3a54a4EDd6d
 *     responses:
 *      "201":
 *        description: Created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sensorIdentifier:
 *                  type: string
 *                  description: sensor-id
 *                message:
 *                  type: string
 *                  description: success message
 *              example:
 *                message: OK
 *                sensorIdentifier: 1ba71233-4597-4a94-b384-f3a54a4EDd6d
 */
