const httpStatus = require('http-status');
const { isUuid } = require('uuidv4');
const { Data } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a sensor
 * @param {Object} dataBody
 * @returns {Promise<Data>}
 */

const createData = async (dataBody) => {
  if (!isUuid(dataBody.sensorIdentifier)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Identifier is not in good format');
  }
  return Data.create(dataBody);
};

const queryData = async () => {
  return Data.find({});
};

const queryDataById = async (dataBody) => {
  if (!isUuid(dataBody.id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Identifier is not in good format');
  }
  return Data.find({ sensorIdentifier: dataBody.id });
};

module.exports = {
  createData,
  queryData,
  queryDataById,
};
