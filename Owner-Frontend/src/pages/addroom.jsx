import { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/addroom.css';

const AddRoom = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    roomtype: '',
    price: '',
    maxGuests: '',
    city: '',
    area: '',
    images: [],
    booking: [],
  });

  const [imageInput, setImageInput] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageAdd = () => {
    if (imageInput) {
      setFormData({
        ...formData,
        images: [...formData.images, imageInput],
      });
      setImageInput('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5200/api/rooms', formData);
      toast.success('Room added successfully!');
      setFormData({
        name: '',
        description: '',
        roomtype: '',
        price: '',
        maxGuests: '',
        city: '',
        area: '',
        images: [],
        booking: [],
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error adding room:', error);
      toast.error('Failed to add room. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className='main-container'>
        <img src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" className="background-img" alt="..." />
        <div className="image-overlay">
          <ToastContainer />
          <form className="room-form" onSubmit={handleSubmit}>
            <h2>Add Your Room</h2>
            <div className="form-group">
              <input type="text" name="name" placeholder="Enter Hotel Name" className="input-field" value={formData.name} onChange={handleChange} required autoComplete="off" />
            </div>
            <div className="form-group">
              <textarea name="description" className="input-field" placeholder="Enter Description" value={formData.description} onChange={handleChange} required></textarea>
            </div>
            <div className="form-group">
              <input type="text" name="roomtype" className="input-field" placeholder="Enter Room Type" value={formData.roomtype} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="number" name="price" className="input-field" placeholder="Enter Price (₹ per night)" value={formData.price} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="number" name="maxGuests" className="input-field" placeholder="Enter Max. Guests No." value={formData.maxGuests} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="text" name="city" className="input-field" placeholder="Enter Your City Name" value={formData.city} onChange={handleChange} required autoComplete="off" />
            </div>
            <div className="form-group">
              <input type="text" name="area" className="input-field" placeholder="Enter Your Hotel Area" value={formData.area} onChange={handleChange} required autoComplete="off" />
            </div>
            <div className="form-group">
              <input type="url" className="input-field" placeholder="Enter Your Hotel Image URL" value={imageInput} onChange={(e) => setImageInput(e.target.value)} />
              <button type="button" className="btn-dark add-image-btn" onClick={handleImageAdd}>Add Image</button>
              <ul className="image-list">
                {formData.images.map((img, index) => (
                  <li key={index} className="image-item">{img}</li>
                ))}
              </ul>
            </div>
            <button type="submit" className="btn-primary submit-btn">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddRoom;
