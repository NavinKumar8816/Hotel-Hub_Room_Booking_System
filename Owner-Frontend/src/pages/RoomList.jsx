import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/RoomList.css';
import Footer from './footer';
import RoomTable from './RoomTable';
import RoomForm from './RoomForm';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [updateData, setUpdateData] = useState({
    name: '',
    description: '',
    roomtype: '',
    price: '',
    maxGuests: '',
    city: '',
    area: '',
  });

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const { data } = await axios.get("http://localhost:5200/api/rooms");
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      toast.error("Failed to fetch rooms!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5200/api/rooms/${id}`);
      toast.success("Room deleted successfully!");
      fetchRooms();
    } catch (error) {
      console.error("Error deleting room:", error);
      toast.error("Failed to delete the room.");
    }
  };

  const handleUpdate = (room) => {
    setUpdateData({
      id: room._id,
      name: room.name,
      description: room.description,
      roomtype: room.roomtype,
      price: room.price,
      maxGuests: room.maxGuests,
      city: room.city,
      area: room.area,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5200/api/rooms/${updateData.id}`, updateData);
      toast.success("Room updated successfully!");
      fetchRooms();
      setUpdateData({
        id: '',
        name: '',
        description: '',
        roomtype: '',
        price: '',
        maxGuests: '',
        city: '',
        area: '',
      });
    } catch (error) {
      console.error("Error updating room:", error);
      toast.error("Failed to update the room.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="room-list-container">
        <ToastContainer />
        <h1 className="room-list-title">Room List</h1>

        <RoomTable rooms={rooms} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        <RoomForm updateData={updateData} setUpdateData={setUpdateData} handleSubmit={handleSubmit} />
      </div>
      <Footer />
    </>
  );
};

export default RoomList;
