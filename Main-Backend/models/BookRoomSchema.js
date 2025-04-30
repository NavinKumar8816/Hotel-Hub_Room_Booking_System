const mongoose = require('mongoose');

const bookroomSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Number: { type: Number, required: true },
  CreatedAt: { type: Date, default: Date.now , timestamps: true },

});

module.exports = bookroomSchema;




