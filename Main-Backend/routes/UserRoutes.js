//Main-Backend/routes/UserRoutes.js
const express = require('express');
const {mongoose } = require('mongoose');
const UserSchema = require('../models/UserSchema'); 
const User = mongoose.model('User', UserSchema);
const app =express();

// User Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
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
});

// User Signup Route
app.post('/', async (req, res) => {
  const { username, email, password } = req.body;
    const user = await User.findOne({ Email: email });
    if (user) {
      return res.status(409).json({ message: 'User already exists', success: false });
    }
    const newUser = new User({ UserName: username, Email: email, Password: password });
    await newUser.save();
    res.status(201).json({ message: 'Signup successfully', success: true });
});

// Get All Users (for debugging)

app.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch rooms', error });
  }
});

// Get User by Email for forget password
app.get('/update/:email', async (req, res) => {
  const email = req.params.email;
    const user = await User.findOne({ Email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);

});

// Update User by Email (username and password)
app.put('/update/:email', async (req, res) => {
  const { username, password } = req.body;
  const emailId = req.params.email;
  if (!username || !password) {
    return res.status(400).json({ error: 'All fields (username, password) are required' });
  }
    const updatedUser = await User.findOneAndUpdate(
      { Email: emailId },
      { UserName: username, Password: password },
      { new: true }
    );
    res.json(updatedUser);
});

// Delete User by Email
app.delete('/sub/:email', async (req, res) => {
  const email = req.params.email;
    const user = await User.findOne({ Email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.remove();
    res.status(200).json({ message: 'User deleted successfully' });
});
// DELETE Route for Removing a Room by ID
app.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const userDeleted = await User.findByIdAndDelete(userId);
    
    if (userDeleted) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting User', details: error.message });
  }
});

module.exports = app;
