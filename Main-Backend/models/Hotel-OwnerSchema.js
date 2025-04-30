const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
  UserName: { type: String, required: true, unique: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  CreatedAt: { type: Date, default: Date.now }, 
});

module.exports = OwnerSchema;




