import PropTypes from "prop-types";

const RoomSelector = ({ rooms, onSelectRoom }) => (
  <div>
    <h2>Select a Room</h2>
    {rooms.map((room, index) => (
      <button key={index} onClick={() => onSelectRoom(index)}>
        {room.name}
      </button>
    ))}
  </div>
);

RoomSelector.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectRoom: PropTypes.func.isRequired,
};

export default RoomSelector;
