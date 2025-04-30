import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './css/profile.css';

function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
  
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    toast.success("Logged out successfully!");
    setTimeout(() => navigate("/"), 2000); 
  };
  const handleEdit = () => {
    toast.success("Welcome, Admin! But this service is not Avilable please try Again after some time.");
    setTimeout(() => navigate("/userdata"), 2000); 
  };

  return (
    <div className="profile-card ">
      <h3 className="text-2xl font-bold text-center">Welcome, Admin!</h3>
      <div className=" img-circle">
        <img src="https://pxboom.com/wp-content/uploads/2024/02/boys-attitude-wallpaper.jpg" alt=""></img>
      </div>
      <hr className="hr"></hr>
      <p className="text-name">
       Name : Amit 
      </p>
      <p className="text-name">
       Email Id : amit@gmail.com
      </p>
      <p className="text-name">
       Gender : Male
      </p>
      <p className="text-name">
       D.O.B.: 08/04/2000
      </p>
      <p className="text-name">
       Mob. No.: 8053571572
      </p>
      <button
        onClick={handleEdit}
        className="btn-pro-e "
      >
        Edit
      </button>
      <button
        onClick={handleLogout}
        className="btn-pro "
      >
        Logout
      </button>

      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
}

export default Profile;
