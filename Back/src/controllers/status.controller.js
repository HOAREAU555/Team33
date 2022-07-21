const catchAsync = require('../utils/catchAsync');

const getStatus = catchAsync(async (req, res) => {
  res.json({ message: 'Success' });
});

module.exports = {
  getStatus,
};
