const express = require("express");

const appController = require("../controllers/appController");

const Router = express.Router();

Router.route("/").get(appController.getApp).post(appController.createApp);

module.exports = Router;
