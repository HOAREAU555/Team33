const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { toJSON } = require('./plugins');

const sensorSchema = new mongoose.Schema(
  {
    sensorIdentifier: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugins that converts mongoose to json
sensorSchema.plugin(toJSON);
sensorSchema.plugin(uniqueValidator);

/**
 * @typedef Sensor
 */
const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
