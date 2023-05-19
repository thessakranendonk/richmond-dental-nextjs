import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";

const DentalInfo = () => {
  const iconClassName = "mt-1 mr-2 w-4 h-4 text-white";
  const headerClassName = "tracking-widest text-sm text-white pb-1";
  const divClassName = " flex flex-row justify-center mt-5 mb-1";
  const hoursClassName = "flex flex-row justify-between";
  const dayClassName =
    "flex justify-center text-left text-sm text-white pr-16 pb-1";
  return (
    <div>
      {/* info */}
      <div>
        <div className="flex text-sm justify-between mt-3">
          <div className="flex flex-col justify-center">
            <h2 className={headerClassName}>
              <strong>CONTACT</strong>
            </h2>
            <div className={divClassName}>
              <AiOutlinePhone className={iconClassName} />
              <p className="text-sm text-white">+1 416 366 0777</p>
            </div>

            <div className={divClassName}>
              <AiOutlineMail className={iconClassName} />
              <a
                className="hover:underline text-sm text-white"
                href="mailto:info@richmondwestdental.com"
              >
                info@richmondwestdental.com
              </a>
            </div>

            <div className={divClassName}>
              <CiLocationOn className={iconClassName} />
              <a
                className="hover:underline text-sm text-white"
                href="https://www.google.com/maps?q=500+Richmond+St.+W,+Suite+128,+Toronto,+ON,+M5V+3N4"
                target="_blank"
                rel="noopener noreferrer"
              >
                500 Richmond St. W, Suite 128
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-10 justify-center">
            <div className="mb-2">
              <div className="flex flex-row justify-center">
                <h3 className={headerClassName}>
                  <strong>Opening Hours</strong>
                </h3>
                <AiOutlineClockCircle className={iconClassName} />
              </div>
            </div>

            <div>
              <div className={hoursClassName}>
                <p className={dayClassName}>Monday</p>
                <p className={dayClassName}>10:00 AM - 5:00 PM</p>
              </div>
              <div className={hoursClassName}>
                <p className={dayClassName}>Tuesday</p>
                <p className={dayClassName}>10:00 AM - 5:00 PM</p>
              </div>
              <div className={hoursClassName}>
                <p className={dayClassName}>Wednesday</p>
                <p className={dayClassName}>10:00 AM - 5:00 PM</p>
              </div>
              <div className={hoursClassName}>
                <p className={dayClassName}>Thursday</p>
                <p className={dayClassName}>10:00 AM - 5:00 PM</p>
              </div>
              <div className={hoursClassName}>
                <p className={dayClassName}>Friday</p>
                <p className={dayClassName}>10:00 AM - 5:00 PM</p>
              </div>
              <div className={hoursClassName}>
                <p className={dayClassName}>Alt Sat</p>
                <p className={dayClassName}>10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalInfo;
