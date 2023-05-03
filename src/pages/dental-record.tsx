import { DentalRecordFormProps } from "@/types/forms-interfaces";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const initialDentalState: DentalRecordFormProps = {
  currentDate: "",
  dentalOfficeDr: "",
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  releaseStatement: "",
  releaseTerms: "",
};

const DentalRecordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DentalRecordFormProps>();
  const [dentalState, setDentalState] =
    useState<DentalRecordFormProps>(initialDentalState);
  const onSubmit = async (data: DentalRecordFormProps) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
    } catch (error) {
      console.error(error);
    }
    console.log(data, data);
  };

  return (
    <div className="flex justify-start ml-4">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First Name"
          className="ml-4 rounded-xl"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          className="ml-4 rounded-xl"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="To Dental Office"
          className="ml-4 rounded-xl"
          {...register("dentalOfficeDr", {
            required: true,
          })}
        />
        <input
          type="tel"
          placeholder="Date of Birth"
          className="ml-4 rounded-xl"
          {...register("dateOfBirth", {
            required: true,
            maxLength: 12,
          })}
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="w-52  ml-4 mt-4 rounded-xl"
          {...register("email", {
            required: true,
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
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DentalRecordForm;
