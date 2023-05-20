import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineContactPhone } from "react-icons/md";

const DentalInfo = () => {
  const iconClassName = "mt-1 mr-2 w-4 h-4 text-white";
  const headerClassName = "tracking-widest text-md text-white pb-1";
  const divClassName = " flex flex-row justify-center mt-5 mb-1";
  const hoursClassName = "flex flex-row justify-between";
  const dayClassName =
    "flex justify-center text-left text-sm text-white pr-16 pb-1";
  return (
    <div>
      {/* info */}
      <div>
        <div className="flex flex-row text-sm">
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center">
              <MdOutlineContactPhone className={iconClassName} />

              <h2 className={headerClassName}>
                <strong>CONTACT</strong>
              </h2>
            </div>
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
                <AiOutlineClockCircle className={iconClassName} />

                <h3 className={headerClassName}>
                  <strong>HOURS</strong>
                </h3>
              </div>
            </div>

            <div>
              <div className={hoursClassName}>
                <p className={`${dayClassName} font-bold`}>Monday</p>
                <p className={dayClassName}>10:00 AM - 5:00 PM</p>
              </div>
              <div className={hoursClassName}>
                <p className={`${dayClassName} font-bold`}>Tuesday</p>
                <p className={dayClassName}>10:00 AM - 5:00 PM</p>
              </div>
              <div className={hoursClassName}>
                <p className={`${dayClassName} font-bold`}>Wednesday</p>
                <p className={dayClassName}>10:00 AM - 5:00 PM</p>
              </div>
              <div className={hoursClassName}>
                <p className={`${dayClassName} font-bold`}>Thursday</p>
                <p className={dayClassName}>10:00 AM - 5:00 PM</p>
              </div>
              <div className={hoursClassName}>
                <p className={`${dayClassName} font-bold`}>Friday</p>
                <p className={dayClassName}>10:00 AM - 5:00 PM</p>
              </div>
              <div className={hoursClassName}>
                <p className={`${dayClassName} font-bold`}>Alt Sat</p>
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
