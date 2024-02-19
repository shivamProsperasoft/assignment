const App = require("../models/appModel");
const catchAsync = require("../utils/catchAsync");

exports.createApp = catchAsync(async (req, res, next) => {
  const app = await App.create(req.body);
  res.status(201).json({
    status: "success",
    data: app,
  });
});

exports.getApp = catchAsync(async (req, res, next) => {
  const app = await App.findById("65cb47d8c294069426a2f340");
  res.status(200).json({
    status: "success",
    data: app,
  });
});
