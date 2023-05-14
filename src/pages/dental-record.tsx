import { DentalRecordFormProps } from "@/types/forms-interfaces";
import React, { useState, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import SignatureCanvas from "react-signature-canvas";
import clsx from "clsx";
import { MdOutlineError } from "react-icons/md";
import { toast } from "react-toastify";

const DentalRecordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState,
    formState: { errors },
  } = useForm<DentalRecordFormProps>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const patientSignatureRef = useRef<SignatureCanvas>(null);

  const clearPatientCanvas = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    patientSignatureRef.current?.clear();
  };
  const onSubmit = async (data: DentalRecordFormProps) => {
    if (patientSignatureRef.current?.isEmpty()) {
      toast.error("Patient signature is required", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    try {
      const patientSig = patientSignatureRef.current?.toDataURL("image/png");
      if (patientSig) {
        data.patientSig = patientSig;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  const errorClassName = "text-red-700 pb-2 pl-4 flex gap-2";
  const inputClassName =
    "mb-2 ml-4 mt-4 rounded-xl border-zinc-400/60 placeholder-sm";
  ("mb-2 ml-4 mt-4 h-40 ml-4 mt-4 rounded-xl border-zinc-400/60");
  const clearButtonClassName =
    "bg-emerald-800 w-1/4 font-medium px-8 text-xs h-6 mt-3 text-white rounded-full border-2 border-emerald-800";

  return (
    <div>
      <div className="w-screen pt-24 pb-24 bg-emerald-800/90">
        <h1 className="text-center text-3xl xl:text-5xl mb-4 xl:mb-8 mt-8 sm:mt-0 text-white tracking-widest font-light">
          Dental Records Release Form
        </h1>
      </div>
      <div className="flex flex-col w-[calc(10% - 10px)] mx-12 my-5 lg:max-w-lg lg:mx-auto">
        {!isSubmitted ? (
          <form
            className="flex flex-col mt-8 xl:mt-12 text-sm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="date"
              className={inputClassName}
              {...register("currentDate", { required: true })}
              aria-invalid={errors.currentDate ? "true" : "false"}
            />
            {errors.currentDate?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Date is required
              </div>
            )}
            <input
              type="text"
              placeholder="To Dental Office"
              className={inputClassName}
              {...register("dentalOfficeDr", {
                required: true,
              })}
              aria-invalid={errors.dentalOfficeDr ? "true" : "false"}
            />
            {errors.dentalOfficeDr?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Dental Office is required
              </div>
            )}

            <input
              type="text"
              placeholder="First Name"
              className={inputClassName}
              {...register("firstName", { required: true, maxLength: 80 })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> First name is required
              </div>
            )}
            <input
              type="text"
              placeholder="Last name"
              className={inputClassName}
              {...register("lastName", { required: true, maxLength: 100 })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Last name is required
              </div>
            )}

            <input
              type="tel"
              placeholder="Date of Birth"
              className={inputClassName}
              {...register("dateOfBirth", {
                required: true,
                maxLength: 12,
              })}
              aria-invalid={errors.dateOfBirth ? "true" : "false"}
            />
            {errors.dateOfBirth?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Date of Birth is required
              </div>
            )}
            <label className={inputClassName}>
              <input type="hidden" {...register("releaseTerms")} />
              To whom this may concern,
              <br /> <br />
              We at Richmond West Dental and the below patient, would like to
              thank you and your staff for the care you have provided.
              <br /> <br />
              For us to maintain continued and quality care for the patient, we
              kindly ask if you could forward the most recent radiographs and
              dental records to our office at your earliest convenience.
              <br /> <br />
              The signature below represents the patient's authorization and
              release of their records along with any legal responsibility or
              liability that may arise from this authorization.
            </label>
            <label className="mt-3 mb-1">Patient Signature * </label>

            <SignatureCanvas
              ref={patientSignatureRef}
              canvasProps={{
                width: 500,
                height: 100,
                className: "border border-gray-300",
              }}
            />
            {patientSignatureRef.current?.isEmpty() && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Signature is required
              </div>
            )}
            <button
              className={clearButtonClassName}
              onClick={clearPatientCanvas}
            >
              Clear
            </button>
            <label className="mt-2">
              <input type="hidden" />
              Regards, <br /> Richmond West Dental Team <br /> <br /> 500
              Richmond St W <br />
              Suite 128
              <br />
              Toronto, ON. M5V 3N4 <br />
              <br />
              P: 416 366 0777 <br />
              F: 416 366 1117
              <br />
              <br />
              www.richmondwestdental.com
            </label>
            <input
              className={clsx(
                "bg-emerald-800 font-medium px-8 text-sm h-10 mt-5 text-white rounded-full border-2 border-emerald-800",
                formState.isValid &&
                  "hover:text-emerald-800 hover:shadow-[inset_50rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow]",
                !formState.isValid && "opacity-30"
              )}
              type="submit"
              disabled={!formState.isValid}
              value="Submit Dental Records Release Form"
            />
          </form>
        ) : (
          <p className="text-center text-xl font-extralight pt-20">
            Your Dental Records Release Form has been successfully submitted!
          </p>
        )}
      </div>
    </div>
  );
};

export default DentalRecordForm;
