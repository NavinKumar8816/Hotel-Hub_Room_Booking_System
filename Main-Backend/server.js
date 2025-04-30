//Main-Backend/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const AddroomRoutes = require('./routes/AddroomRoutes');
const OwnerRoutes = require('./routes/Hotel-OwnerRoutes');
const UserRoutes = require('./routes/UserRoutes');
const AdminRoutes = require('./routes/AdminRoutes');
const BookRoomRoutes = require('./routes/BookRoomRoutes');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/Admin',AdminRoutes);
app.use('/api/rooms', AddroomRoutes);
app.use('/api/Owners', OwnerRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/bookroom',BookRoomRoutes);


// Start server
app.listen(5200, () =>
  console.log(`🚀 Server running on http://localhost:${5200}`)
);
