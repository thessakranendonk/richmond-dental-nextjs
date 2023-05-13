import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";

const DentalInfo = () => {
  return (
    <div>
      <div className=" flex flex-col justify-evenly ">
        <div className="mt-5 mb-6">
          <div>
            <h3>Office</h3>
            <CiLocationOn />
          </div>
          <p>
            500 Richmond St. W, Suite 128 <br /> Toronto, ON, M5V 3N4
          </p>
        </div>
        <div className="mb-6">
          <div>
            <h3>E-mail</h3>
            <AiOutlineMail />
          </div>
          <p>info@richmondwestdental.com</p>
        </div>
        <div className="mb-6">
          <div>
            <h3>Phone</h3>
            <AiOutlinePhone />
          </div>
          <p>+1 416 366 0777</p>
        </div>
        <div className="mb-6">
          <div>
            <h3>Opening Hours</h3>
            <AiOutlineClockCircle />
          </div>
          <p>
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
