import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Icon } from "leaflet";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

const BookingMap = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    setIsMapLoaded(true);
  }, []);

  if (!isMapLoaded) {
    return null; // Render null or a loading indicator while the map is being loaded
  }
  const position: LatLngExpression = [43.64666, -79.394043]; // Latitude and longitude coordinates

  const iconClassName = "mt-1 ml-2 w-4 h-4 text-black";
  const headerClassName = "tracking-widest text-sm text-gray-300 pb-1";
  const divClassName = "mt-5 mb-6";
  return (
    <div className="flex flex-col text-center w-1/2">
      <div className={divClassName}>
        <div>
          <h3 className={headerClassName}>
            <strong>Office</strong>{" "}
          </h3>
          <CiLocationOn className={iconClassName} />
        </div>
        <a
          className="hover:underline text-sm text-black"
          href="https://www.google.com/maps?q=500+Richmond+St.+W,+Suite+128,+Toronto,+ON,+M5V+3N4"
          target="_blank"
          rel="noopener noreferrer"
        >
          500 Richmond St. W, Suite 128 <br /> Toronto, ON, M5V 3N4
        </a>
      </div>

      <div className="mb-6">
        <div className="flex flex-row justify-center">
          <h3 className={headerClassName}>
            <strong>Opening Hours</strong>
          </h3>
          <AiOutlineClockCircle className={iconClassName} />
        </div>
        <p className="flex justify-center text-left text-sm text-black">
          Mon - Thu: 10 AM - 5 PM <br />
          Fri: 10 AM - 4 PM <br />
          Every Other Sat: 10 AM - 4 PM <br />
        </p>
      </div>

      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default BookingMap;
