import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteUser = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5200/api/Admin/sub/${email}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        toast.success(`User with email "${email}" has been deleted successfully.`);
        setEmail(""); // Clear input field
        setTimeout(() => navigate("/signup"), 2000); // Navigate after toast
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        toast.error(`User with email "${email}" not found.`);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
      console.error("Error deleting user:", err);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <center className="container">
        <form onSubmit={handleDelete} className="form">
        <h5>Delete User by Email</h5>
          <input
            className="box"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
          <button type="submit" className="btn-1">Delete</button>
        </form>
      </center>
    </>
  );
};

export default DeleteUser;
