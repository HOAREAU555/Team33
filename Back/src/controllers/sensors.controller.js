const httpStatus = require('http-status');
const { uuid } = require('uuidv4');
const catchAsync = require('../utils/catchAsync');
const sensorService = require('../services/sensors.service');

const sendId = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).json({ sensorId: uuid() });
});

const initialize = catchAsync(async (req, res) => {
  const sensor = await sensorService.createSensor(req.body);
  res.status(httpStatus.CREATED).json({
    message: 'OK',
    sensorIdentifier: sensor.sensorIdentifier,
  });
});

module.exports = {
  sendId,
  initialize,
};
