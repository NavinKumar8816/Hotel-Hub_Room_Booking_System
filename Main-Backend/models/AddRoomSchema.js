const mongoose = require("mongoose");

 const BookingSchema =  new mongoose.Schema({
    // roomId: String,
    bookings: [
      {
        startDate: String,
        endDate: String,
      }
    ],
  });


const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  roomtype:{type:String, required:true},
  price: { type: Number, required: true },
  maxGuests: { type: Number, required: true },
  city: { type: String, required: true },
  area: { type: String, required: true },
  images: { type: [String], required: true },
  bookings: [BookingSchema],
  CreatedAt: { type: Date, default: Date.now  ,timestamps: true }, 
 
});

module.exports = mongoose.model("Room", RoomSchema);
