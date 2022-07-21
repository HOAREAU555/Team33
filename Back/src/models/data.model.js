const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { toJSON } = require('./plugins');

const dataSchema = new mongoose.Schema(
  {
    sensorIdentifier: {
      type: String,
      required: true,
    },
    humidity: {
      type: Number,
      required: false,
    },
    luminosity: {
      type: Number,
      required: false,
    },
    temperature: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugins that converts mongoose to json
dataSchema.plugin(toJSON);
dataSchema.plugin(uniqueValidator);

/**
 * @typedef Data
 */
const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
