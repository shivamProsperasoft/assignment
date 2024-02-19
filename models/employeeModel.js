const { default: mongoose } = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  Appid: {
    type: mongoose.Schema.ObjectId,
    ref: "App",
  },
});

employeeSchema.pre(/^find/, function (next) {
  this.populate("Appid");
  next();
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
