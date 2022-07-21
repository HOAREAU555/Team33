const express = require('express');
const dataController = require('../../controllers/data.controller');

const router = express.Router();

router.post('/', dataController.create);
router.get('/', dataController.index);
router.get('/:id', dataController.show);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Data
 *   description: Data Routes
 */

/**
 * @swagger
 * /v1/data:
 *   get:
 *     summary: Get all data
 *     tags: [Data]
 *     responses:
 *       "200":
 *         description: Success
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sensorIdentifier:
 *                  type: string
 *                  description: sensor-id
 *                humidity:
 *                  type: number
 *                  description: Float
 *                luminosity:
 *                  type: number
 *                  description: Float
 *                temperature:
 *                  type: number
 *                  description: Float
 *              example:
 *                sensorIdentifier: 1ba71233-4597-4a94-b384-f3a54a4EDd6d
 *                humidity: 30
 *                luminosity: 60
 *                temperature: 34
 *
 * @swagger
 * /v1/data/:id:
 *   get:
 *     summary: Get data by only one sensor
 *     tags: [Data]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          description: User id
 *     responses:
 *       "200":
 *         description: Success
 *         content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sensorIdentifier:
 *                  type: string
 *                  description: sensor-id
 *                humidity:
 *                  type: number
 *                  description: Float
 *                luminosity:
 *                  type: number
 *                  description: Float
 *                temperature:
 *                  type: number
 *                  description: Float
 *              example:
 *                sensorIdentifier: 1ba71233-4597-4a94-b384-f3a54a4EDd6d
 *                humidity: 30
 *                luminosity: 60
 *                temperature: 34
 *
 * @swagger
 * /v1/data:
 *   post:
 *     summary: Create data with sensor
 *     tags: [Data]
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
 *              humidity:
 *                type: number
 *                description: value in percentage
 *              luminosity:
 *                type: number
 *                description: value in Lux
 *              temperature:
 *                type: number
 *                description: value in celcius degree
 *             example:
 *              sensorIdentifier: 1ba71233-4597-4a94-b384-f3a54a4EDd6d
 *              humidity: 30
 *              luminosity: 60
 *              temperature: 34
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
 *                humidity:
 *                  type: number
 *                  description: Float
 *                luminosity:
 *                  type: number
 *                  description: Float
 *                temperature:
 *                  type: number
 *                  description: Float
 */
