import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './css/data.css';
import Footer from './footer';

const Ownerdata = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    fetchOwner();
  }, []);

  const fetchOwner = async () => {
    try {
      const { data } = await axios.get("http://localhost:5200/api/Owners");
      setOwners(data);
    } catch (error) {
      console.error("Error fetching owners:", error);
      toast.error("Error fetching owners data!"); 
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5200/api/Owners/${id}`);
      fetchOwner();
      toast.success('Owner deleted successfully!');
    } catch (error) {
      console.error("Error deleting owner:", error);
      toast.error("Error deleting owner!"); 
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-d">
        <h1 className="data">Owner Data List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Owners Name</th>
              <th scope="col">Owners Email-Id</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {owners.map((owner) => (
              <tr key={owner._id}>
                <td>{owner.UserName}</td>
                <td>{owner.Email}</td>
                <td>
                  <button onClick={() => handleDelete(owner._id)} className="btn btn-danger btn-sm">
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

export default Ownerdata;
