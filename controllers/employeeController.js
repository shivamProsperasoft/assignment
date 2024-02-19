const App = require("../models/appModel");
const Employee = require("../models/employeeModel");
const catchAsync = require("../utils/catchAsync");

exports.createEmployee = catchAsync(async (req, res, next) => {
  const appId = (await App.findOne({ appName: "Word" }))._id;
  const payload = {
    name: req.body.name,
    Appid: appId,
  };
  const employee = await Employee.create(payload);
  res.status(201).json({
    status: "success",
    data: employee,
  });
});

exports.getEmployees = catchAsync(async (req, res, next) => {
  const employees = await Employee.find();
  res.status(200).json({
    status: "success",
    data: employees,
  });
});
