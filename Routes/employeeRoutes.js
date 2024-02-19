const express = require("express");

const employeeController = require("../controllers/employeeController");

const Router = express.Router();

Router.route("/")
  .get(employeeController.getEmployees)
  .post(employeeController.createEmployee);

module.exports = Router;

// Router.route("/:id").get();
