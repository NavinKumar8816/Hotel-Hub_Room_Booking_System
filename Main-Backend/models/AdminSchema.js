const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  UserName: { type: String, required: true, unique: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  CreatedAt: { type: Date, default: Date.now }, 
});

module.exports = AdminSchema;




