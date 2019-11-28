const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birth: { type: Date, required: true },
  document: { type: String, required: true }
});

mongoose.model('Person', PersonSchema);
