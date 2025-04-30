//Main-Backend/routes/Hotel-OwnerRoutes.js
const express = require('express');
const cors = require('cors');
const { mongoose } = require('mongoose');
const OwnerSchema = require('../models/Hotel-OwnerSchema');
const app = express();
const Owner = mongoose.model('Owner', OwnerSchema);

// Owner Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const owner = await Owner.findOne({ Email: email });
    if (owner) {
      if (owner.Password === password) {
        res.json('Success');
      } else {
        res.json('Password is incorrect');
      }
    } else {
      res.json('No Data Found');
    }
  } catch (err) {
    res.status(500).json({ message: 'Error during login', error: err });
  }
});

// Owner Signup Route
app.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const owner = await Owner.findOne({ Email: email });
    if (owner) {
      return res.status(409).json({ message: 'User already exists', success: false });
    }
    const newOwner = new Owner({ UserName: username, Email: email, Password: password });
    await newOwner.save();
    res.status(201).json({ message: 'Signup successfully', success: true });
  } catch (err) {
    res.status(500).json({ message: 'Error during signup', error: err });
  }
});

// Get All Owners (for debugging)

app.get('/', async (req, res) => {
  try {
    const owner = await Owner.find();
    res.status(200).json(owner);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch rooms', error });
  }
});

// Get Owner by Email (for editing)
app.get('/update/:email', async (req, res) => {
  const emailId = req.params.email;
  try {
    const owner = await Owner.findOne({ Email: emailId });
    if (!owner) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(owner);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err });
  }
});

// Update Owner by Email (username and password)
app.put('/update/:email', async (req, res) => {
  const { username, password } = req.body;
  const emailId = req.params.email;

  if (!username || !password) {
    return res.status(400).json({ error: 'All fields (username, password) are required' });
  }

  try {
    const updatedOwner = await Owner.findOneAndUpdate(
      { Email: emailId },
      { UserName: username, Password: password },
      { new: true }
    );
    res.json(updatedOwner);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err });
  }
});

// Delete Owner by Email
app.delete('/sub/:email', async (req, res) => {
  const email = req.params.email;
  try {
    const owner = await Owner.findOne({ Email: email });
    if (!owner) {
      return res.status(404).json({ message: 'User not found' });
    }
    await owner.remove();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err });
  }
});
// DELETE  Removing a Room by ID
app.delete('/:id', async (req, res) => {
  const ownerId = req.params.id;
  try {
    const ownerDeleted = await Owner.findByIdAndDelete(ownerId);
    if (ownerDeleted) {
      res.status(200).json({ message: 'Owner deleted successfully' });
    } else {
      res.status(404).json({ error: 'Owner not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting owner', details: error.message });
  }
});

module.exports = app;
