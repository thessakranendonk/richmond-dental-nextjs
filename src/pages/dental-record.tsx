import { DentalRecordFormProps } from "@/types/forms-interfaces";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import SignatureCanvas from "signature-canvas";

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
            // onEnd={(sigData) => {
            //   const sigDataUrl = sigData.trim()
            //     .replace(/^data:image\/png;base64,/, "");
            //   data.patientSig = sigDataUrl;
            // }}
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
