/* eslint-disable react/prop-types */
import './RoomList';
import './CSS/RoomList.css';

const RoomTable = ({ rooms, handleDelete, handleUpdate }) => {
  return (
    <>
      {rooms.length === 0 ? (
        <p className="no-rooms-message">No rooms available.</p>
      ) : (
        <table className="room-table">
          <thead>
            <tr>
              <th>Hotel Name</th>
              <th>Room Type</th>
              <th>Price (₹)</th>
              <th>City</th>
              <th>Area</th>
              <th>Update</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room._id}>
                <td>{room.name}</td>
                <td>{room.roomtype}</td>
                <td>{room.price}</td>
                <td>{room.city}</td>
                <td>{room.area}</td>
                <td>
                  <button onClick={() => handleUpdate(room)} className="update-button">Update</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(room._id)} className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default RoomTable;
