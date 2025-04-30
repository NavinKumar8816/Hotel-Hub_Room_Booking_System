import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5200/api/users/login', { email, password });
      if (response.data === 'Success') {
        toast.success(`User with email "${email}" has been Login successfully.`);
        setEmail("");
        setPassword(""); 
        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error('Incorrect Email or Password');
      }
    } catch (error) {
      toast.error('Server error. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <center className="container">
        <form className="form" onSubmit={formSubmit}>
        <div className="sign-up"><h1>Log-In</h1></div>
          <input
            type="email"
            name="email"
            placeholder="Enter UserName or Email"
            value={email}
            className="box"
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={password}
            className="box"
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off"
          />
          <input type="submit" className="btn-1" value="Log-In" />
          <Link to="/update" className="p-btn"><h3>Forget Password</h3></Link>
          <Link to="/delete-user" className="p-btn"><h3>Delete User</h3></Link>
          <h3 className="spn">Doesn&apos;t have an account?</h3>
          <div className="btn-1">
            <Link to="/signup" className="l-btn">Sign-Up</Link>
          </div>
        </form>
      </center>
    </>
  );
}

export default Login;
