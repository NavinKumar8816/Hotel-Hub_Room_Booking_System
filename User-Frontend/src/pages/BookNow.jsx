import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './css/book.css';

const Book = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId") || ""; 
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [availability, setAvailability] = useState(null);

  useEffect(() => {
    if (!roomId) {
      toast.error("Room ID is missing.");
    }
  }, [roomId]);

  const handleCheckAvailability = async () => {
    if (!roomId || !startDate || !endDate) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
      toast.error("End date must be after the start date.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5200/api/rooms/check-availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomId, startDate, endDate }),
      });

      const data = await response.json();

      if (response.ok) {
        setAvailability(data.available);
        toast.success(data.available ? "Room is available!" : "Room is not available.");
      } else {
        setAvailability(false);
        toast.error(data.message || "Failed to check availability.");
      }
    } catch {
      toast.error("An error occurred while checking availability.");

    }
  };

  const handleBookRoom = async () => {
    // toast.success("Room booking is confirmed!");
    setTimeout(() => navigate("/bookroom"), 3000);
  };

  return (
    <center className="booking-container">
      <ToastContainer />
      <h1 className="title">Room Booking</h1>
      {roomId && <p className="room-id">Room ID: <strong>{roomId}</strong></p>}

      <div className="input-group">
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div className="input-group">
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>

      <button className="btn1 btn-primery" onClick={handleCheckAvailability}>
        Check Availability
      </button>

      {availability && (
        <button className="btn-book" onClick={handleBookRoom}>
          Book Room
        </button>
      )}
    </center>
  );
};

export default Book;
