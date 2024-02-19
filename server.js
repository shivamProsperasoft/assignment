const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");

process.on("uncaughtException", () => {
  console.log("uncaught Exception Error");
});

const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.MONGO_URL.replace(
  "<username>",
  process.env.MONGODB_USERNAME
).replace("<password>", process.env.MONGODB_PASSWORD);

mongoose.connect(DB).then(() => {
  console.log("connection establish successfully!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started at PORT: ${port}`);
});
