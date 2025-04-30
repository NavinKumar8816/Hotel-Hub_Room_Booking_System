import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

function Home() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const inpChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
  
    if (!validatePassword(form.password)) {
      toast.error(
        'Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5200/api/Admin', form);  // Correct URL
      const data = response.data;
      if (data.success) {  
        toast.success('Signup successfully!');
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Error adding Sign-up Data: ' + error.message);
    }
  };
  
  return (
    <>
      <center className="container">
        <form onSubmit={formSubmit} className="form">
          <h1>Sign-Up</h1>
          <input type="text" name="username" placeholder="Enter Your UserName" onChange={inpChange} className="box" required autoComplete="off" />
          <input type="email" name="email" placeholder="Enter Your Email" onChange={inpChange} className="box" required autoComplete="off" />
          <input type="password" name="password" placeholder="Enter Your Password" onChange={inpChange} className="box" required autoComplete="off" />
          <input type="submit" className="btn-1" value="Sign-Up" />
          <h3 className="spn">Already have an account?</h3>
          <div className="btn-1">
            <Link to="/" className="l-btn">Log-In</Link>
          </div>
        </form>
      </center>
      <ToastContainer />
    </>
  );
}

export default Home;
