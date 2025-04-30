//Main-Backend/routes/AddroomRoutes.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const app = express();
const Room = require ('../models/AddRoomSchema');

app.use(express.json());
app.use(cors());

// Get all rooms
app.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch rooms.', error });
  }
});

// Create a room
app.post('/', async (req, res) => {
  const { name, description,roomtype, price, maxGuests, city, area, images } = req.body;

  if (!name || !description ||!roomtype || !price || !maxGuests || !city || !area || !Array.isArray(images)) {
    return res.status(400).json({ message: 'All fields are required, and images must be an array.' });
  }
  try {
    const newRoom = new Room({ name, description,roomtype, price, maxGuests, city, area, images });
    await newRoom.save();
    res.status(201).json({ message: 'Room created successfully.', data: newRoom });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create room.', error });
  }
});
// Update a Room data by ID
app.put('/:id', async (req, res) => {
  try {
    const roomId = req.params.id;
    const updatedRoom = await Room.findByIdAndUpdate(
      roomId,
      {
        name: req.body.name,
        description: req.body.description,
        roomtype: req.body.roomtype,
        price: req.body.price,
        maxGuests: req.body.maxGuests,
        city: req.body.city,
        area: req.body.area,
      },
      { new: true }
    );

    if (!updatedRoom) return res.status(404).json({ error: 'Room not found' });

    res.json(updatedRoom);
  } catch (error) {
    console.error('Error updating room:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE a Room by ID
app.delete('/:id', async (req, res) => {
  const roomId = req.params.id; 
  try {
    const roomDeleted = await Room.findByIdAndDelete(roomId);
    
    if (roomDeleted) {
      res.status(200).json({ message: 'Room deleted successfully' });
    } else {
      res.status(404).json({ error: 'Room not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting room', details: error.message });
  }
});
// Check room availability
app.post('/check-availability', async (req, res) => {
  const { roomId, startDate, endDate } = req.body;
  try {
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found.' });
    }
    // Check if the dates overlap with any existing booking
    const isAvailable = room.bookings.every((booking) => {
      const bookingStart = new Date(booking.startDate);
      const bookingEnd = new Date(booking.endDate);
      const selectedStart = new Date(startDate);
      const selectedEnd = new Date(endDate);
      // No overlap condition
      return selectedEnd <= bookingStart || selectedStart >= bookingEnd;
    });

    if (isAvailable) {
      res.status(200).json({ available: true });
    } else {
      res.status(200).json({ available: false });
    }
  } catch (error) {
    console.error('Error checking availability:', error);
    res.status(500).json({ message: 'Failed to check availability.', error });
  }
});

module.exports = app;
