const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://mongodb:27017/trackfully',
  { useNewUrlParser: true },
);

const { Schema } = mongoose;

const DolevSchema = new Schema({
  id: { type: String, default: '' },
  lastModified: { type: String, default: '' },
  lastModifier: { type: String, default: '' },
  content: { type: String, default: '' },
  lastFarmerName: { type: String, default: '' },
  status: { type: Number, default: 0 },
});

module.exports = mongoose.model('Dolev', DolevSchema);
