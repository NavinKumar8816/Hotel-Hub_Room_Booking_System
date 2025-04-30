import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import 'react-toastify/dist/ReactToastify.css';
import './css/data.css';
// import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import Footer from './footer';

const Userdata = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
  

    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const {data}= await axios.get("http://localhost:5200/api/users");
      setUsers(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };
  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:5200/api/users/${id}`);
      getUsers();
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  }
  
  return (
    <>
      <Navbar />
      <div className="container-d">
        <h1 className="data">Users List</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Users Name</th>
                <th scope="col">Users Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.UserName}</td>
                  <td>{user.Email}</td>
                  <td>
                    <button onClick={()=>handleDelete(user._id)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      <ToastContainer/>
      <Footer/>
    </>
  );
};

export default Userdata;
