import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateUser() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fetch user details using the entered email
  const fetchUser = async () => {
    if (!email) {
      toast.error('Please enter your email.');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5200/api/Owners/update/${email}`);
      const user = response.data;
      setUsername(user.UserName);
      setPassword(user.Password);
      toast.success('User details fetched successfully.');
    } catch (err) {
      console.error('Error fetching user data:', err);
      toast.error('No user found with this email. Please check and try again.');
    }
  };

  // Handle form submission to update the user
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !username || !password) {
      toast.error('All fields (email, username, password) are required.');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5200/api/Owners/update/${email}`, {
        username,
        password,
      });
      console.log('Updated user:', response.data);
      toast.success('User updated successfully!');
      setTimeout(() => navigate('/'), 2000); // Redirect after 2 seconds
    } catch (err) {
      console.error('Error updating user:', err);
      toast.error('Failed to update user. Please try again.');
    }
  };

  return (
    <center className="container">
      <ToastContainer position="top-center" autoClose={3000} />
      <form className="form" onSubmit={handleSubmit}>
      <h5>Update User Information</h5>
        <input 
          className="box" 
          type="email" 
          placeholder="Enter your Email To Fetch Data" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          autoComplete="off" 
        />
        <button type="button" className="btn-1" onClick={fetchUser}>
          Fetch Details..
        </button>

        <label className="spn1"><h5>UserName</h5></label>
        <input 
          id="username" 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="box" 
          autoComplete="off" 
        />

        <label className="spn1"><h5>Password</h5></label>
        <input 
          id="password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="box" 
          autoComplete="off" 
        />

        <button type="submit" className="btn-1">
          Update
        </button>
      </form>
    </center>
  );
}

export default UpdateUser;
