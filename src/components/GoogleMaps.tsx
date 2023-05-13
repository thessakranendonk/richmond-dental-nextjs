// const GoogleMaps = () => {
//   return (
//     <div>
//       <div className="flex">
//         <div>
//           <img
//             className="w-4/5 mr-0"
//             src="/images/richmond-map.png"
//             alt="map"
//           />
//         </div>
//         <div className="flex-col items-center justify-evenly w-1/5">
//           <div className="mt-5 mb-6">
//             <h3>Office</h3>
//             <p>
//               500 Richmond St. W, Suite 128 <br /> Toronto, ON, M5V 3N4
//             </p>
//           </div>
//           <div className="mb-6">
//             <h3>E-mail</h3>
//             <p>info@richmondwestdental.com</p>
//           </div>
//           <div className="mb-6">
//             <h3>Phone</h3>
//             <p>+1 416 366 0777</p>
//           </div>
//           <div className="mb-6">
//             <h3>Opening Hours</h3>
//             <p>
//               Mon - Thu: 10 AM - 5 PM <br />
//               Fri: 10 AM - 4 PM <br />
//               Every Other Sat: 10 AM - 4 PM <br />
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoogleMaps;

const GoogleMaps = () => {
  return (
    <div className="relative">
      <img src="/images/richmond-map.png" alt="map" />
      <div className="absolute top-0 left-0 flex flex-col justify-evenly h-full w-full px-6 border">
        <div className="mt-5 mb-6">
          <h3>Office</h3>
          <p>
            500 Richmond St. W, Suite 128 <br /> Toronto, ON, M5V 3N4
          </p>
        </div>
        <div className="mb-6">
          <h3>E-mail</h3>
          <p>info@richmondwestdental.com</p>
        </div>
        <div className="mb-6">
          <h3>Phone</h3>
          <p>+1 416 366 0777</p>
        </div>
        <div className="mb-6">
          <h3>Opening Hours</h3>
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

export default GoogleMaps;
