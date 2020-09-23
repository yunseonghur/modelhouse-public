const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true},
  phone: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: String, required: true },
  // dob: { type: Date, required: true },
  gender: { type: String, required: true },
  size: { type: String, required: true },
  priority: { type: String, required: false },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;