import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Icon } from "leaflet";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import L from "leaflet";

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

  const locationIcon = L.icon({
    iconUrl: "/images/location-pin.png",
    iconSize: [32, 32],
  });
  return (
    <div className="flex justify-center items-center mt-5 ">
      <div className="flex flex-col w-1/4">
        <div className={divClassName}>
          <div className="flex flex-row justify-center">
            <h3 className={headerClassName}>
              <strong>Office</strong>{" "}
            </h3>
            <CiLocationOn className={iconClassName} />
          </div>
          <a
            className=" flex justify-center text-left hover:underline text-sm text-black"
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
      </div>

      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "300px", width: "30%" }}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={locationIcon} />
      </MapContainer>
    </div>
  );
};

export default BookingMap;
