import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { CiLocationOn } from "react-icons/ci";

const BookingMap = () => {
  const position: LatLngExpression = [43.64666, -79.394043]; // Latitude and longitude coordinates

  const markerOptions = {
    icon: <CiLocationOn />,
  };
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} {...markerOptions} />
    </MapContainer>
  );
};

export default BookingMap;
