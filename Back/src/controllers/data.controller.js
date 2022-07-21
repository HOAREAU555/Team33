const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const dataService = require('../services/data.service');

const create = catchAsync(async (req, res) => {
  const data = await dataService.createData(req.body);
  res.status(httpStatus.CREATED).json(data);
});

const index = catchAsync(async (req, res) => {
  const data = await dataService.queryData();
  res.status(httpStatus.OK).json(data);
});

const show = catchAsync(async (req, res) => {
  const data = await dataService.queryDataById(req.params);
  res.status(httpStatus.OK).json(data);
});

module.exports = {
  create,
  index,
  show,
};
