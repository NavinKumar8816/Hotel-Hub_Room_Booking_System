const express = require('express');
const {mongoose } = require('mongoose');
const bookroomSchema = require('../models/BookRoomSchema'); 
const BookRoom = mongoose.model('BookRoom', bookroomSchema);
const app =express();

// User Signup Route
app.post('/', async (req, res) => {
  const { name, email, number } = req.body;
    const bookroom = await BookRoom.findOne({ Email: email });
    if (bookroom) {
      return res.status(409).json({ message: 'User already exists', success: false });
    }
    const newBookroom = new BookRoom({ Name: name, Email: email, Number: number });
    await newBookroom.save();
    res.status(201).json({ message: 'Room Book successfully', success: true });
});

// Get All Users (for debugging)

app.get('/', async (req, res) => {
  try {
    const bookrooms = await BookRoom.find();
    res.status(200).json(bookrooms);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch rooms', error });
  }
});

// DELETE Route for Removing a Room by ID
app.delete('/:id', async (req, res) => {
  const bookroomId = req.params.id;
  
  try {
    const roomDeleted = await BookRoom.findByIdAndDelete(bookroomId);
    
    if (roomDeleted) {
      res.status(200).json({ message: 'Book Room deleted successfully' });
    } else {
      res.status(404).json({ error: 'Room not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting Book Room', details: error.message });
  }
});

module.exports = app;
