const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let VaccineSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  dealer: { type: String, required: true, max: 50 }
});

module.exports = mongoose.model("Vaccine", VaccineSchema);
