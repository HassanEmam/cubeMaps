import { useState } from "react";
import CameraCapture from "./components/CameraCapture";
import CubemapViewer from "./components/CubemapViewer";
import RoomSelector from "./components/RoomSelector";
// import { resizeBase64Image } from "./utils/resize";

const App = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleSaveCubemap = (images) => {
    // await images.map(async (image) => await resizeBase64Image(image, 512, 512));
    const imgs = [
      images[1],
      images[3],
      images[4],
      images[5],
      images[0],
      images[2],
    ];
    const newRoom = { name: `Room ${rooms.length + 1}`, images: imgs };
    console.log(images);
    setRooms([...rooms, newRoom]);
  };

  return (
    <div>
      {!selectedRoom ? (
        <>
          <CameraCapture onSaveCubemap={handleSaveCubemap} />
          <RoomSelector rooms={rooms} onSelectRoom={setSelectedRoom} />
        </>
      ) : (
        <CubemapViewer cubemapImages={rooms[selectedRoom].images} />
      )}
    </div>
  );
};

export default App;
