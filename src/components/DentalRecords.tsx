import React, { useState } from "react";
import { useForm } from "react-hook-form";
import nodemailer from "nodemailer";

interface DentalRecordsFormState {
  currentDate: string;
  dentalOfficeDr: string;
  patientsFirstName: string;
  patientsLastName: string;
  patientsDateOfBirth: string;
  releaseStatement: string;
  releaseTerms: string;
}

const initialDentalState: DentalRecordsFormState = {
  currentDate: "",
  dentalOfficeDr: "",
  patientsFirstName: "",
  patientsLastName: "",
  patientsDateOfBirth: "",
  releaseStatement: "",
  releaseTerms: "",
};

const DentalRecords: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DentalRecordsFormState>();
  const [dentalState, setDentalState] =
    useState<DentalRecordsFormState>(initialDentalState);
  const onSubmit = async (data: DentalRecordsFormState) => {
    const transporter = nodemailer.createTransport({
      host: `smtp.live.com`,
      port: 587,
      auth: {
        user: "felix.lai@hotmail.com",
        pass: "998157827Ruffles",
      },
    });
    const message = {
      from: "felix.lai@hotmail.com",
      to: "felix.lai@hotmail.com",
      subject: "Dental Records Form Submission",
      html: `<p>Current Date: ${data.currentDate}</p>
            <p>Dental Office/Dr: ${data.dentalOfficeDr}</p>
            <p>Patient's First Name: ${data.patientsFirstName}</p>
            <p>Patient's Last Name: ${data.patientsLastName}</p>
            <p>Patient's Date of Birth: ${data.patientsDateOfBirth}</p>
            <p>Release Statement: ${data.releaseStatement}</p>
            <p>Release Terms: ${data.releaseTerms}</p>`,
    };
    try {
      const info = await transporter.sendMail(message);
      console.log("message sent: %s", info.messageId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-start ml-4">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First Name"
          className="ml-4 rounded-xl"
          {...register("patientsFirstName", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          className="ml-4 rounded-xl"
          {...register("patientsLastName", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="To Dental Office"
          className="ml-4 rounded-xl"
          {...register("dentalOfficeDr", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        <input
          type="tel"
          placeholder="Date of Birth"
          className="ml-4 rounded-xl"
          {...register("patientsDateOfBirth", {
            required: true,
            maxLength: 12,
          })}
        />
        <label>
          <input
            type="checkbox"
            id="terms"
            className="ml-4"
            {...register("releaseTerms", { required: true })}
          />
          To whom this may concern, We at Richmond West Dental and the below
          patient, would like to thank you and your staff for the care you have
          provided. For us to maintain continued and quality care for the
          patient, we kindly ask if you could forward the most recent
          radiographs and dental records to our office at your earliest
          convenience. The signature below represents the patient's
          authorization and release of their records along with any legal
          responsibility or liability that may arise from this authorization.
        </label>{" "}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DentalRecords;
