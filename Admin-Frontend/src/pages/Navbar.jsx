import { Link } from "react-router-dom";
import "./css/navbar.css";

function Navbar() {
 
  return (
    <nav className="navbar navbar-expand-lg nav1">
      <div className="container-fluid">
        <span className="navbar-brand">
          HotelHub
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link to="/userdata">User</Link>
          <Link to="/ownerdata">Owner</Link>
          <Link to="/hoteldata">Hotel</Link>
          <Link to="/bookroom">Book-Room</Link>
          <Link to="/profile">👤</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
