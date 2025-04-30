import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
// import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/data.css'
import Footer from './footer';
// import { Link } from 'react-router-dom';

const Hoteldata = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
  
    fetchRooms();

  },[]);
  const fetchRooms = async () => {
    try {
      const {data} = await axios.get("http://localhost:5200/api/rooms");
      setHotels(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };
  const deleteItem =async (id)=>{
    try {
      await axios.delete(`http://localhost:5200/api/rooms/${id}`);
      fetchRooms();
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container-d">
        <h1 className="data">Hotel Data List</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Hotel Name</th>
                <th scope="col">Price ₹</th>
                <th scope="col">City</th>
                <th scope="col">Area</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel) => (
                <tr key={hotel._id}>
                  <td>{hotel.name}</td>
                  <td>{hotel.price}</td>
                  <td>{hotel.city}</td>
                  <td>{hotel.area}</td>
                  <td>
                    <button onClick={() => deleteItem(hotel._id)} className="btn btn-danger btn-sm"> Delete</button>
                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      <ToastContainer />
      <Footer/>
    </>
  );
};

export default Hoteldata;
