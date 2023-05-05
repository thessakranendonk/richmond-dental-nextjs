import { DentalRecordFormProps } from "@/types/forms-interfaces";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import SignatureCanvas from "react-signature-canvas";

const initialDentalState: DentalRecordFormProps = {
  currentDate: "",
  dentalOfficeDr: "",
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  releaseStatement: "",
  releaseSig: "",
  releaseTerms: "",
};

const DentalRecordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DentalRecordFormProps>();
  const [dentalState, setDentalState] = useState<DentalRecordFormProps>({
    ...initialDentalState,
    releaseSig: "",
  });
  const releaseSignatureRef = useRef<SignatureCanvas>(null);
  const clearPatientCanvas = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    releaseSignatureRef.current?.clear();
  };
  const onSubmit = async (data: DentalRecordFormProps) => {
    try {
      const releaseSig = releaseSignatureRef.current?.toDataURL("image/png");
      if (releaseSig) {
        data.releaseSig = releaseSig;
      }
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
  };

  const errorClassName = "text-red-700 pb-2 pl-4 flex gap-2";
  const labelClassName = "ml-4 text-2xl";
  const inputClassName =
    "mb-2 ml-4 mt-4 rounded-xl border-zinc-400/60 placeholder-sm";
  const selectClassName = "ml-4 w-52 mb-2 rounded-xl border-zinc-400/60";
  const subLabelClassName = "ml-6 mt-2 mb-2";
  const textAreaClassName =
    "mb-2 ml-4 mt-4 h-40 ml-4 mt-4 rounded-xl border-zinc-400/60";
  const clearButtonClassName =
    "bg-emerald-800 w-1/4 font-medium px-8 text-xs h-6 mt-3 text-white rounded-full border-2 border-emerald-800";

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
          <input {...register("releaseTerms", { required: true })} />
          To whom this may concern, We at Richmond West Dental and the below
          patient, would like to thank you and your staff for the care you have
          provided. For us to maintain continued and quality care for the
          patient, we kindly ask if you could forward the most recent
          radiographs and dental records to our office at your earliest
          convenience. The signature below represents the patient's
          authorization and release of their records along with any legal
          responsibility or liability that may arise from this authorization.
        </label>
        <label className="mt-3 mb-1">
          Patient Signature *
          <input type="hidden" {...register("releaseSig")} />
          <SignatureCanvas
            ref={releaseSignatureRef}
            canvasProps={{
              width: 500,
              height: 200,
              className: "border border-gray-300",
            }}
          />
        </label>
        <button className={clearButtonClassName} onClick={clearPatientCanvas}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DentalRecordForm;
