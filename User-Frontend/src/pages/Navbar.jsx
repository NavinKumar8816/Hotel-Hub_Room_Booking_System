import { Link } from "react-router-dom";
import "./css/navbar.css";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
  }, []);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('')
  };

  return (
    <nav className="navbar-u navbar navbar-expand-lg nav1">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          HotelHub
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input className="form-control me-2 " type="search" placeholder="Search by city,hotel  or neighborhood" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="profile">
                <ul className=" navbar-nav ">
                  <li><Link to="/profile">👤</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  {/* <li><Link to="/signup">Signup</Link></li> */}
                  </ul>
          </div>
                </div>
      </div>
    </nav>
  );
}

export default Navbar;
