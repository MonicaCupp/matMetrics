const mongoose = require('mongoose');

const WresterNameSchema = new mongoose.schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
}, {
  timestamps: true
});

const WrestlerName = mongoose.model('Wrestler Name', WresterNameSchema);

model.exports = WrestlerName;