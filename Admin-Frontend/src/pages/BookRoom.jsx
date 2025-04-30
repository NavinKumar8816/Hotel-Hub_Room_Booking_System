import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './css/data.css';
import Footer from './footer';

const BookRoomdata = () => {
  const [bookrooms, setBookrooms] = useState([]);

  useEffect(() => {
    fetchBookRoom();
  }, []);

  const fetchBookRoom = async () => {
    try {
      const {data} = await axios.get("http://localhost:5200/api/bookroom");
      setBookrooms(data); 
    } catch (error) {
      console.error("Error fetching Book Room:", error);
      toast.error("Error fetching Book Room data!"); 
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5200/api/bookroom/${id}`);
      fetchBookRoom();
      toast.success('Book Room Data deleted successfully!');
    } catch (error) {
      console.error("Error deleting Book Room Data:", error);
      toast.error("Error deleting Book Room Data!"); 
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-d">
        <h1 className="data">Booked Room Data List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col"> Email-Id</th>
              <th scope="col">Mob. NO.</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookrooms.map((book) => (
              <tr key={book._id}>
                <td>{book.Name}</td>
                <td>{book.Email}</td>
                <td>{book.Number}</td>
                <td>
                  <button onClick={() => handleDelete(book._id)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
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

export default BookRoomdata;
