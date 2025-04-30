const express = require('express');
const cors = require('cors'); 
const {mongoose } = require('mongoose');
const AdminSchema = require('../models/AdminSchema');
const app =express();
const User = mongoose.model('Admin', AdminSchema);
app.use(cors());

// Admin Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ Email: email });
    if (user) {
      if (user.Password === password) {
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

// Admin Signup Route
app.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ Email: email });
    if (user) {
      return res.status(409).json({ message: 'User already exists', success: false });
    }
    const newUser = new User({ UserName: username, Email: email, Password: password });
    await newUser.save();
    res.status(201).json({ message: 'Signup successfully', success: true });
  } catch (err) {
    res.status(500).json({ message: 'Error during signup', error: err });
  }
});

// Get All Admin
app.get('/sub', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
});

// Get Admin by Email (for editing)
app.get('/update/:email', async (req, res) => {
  const emailId = req.params.email;
  try {
    const user = await User.findOne({ Email: emailId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err });
  }
});

// Update Admin  Data by Email (username and password)
app.put('/update/:email', async (req, res) => {
  const { username, password } = req.body;
  const emailId = req.params.email;

  if (!username || !password) {
    return res.status(400).json({ error: 'All fields (username, password) are required' });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { Email: emailId },
      { UserName: username, Password: password },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err });
  }
});

// Delete User by Email
app.delete('/sub/:email', async (req, res) => {
  const email = req.params.email;
  try {
    const user = await User.findOne({ Email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.remove();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err });
  }
});

module.exports = app;
