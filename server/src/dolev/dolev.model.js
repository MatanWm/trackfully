const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://mongodb:27017/trackfully',
  { useNewUrlParser: true },
);

const { Schema } = mongoose;

const DolevStatusSchema = new Schema({
  from: { type: String, default: '' },
  to: { type: String, default: '' },
});

const DolevSchema = new Schema({
  id: { type: String, default: '' },
  lastModified: { type: String, default: '' },
  lastModifier: { type: String, default: '' },
  content: { type: String, default: '' },
  lastFarmerName: { type: String, default: '' },
  status: { type: Object, default: {} },
});

module.exports = mongoose.model('Dolev', DolevSchema);
