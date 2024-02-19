const express = require("express");
const employeeRouter = require("./Routes/employeeRoutes");
const appRouter = require("./Routes/appRoutes");

const app = express();

app.use(express.json());

app.use("/employee", employeeRouter);
app.use("/app", appRouter);

module.exports = app;
