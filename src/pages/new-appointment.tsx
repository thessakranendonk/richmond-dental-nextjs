import React from "react";
import PageHeading from "@/components/ui/PageHeading";

const NewAppointment: React.FC = () => {
  return (
    <div>
      <div className="relative pt-10 sm:pt-0 h-[14rem] md:h-[18rem]">
        <PageHeading title="Request Appointment" />
      </div>

      <iframe
        src="https://www.cognitoforms.com/f/lNlU0CZ_4kGStt3vQZy0xw/3"
        style={{ border: "0", width: "100%" }}
        height="496"
      ></iframe>
      <script src="https://www.cognitoforms.com/f/iframe.js"></script>
    </div>
  );
};
export default NewAppointment;
