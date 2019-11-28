const mongoose = require('mongoose');

const VaccineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  dosage: { type: String, required: true }
});

mongoose.model('Vaccine', VaccineSchema);
