const { default: mongoose } = require("mongoose");

const appSchema = new mongoose.Schema({
  appName: String,
});

const App = mongoose.model("App", appSchema);

module.exports = App;
