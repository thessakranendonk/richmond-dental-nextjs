import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";

const DentalInfo = () => {
  const iconClassName = "mt-1 mr-2 w-4 h-4 text-white";
  const headerClassName = "tracking-widest text-sm text-white pb-1";
  const divClassName = " flex flex-row justify-center mt-5 mb-6";
  const hoursClassName = "flex flex-row justify-between";
  return (
    <div>
      {/* info */}
      <div>
        <div className="flex text-sm justify-items-start">
          <div className="flex flex-col">
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
          <div className="flex flex-col ml-10">
            <div className="mb-6">
              <div className="flex flex-row justify-center">
                <h3 className={headerClassName}>
                  <strong>Opening Hours</strong>
                </h3>
                <AiOutlineClockCircle className={iconClassName} />
              </div>
              <div>
                <div className={hoursClassName}>
                  <p className="flex justify-center text-left text-sm text-white">
                    Mon
                  </p>
                  <p className="flex justify-center text-left text-sm text-white">
                    10:00 AM - 5:00 PM
                  </p>
                </div>
                <div className={hoursClassName}>
                  <p className="flex justify-center text-left text-sm text-white">
                    Tues
                  </p>
                  <p className="flex justify-center text-left text-sm text-white">
                    10:00 AM - 5:00 PM
                  </p>
                </div>
                <div className={hoursClassName}>
                  <p className="flex justify-center text-left text-sm text-white">
                    Wed
                  </p>
                  <p className="flex justify-center text-left text-sm text-white">
                    10:00 AM - 5:00 PM
                  </p>
                </div>
                <div className={hoursClassName}>
                  <p className="flex justify-center text-left text-sm text-white">
                    Thu
                  </p>
                  <p className="flex justify-center text-left text-sm text-white">
                    10:00 AM - 5:00 PM
                  </p>
                </div>
                <div className={hoursClassName}>
                  <p className="flex justify-center text-left text-sm text-white">
                    Fri
                  </p>
                  <p className="flex justify-center text-left text-sm text-white">
                    10:00 AM - 5:00 PM
                  </p>
                </div>
                <div className={hoursClassName}>
                  <p className="flex justify-center text-left text-sm text-white">
                    Alt Sat
                  </p>
                  <p className="flex justify-center text-left text-sm text-white">
                    10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalInfo;
