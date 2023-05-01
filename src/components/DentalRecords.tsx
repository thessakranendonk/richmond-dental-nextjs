import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="To Dental Office"
        {...register("To Dental Office", {
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
      />
      <input
        type="tel"
        placeholder="Date of Birth"
        {...register("Date of Birth", { required: true, maxLength: 12 })}
      />

      <input type="submit" />
    </form>
  );
};

export default DentalRecords;
