import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../log/login.css';

function BookRoom() {
  const [bookroom, setBookroom] = useState({
    Name: '',
    Email: '',
    Number: '',
  });
  const navigate = useNavigate();

  const inpChange = (e) => {
    setBookroom({
      ...bookroom,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5200/api/bookroom', bookroom);  
      const data = response.data;
      if (data.success) {  
        toast.success('Room Book successfully!');
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Error adding Room Booking Data: ' + error.message);
    }
  };
  
  return (
    <>
      <center className="container">
       
        <form onSubmit={formSubmit} className="form">
          <h1>Book Your Room</h1>
          <input type="text" name="name" placeholder="Enter Your UserName" onChange={inpChange} className="box" required autoComplete="off"
          />
          <input type="email" name="email" placeholder="Enter Your Email" onChange={inpChange} className="box" required autoComplete="off"
          />
          <input type="number" name="number" placeholder="Enter Your Mon.No." onChange={inpChange} className="box" required autoComplete="off"
          />
          <input type="submit" className="btn-1" value="Book-Room" />
        </form>
      </center>

      <ToastContainer />
    </>
  );
}

export default BookRoom;
