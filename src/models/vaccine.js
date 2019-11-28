const mongoose = require('mongoose');

const VaccineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true }
});

mongoose.model('Vaccine', VaccineSchema);
