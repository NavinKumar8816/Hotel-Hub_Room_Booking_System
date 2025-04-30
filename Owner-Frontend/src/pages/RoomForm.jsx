/* eslint-disable react/prop-types */
import './RoomList';
import './CSS/Roomform.css';

const RoomForm = ({ updateData, setUpdateData, handleSubmit }) => {
  return (
    <form className="room-update-form" onSubmit={handleSubmit}>
      <h3 className="room-update-form-title">Update Room</h3>
      <input className="room-update-input" type="text" placeholder="Hotel Name" value={updateData.name} onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })} required  />
      <textarea  className="room-update-textarea"  placeholder="Description"  value={updateData.description}  onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}  required  />
      <input className="room-update-input" type="text" placeholder="Room Type" value={updateData.roomtype} onChange={(e) => setUpdateData({ ...updateData, roomtype: e.target.value })} required  />
      <input className="room-update-input" type="number" placeholder="Price (₹)" value={updateData.price} onChange={(e) => setUpdateData({ ...updateData, price: e.target.value })} required />
      <input className="room-update-input" type="number" placeholder="Max Guests" value={updateData.maxGuests} onChange={(e) => setUpdateData({ ...updateData, maxGuests: e.target.value })} required  />
      <input className="room-update-input" type="text" placeholder="City" value={updateData.city} onChange={(e) => setUpdateData({ ...updateData, city: e.target.value })} required />
      <input className="room-update-input" type="text" placeholder="Area" value={updateData.area} onChange={(e) => setUpdateData({ ...updateData, area: e.target.value })} required/>
      <button type="submit" className="room-update-button">Update</button>
    </form>
  );
};

export default RoomForm;
