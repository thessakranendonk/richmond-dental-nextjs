import React from "react";
import PageHeading from "@/components/ui/PageHeading";
import "../styles/NewPatientIntake.module.css";

const NewPatientIntake: React.FC = () => {
  return (
    <div>
      <div className="relative pt-10 sm:pt-0 h-[14rem] md:h-[18rem]">
        <PageHeading title="Patient Intake Form" />
      </div>

      <iframe
        src="https://www.cognitoforms.com/f/lNlU0CZ_4kGStt3vQZy0xw/1"
        style={{ border: "0", width: "100%" }}
        height="4167"
      ></iframe>
      <script src="https://www.cognitoforms.com/f/iframe.js"></script>
    </div>
  );
};

export default NewPatientIntake;
