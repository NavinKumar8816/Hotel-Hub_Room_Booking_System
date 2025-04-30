import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './CSS/profile.css';
import Footer from "./footer";

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
    toast.success("Welcome, Owner! But this service is not Avilable please try Again after some time.");
    setTimeout(() => navigate("/ownerhome"), 2000); 
  };

  return (
    <>
    <div className="pro-cont">
       <img src="https://media.istockphoto.com/id/1126722233/photo/blank-street-billboard-poster-stand.jpg?s=612x612&w=0&k=20&c=egr7-rpFNg31EGtquTxyVQrzt19XdwxXjmGdOd6ee50=" className="background-img" alt="..." />
    <div className="image-overlay1">
    <div className=" profile-card ">
      <h3 className="text-1xl font-bold text-center">Welcome, Owner!</h3>
      <div className=" img-circle">
        <img src="https://wallpapers.com/images/hd/attitude-boy-pictures-yh92eg3sahktfs04.jpg" alt=""></img>
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
      <button onClick={handleEdit} className="btn-pro-e">  Edit </button>
      <button onClick={handleLogout} className="btn-pro"> Logout </button>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Profile;
