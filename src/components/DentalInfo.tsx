import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";

const DentalInfo = () => {
  const iconClassName = "mt-1 ml-2 w-4 h-4";
  return (
    <div className="w-1/3">
      <div className=" flex flex-col justify-evenly ">
        <div className="mt-5 mb-6">
          <div className="flex flex-row justify-center ">
            <h3 className="tracking-widest">
              <strong>Office</strong>{" "}
            </h3>
            <CiLocationOn className={iconClassName} />
          </div>
          <p>
            500 Richmond St. W, Suite 128 <br /> Toronto, ON, M5V 3N4
          </p>
        </div>
        <div className="mb-6">
          <div className="flex flex-row justify-center ">
            <h3 className="tracking-widest">
              <strong>E-mail</strong>
            </h3>
            <AiOutlineMail className={iconClassName} />
          </div>
          <p>info@richmondwestdental.com</p>
        </div>
        <div className="mb-6">
          <div className="flex flex-row justify-center ">
            <h3 className="tracking-widest">
              <strong>Phone</strong>
            </h3>
            <AiOutlinePhone className={iconClassName} />
          </div>
          <p>+1 416 366 0777</p>
        </div>
        <div className="mb-6">
          <div className="flex flex-row justify-center ">
            <h3 className="tracking-widest">
              <strong>Opening Hours</strong>
            </h3>
            <AiOutlineClockCircle className={iconClassName} />
          </div>
          <p className="flex justify-center text-left">
            Mon - Thu: 10 AM - 5 PM <br />
            Fri: 10 AM - 4 PM <br />
            Every Other Sat: 10 AM - 4 PM <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default DentalInfo;
