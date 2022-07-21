const httpStatus = require('http-status');
const { isUuid } = require('uuidv4');
const { Sensor } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a sensor
 * @param {Object} sensorBody
 * @returns {Promise<Sensor>}
 */
const createSensor = async (sensorBody) => {
  if (!isUuid(sensorBody.sensorIdentifier)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Identifier is not in good format');
  }
  return Sensor.create(sensorBody);
};

module.exports = {
  createSensor,
};
