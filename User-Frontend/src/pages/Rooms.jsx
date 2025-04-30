import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import StarRating from "./star";
import './css/room.css';
import Footer from "./footer";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const { data } = await axios.get("http://localhost:5200/api/rooms");
        setRooms(data);
        setFilteredRooms(data)
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  const handleSearch = (query) => {
    const filtered = rooms.filter((room) =>
      (room.name && room.name.toLowerCase().includes(query.toLowerCase())) ||
      (room.area && room.area.toLowerCase().includes(query.toLowerCase())) ||
      (room.city && room.city.toLowerCase().includes(query.toLowerCase())) ||
      (room.roomtype && room.roomtype.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredRooms(filtered);
  };

  const handleSeeAvailability = (roomId) => {
    navigate(`/book?roomId=${roomId}`); 
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />

      {filteredRooms.length === 0 ? (
        <p>No rooms found matching your search criteria.</p>
      ) : (
        <div className="container-r">
          {filteredRooms.map((room) => (
            <div className="card-r mb-3" key={room._id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <Carousel className="room-carousel">
                    {room.images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img className="img-fluid rounded-start" src={image} alt={`Slide ${index + 1}`}/>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <h2 className="card-title">{room.name}</h2>
                    {/* <Card.Text className="card-description">{room.description}</Card.Text> */}
                    <h5 className="card-description">Room-Type : {room.roomtype}</h5>
                    <h5 className="card-max-guests">Max Guests: {room.maxGuests}</h5>
                    <h5 className="card-description">City : {room.city}</h5>
                    <h5 className="card-description">Area : {room.area}</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <div className="rating">
                      <StarRating rating={room.rating} onRatingChange={() => {}} />
                    </div>
                    <h5 className="price">Price: {room.price} ₹ per night</h5>
                    <h5 className="price1">Includes taxes and charges</h5>
                    <Button variant="primary" onClick={() => handleSeeAvailability(room._id)} className="book-btn"> See Availability </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Rooms;
