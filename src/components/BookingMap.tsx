import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression, Icon } from "leaflet";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import L from "leaflet";
import ReactDOM from "react-dom";
import { ImLocation } from "react-icons/im";
const BookingMap = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    setIsMapLoaded(true);
  }, []);

  if (!isMapLoaded) {
    return null; // Render null or a loading indicator while the map is being loaded
  }
  const position: LatLngExpression = [43.64666, -79.394043]; // Latitude and longitude coordinates
  //   const tileLayerUrl = "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png";
  //   const attribution =
  //     'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
  //     '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  //     'Tiles courtesy of <a href="https://www.openstreetmap.fr/">OpenStreetMap.HOT</a>';

  const tileLayerUrl =
    "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png";
  const attribution = "";

  const LocationIcon = L.Icon.extend({
    options: {
      iconSize: [48, 48],
      iconAnchor: [24, 48],
      popupAnchor: [0, -48],
    },
    createIcon: function () {
      const iconContainer = document.createElement("div");
      const icon = <ImLocation className={locationClassName} />;
      ReactDOM.render(icon, iconContainer);
      return iconContainer;
    },
  });

  const locationIcon = new LocationIcon();

  const iconClassName = "mt-1 ml-2 w-4 h-4 text-black";
  const headerClassName = "tracking-widest text-sm text-brand-base pb-1";
  const divClassName = "mt-5 mb-6";
  const locationClassName = "w-6 h-6 text-brand-base font-extrabold";
  const containerClassName =
    "flex justify-center items-center mt-5 border-2 border-brand-base";
  const flexClassName = "flex flex-row justify-center";

  return (
    <div className={containerClassName}>
      <div className="flex flex-col pr-4 w-2/4">
        <div className={divClassName}>
          <div className={flexClassName}>
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
          <div className={flexClassName}>
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
        style={{ height: "300px", width: "45%" }}
      >
        <TileLayer
          //   url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          //   attribution='&copy; <a href="https://www.mapbox.com">Mapbox</a> contributors'
          url={tileLayerUrl}
          attribution={attribution}
          //   url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          //   attribution='Map data &copy; <a href="https://carto.com/">CartoDB</a> contributors'
        />
        <Marker position={position} icon={locationIcon} />
      </MapContainer>
    </div>
  );
};

export default BookingMap;
