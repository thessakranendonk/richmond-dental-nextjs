import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";

const DentalInfo = () => {
  const iconClassName = "mt-1 ml-2 w-4 h-4";
  const headerClassName = "tracking-widest text-sm text-zinc-700";
  return (
    <div className="hidden xl:inline-flex">
      {/* <img
        className="img img-settings object-none br-left"
        src="/images/logo.svg"
      /> */}
      <div className="img-wrap img-wrap-xl br-right  ">
        <div className="back-img br-left"></div>
        {/* <img className="back-img object-none br-left" src="/images/logo.svg" /> */}
      </div>
    </div>
    // <div>
    //   <div className=" flex flex-row justify-evenly text-sm">
    //     <div className="flex flex-col">
    //       <div className="mt-5 mb-6">
    //         <div className="flex flex-row justify-center ">
    //           <h3 className={headerClassName}>
    //             <strong>Office</strong>{" "}
    //           </h3>
    //           <CiLocationOn className={iconClassName} />
    //         </div>
    //         <a
    //           className="hover:underline text-sm text-zinc-500"
    //           href="https://www.google.com/maps?q=500+Richmond+St.+W,+Suite+128,+Toronto,+ON,+M5V+3N4"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           500 Richmond St. W, Suite 128 <br /> Toronto, ON, M5V 3N4
    //         </a>
    //       </div>

    //       <div className="mb-6">
    //         <div className="flex flex-row justify-center">
    //           <h3 className={headerClassName}>
    //             <strong>Opening Hours</strong>
    //           </h3>
    //           <AiOutlineClockCircle className={iconClassName} />
    //         </div>
    //         <p className="flex justify-center text-left text-sm text-zinc-500">
    //           Mon - Thu: 10 AM - 5 PM <br />
    //           Fri: 10 AM - 4 PM <br />
    //           Every Other Sat: 10 AM - 4 PM <br />
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col justify-">
    //       <h1>Contact Us!</h1>
    //       <div className=" mt-5 mb-6">
    //         <div className="flex flex-row justify-center ">
    //           <h3 className={headerClassName}>
    //             <strong>Phone</strong>
    //           </h3>
    //           <AiOutlinePhone className={iconClassName} />
    //         </div>
    //         <p className="text-sm text-zinc-500">+1 416 366 0777</p>
    //       </div>

    //       <div className="flex flex-col mb-6">
    //         <div className="flex flex-row  text-center justify-center">
    //           <h3 className={headerClassName}>
    //             <strong>E-mail</strong>
    //           </h3>
    //           <AiOutlineMail className={iconClassName} />
    //         </div>
    //         <div>
    //           <a
    //             className="hover:underline text-sm text-zinc-500"
    //             href="mailto:info@richmondwestdental.com"
    //           >
    //             info@richmondwestdental.com
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DentalInfo;
