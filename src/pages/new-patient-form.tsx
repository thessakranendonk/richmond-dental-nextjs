import { NewPatientFormProps } from "@/types/forms-interfaces";
import React, { useState, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineError } from "react-icons/md";
import clsx from "clsx";
import SignatureCanvas from "react-signature-canvas";
import { toast } from "react-toastify";
import PageHeading from "@/components/ui/PageHeading";

const NewPatientForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<NewPatientFormProps>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [base64Front, setBase64Front] = useState<string | null>(null);
  const [base64Back, setBase64Back] = useState<string | null>(null);

  const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // When the file is selected, set the file state
  const onFileChangeFront = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFrontImage(e.target.files[0]);
  };
  // When the file is selected, set the file state
  const onFileChangeBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setBackImage(e.target.files[0]);
  };

  const patientSignatureRef = useRef<SignatureCanvas>(null);
  const parentSignatureRef = useRef<SignatureCanvas>(null);

  const clearPatientCanvas = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    patientSignatureRef.current?.clear();
  };
  const clearParentCanvas = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    parentSignatureRef.current?.clear();
  };

  const removeEmptyValuesFromData = (object: any) => {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var value = object[key];
        if (value === null || value === undefined || value === "") {
          delete object[key];
        }
      }
    }
  };

  const onSubmit: SubmitHandler<NewPatientFormProps> = async (
    data: NewPatientFormProps
  ) => {
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

    // Filter out the questions that were not answered by either removing when a value is false or "Select".
    for (let item in data) {
      if (data.hasOwnProperty(item)) {
        if (data[item as keyof NewPatientFormProps] === "Select") {
          delete data[item as keyof NewPatientFormProps];
        }
        if (!data[item as keyof NewPatientFormProps]) {
          delete data[item as keyof NewPatientFormProps];
        }
      }
    }

    const frontInsuranceCardImage =
      frontImage && (await toBase64(frontImage as File));
    const backInsuranceCardImage =
      backImage && (await toBase64(backImage as File));

    setBase64Front(base64Front as string);
    setBase64Back(base64Back as string);
    data.frontInsuranceCard = "";
    data.backInsuranceCard = "";

    const allData =
      frontImage && backImage
        ? {
            data,
            frontInsuranceCardImage,
            backInsuranceCardImage,
          }
        : frontImage
        ? { data, frontInsuranceCardImage }
        : backImage
        ? { data, backInsuranceCardImage }
        : data;

    try {
      const patientSig = patientSignatureRef.current?.toDataURL("image/png");
      if (patientSig) {
        data.patientSig = patientSig;
      }

      const parentSig = parentSignatureRef.current?.toDataURL("image/png");
      if (parentSig) {
        data.parentSig = parentSig;
      }
      removeEmptyValuesFromData(data);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...allData,
        }),
      });
      const result = await response.json();
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  const errorClassName = "text-red-700 pb-2 pl-4 flex gap-2";
  const labelClassName = "ml-4 mt-2 text-2xl font-medium";
  const inputClassName =
    "mb-2 ml-4 mt-4 rounded-xl border-zinc-400/60 placeholder-sm";
  const selectClassName = "ml-4 mb-2 rounded-xl border-zinc-400/60 text-md";
  const subLabelClassName = "ml-6 mt-2 mb-2 font-medium";
  const textAreaClassName =
    "mb-2 ml-4 mt-4 h-40 ml-4 mt-4 rounded-xl border-zinc-400/60";
  const clearButtonClassName =
    "bg-brand-base w-1/4 text-center font-medium px-3 text-xs h-6 mt-3 text-white rounded-lg border-2 border-brand-base";

  const checkboxClassName = "rounded-md mr-2";
  return (
    <div>
      <div className="relative pt-10 sm:pt-0 h-[14rem] md:h-[18rem]">
        <PageHeading title="Patient Intake Form" />
      </div>

      <div className="flex flex-col w-[calc(10% - 10px)] mx-12 my-5 lg:max-w-5xl lg:mx-auto">
        {!isSubmitted ? (
          <form
            className="flex flex-col mt-8 xl:mt-12 text-sm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="ml-4">
              <span className="text-red-500">*</span> marked are required
              fields.
            </p>
            <label className={labelClassName}>Personal Information *</label>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="First name *"
                className={clsx(inputClassName, "w-1/2")}
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
                placeholder="Last name *"
                className={clsx(inputClassName, "w-1/2")}
                {...register("lastName", { required: true, maxLength: 80 })}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors.lastName?.type === "required" && (
                <div className={errorClassName} role="alert">
                  <MdOutlineError className="mt-1" /> Last name is required
                </div>
              )}
            </div>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Date of Birth *"
                className={clsx(inputClassName, "w-1/2")}
                {...register("dateOfBirth", { required: true })}
                aria-invalid={errors.dateOfBirth ? "true" : "false"}
              />
              {errors.dateOfBirth?.type === "required" && (
                <div className={errorClassName} role="alert">
                  <MdOutlineError className="mt-1" /> Date Of Birth is required
                </div>
              )}
              <input
                type="text"
                placeholder="Preferred Name"
                className={clsx(inputClassName, "w-1/2")}
                {...register("preferredName")}
              />
            </div>
            <label className={subLabelClassName}>Gender</label>
            <select className={selectClassName} {...register("gender")}>
              <option defaultValue="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label className={subLabelClassName}>Marital Status</label>
            <select className={selectClassName} {...register("maritalStatus")}>
              <option defaultValue="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widow">Widow</option>
              <option value="Child">Child</option>
            </select>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Home Phone"
                className={clsx(inputClassName, "w-1/2")}
                {...register("homePhone", { minLength: 6, maxLength: 12 })}
              />
              <input
                type="text"
                placeholder="Mobile number"
                className={clsx(inputClassName, "w-1/2")}
                {...register("mobilePhone", { minLength: 6, maxLength: 12 })}
              />
            </div>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Work Phone"
                className={clsx(inputClassName, "w-1/2")}
                {...register("workPhone", { minLength: 6, maxLength: 12 })}
              />
              <input
                type="text"
                placeholder="Ext"
                className={clsx(inputClassName, "w-1/2")}
                {...register("ext", { minLength: 1, maxLength: 12 })}
              />
            </div>
            <input
              type="text"
              placeholder="Email"
              className=" ml-4 mt-4 mb-2 rounded-xl border-zinc-400/60"
              {...register("email", { pattern: /^\S+@\S+$/i })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.lastName?.type === "pattern" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Your email is incorrect
              </div>
            )}
            <label className={subLabelClassName}>
              How did you hear about us? *
            </label>
            <select
              className={selectClassName}
              {...register("referral", { required: true })}
              aria-invalid={errors.referral ? "true" : "false"}
            >
              <option defaultValue="" disabled>
                Select
              </option>
              <option value="Search Engine/Social Media">
                Search Engine/Social Media
              </option>
              <option value="Map">Map</option>
              <option value="Our Existing Patient">Our Existing Patient</option>
              <option value="Newspaper/Flyer">Newspaper/Flyer</option>
              <option value="Other">Other</option>
            </select>
            {errors.referral?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Please select one of the
                following
              </div>
            )}
            <label className={labelClassName}>Address *</label>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Street *"
                className={clsx(inputClassName, "w-1/2")}
                {...register("address", { required: true })}
                aria-invalid={errors.address ? "true" : "false"}
              />
              {errors.address?.type === "required" && (
                <div className={errorClassName} role="alert">
                  <MdOutlineError className="mt-1" /> Address is required
                </div>
              )}
              <input
                type="text"
                placeholder="Suite/Unit #"
                className={clsx(inputClassName, "w-1/2")}
                {...register("suite")}
              />
            </div>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="City *"
                className={clsx(inputClassName, "w-1/2")}
                {...register("city", { required: true })}
                aria-invalid={errors.city ? "true" : "false"}
              />
              {errors.city?.type === "required" && (
                <div className={errorClassName} role="alert">
                  <MdOutlineError className="mt-1" /> City is required
                </div>
              )}
              <select
                className="mb-2 ml-4 mt-4 rounded-xl border-zinc-400/60 placeholder-sm w-1/2"
                {...register("province", { required: true })}
                aria-invalid={errors.province ? "true" : "false"}
              >
                {errors.province?.type === "required" && (
                  <div className={errorClassName} role="alert">
                    <MdOutlineError className="mt-1" /> Province is required
                  </div>
                )}
                <option defaultValue="">Select Province *</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">
                  Newfoundland and Labrador
                </option>
                <option value="Northwest Territories">
                  Northwest Territories
                </option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">
                  Prince Edward Island
                </option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Yukon">Yukon</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Postal Code *"
              className="ml-4 mt-4 mb-2 rounded-xl border-zinc-400/60"
              {...register("postalCode", { required: true })}
              aria-invalid={errors.postalCode ? "true" : "false"}
            />
            {errors.postalCode?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Postal Code is required
              </div>
            )}
            <label className={labelClassName}>
              Primary Dental Benefit Plan
            </label>
            <label className={subLabelClassName}>
              Relationship to Subscriber
            </label>
            <select
              id="subscriber"
              className={selectClassName}
              {...register("subscriber")}
            >
              <option defaultValue="">Relationship</option>
              <option value="Self">Self</option>
              <option value="Spouse">Spouse</option>
              <option value="Child">Child</option>
            </select>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Subscriber Name"
                className={clsx(inputClassName, "w-1/2")}
                {...register("subscriberName")}
              />
              <input
                type="text"
                placeholder="Insurance Company"
                className={clsx(inputClassName, "w-1/2")}
                {...register("insuranceCompany")}
              />
            </div>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Phone Number"
                className={clsx(inputClassName, "w-1/2")}
                {...register("insuranceTel", { minLength: 6, maxLength: 12 })}
              />
              <input
                type="text"
                placeholder="Plan/Policy Number"
                className={clsx(inputClassName, "w-1/2")}
                {...register("planNum")}
              />
            </div>
            <input
              type="text"
              placeholder="Subscriber ID/Certificate #"
              className="ml-4 mt-4 mb-2 rounded-xl border-zinc-400/60"
              {...register("subscriberId")}
            />
            <label className="ml-4">Front of Insurance Card</label>
            <input
              className="ml-4"
              type="file"
              {...register("frontInsuranceCard")}
              accept="image/"
              onChange={onFileChangeFront}
            />
            <label className="ml-4 mt-3">Back of Insurance Card</label>
            <input
              className="ml-4 mb-3"
              type="file"
              {...register("backInsuranceCard")}
              accept="image/"
              onChange={onFileChangeBack}
            />
            <label className={labelClassName}>Emergency Contact *</label>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Name *"
                className={clsx(inputClassName, "w-1/2")}
                {...register("emerContact", { required: true })}
                aria-invalid={errors.emerContact ? "true" : "false"}
              />
              {errors.emerContact?.type === "required" && (
                <div className={errorClassName} role="alert">
                  <MdOutlineError className="mt-1" /> Name is required
                </div>
              )}

              <input
                type="text"
                placeholder="Relationship"
                className={clsx(inputClassName, "w-1/2")}
                {...register("emerRelationship")}
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="ml-4 mt-4 mb-2 rounded-xl border-zinc-400/60"
              {...register("emerTel", { minLength: 6, maxLength: 12 })}
            />
            <label className={labelClassName}>Medical History</label>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Family Doctor's Name"
                className={clsx(inputClassName, "w-1/2")}
                {...register("famDocName")}
              />
              <input
                type="text"
                placeholder="Family Doctor's Address"
                className={clsx(inputClassName, "w-1/2")}
                {...register("famDocAddress")}
              />
            </div>
            <div className="flex flex-row">
              <input
                type="tel"
                placeholder="Family Doctor's Phone"
                className={clsx(inputClassName, "w-1/2")}
                {...register("famDocTel", { minLength: 6, maxLength: 12 })}
              />
              <input
                type="text"
                placeholder="When was your last medical check-up?"
                className={clsx(inputClassName, "w-1/2")}
                {...register("medCheck")}
              />
            </div>
            <label className={subLabelClassName}>Do you smoke?</label>
            <select className={selectClassName} {...register("smoke")}>
              <option defaultValue="">Select</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
              <option value="Occasionally">Occasionally</option>
            </select>
            <label className={subLabelClassName}>
              Are you being treated for or have you had any of the following
              medical conditions?
            </label>
            <div className="grid grid-cols-3 gap-y-0.5 pl-6">
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Arthritis"
                  {...register("medConditions")}
                />
                Arthritis
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="AIDS/HIV"
                  {...register("medConditions")}
                />
                AIDS/HIV
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Asthma"
                  {...register("medConditions")}
                />
                Asthma
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="High Blood Pressure"
                  {...register("medConditions")}
                />
                High Blood Pressure
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Cancer"
                  {...register("medConditions")}
                />
                Cancer
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Diabetes"
                  {...register("medConditions")}
                />
                Diabetes
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Heart Murmur"
                  {...register("medConditions")}
                />
                Heart Murmur
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Joint Replacement"
                  {...register("medConditions")}
                />
                Joint Replacement
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Psychiatric Treatment"
                  {...register("medConditions")}
                />
                Psychiatric Treatment
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Leukemia"
                  {...register("medConditions")}
                />
                Leukemia
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Heart Problems"
                  {...register("medConditions")}
                />
                Heart Problems
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Stroke"
                  {...register("medConditions")}
                />
                Stroke
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Kidney Disease"
                  {...register("medConditions")}
                />
                Kidney Disease
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Liver Disease"
                  {...register("medConditions")}
                />
                Liver Problems
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Sinus Problems"
                  {...register("medConditions")}
                />
                Sinus Problems
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Hepatitis / Jaundice"
                  {...register("medConditions")}
                />
                Hepatitis / Jaundice
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Acid Reflux"
                  {...register("medConditions")}
                />
                Acid Reflux
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Gum Disease"
                  {...register("medConditions")}
                />
                Gum Disease
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Lung Disease"
                  {...register("medConditions")}
                />
                Lung Disease
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Thyroid Problems"
                  {...register("medConditions")}
                />
                Thyroid Problems
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Tuberculosis"
                  {...register("medConditions")}
                />
                Tuberculosis
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Venereal Disease"
                  {...register("medConditions")}
                />
                Venereal Disease
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="PaceMaker"
                  {...register("medConditions")}
                />
                PaceMaker
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Rheumatic Fever"
                  {...register("medConditions")}
                />
                Rheumatic Fever
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Bone Problems"
                  {...register("medConditions")}
                />
                Bone Problems
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Have Fainted"
                  {...register("medConditions")}
                />
                Have Fainted
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Bleeding Problems"
                  {...register("medConditions")}
                />
                Bleeding Problems
              </label>
            </div>
            <textarea
              className={textAreaClassName}
              placeholder="If you weren't diagnosed but suspect of having a medical condition, please list it here. List any other medical conditions you have."
              {...register("otherMedConditions")}
            />
            <label className={subLabelClassName}>
              Are you allergic to any of the following?
            </label>
            <div className="grid grid-cols-3 gap-y-0.5 pl-6">
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Anesthetic"
                  {...register("allergies")}
                />
                Anesthetic
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Ibuprofen"
                  {...register("allergies")}
                />
                Ibuprofen
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Penicilin"
                  {...register("allergies")}
                />
                Penicilin
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Aspirin"
                  {...register("allergies")}
                />
                Aspirin
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Iodine"
                  {...register("allergies")}
                />
                Iodine
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Sulfa Drugs"
                  {...register("allergies")}
                />
                Sulfa Drugs
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Codeine"
                  {...register("allergies")}
                />
                Codeine
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="latex"
                  {...register("allergies")}
                />
                Latex
              </label>
            </div>
            <textarea
              className={textAreaClassName}
              placeholder="If you are not sure but suspect of having an allergic reaction to something, please specify. List any other allergic reactions you have."
              {...register("otherAllergies")}
            />
            <label className={subLabelClassName}>
              Have you taken any long term medicaions in the past? Prescription
              or Non-Prescription
            </label>
            <select className={selectClassName} {...register("longTermMeds")}>
              <option defaultValue="">Select</option>
              <option value="no">No</option>
              <option value="Yes">Yes</option>
            </select>
            <label className={subLabelClassName}>
              Have you ever had an adverse reaction to a dental injection?
            </label>
            <select
              className={selectClassName}
              {...register("dentalInjection")}
            >
              <option defaultValue="">Select</option>
              <option value="no">No</option>
              <option value="Yes">Yes</option>
              <option value="notsure-maybe">Not Sure/Maybe</option>
            </select>
            <label className={subLabelClassName}>
              Do you have any conditions that affect your immune system? (e.g.
              leukemia, AIDS, HIV infection, radiotherapy, chemotherapy, etc.)
            </label>
            <select className={selectClassName} {...register("immuneSystem")}>
              <option defaultValue="">Select</option>
              <option value="no">No</option>
              <option value="Yes">Yes</option>
              <option value="notsure-maybe">Not Sure/Maybe</option>
            </select>
            <label className={subLabelClassName}>
              Have you ever been hospitalized for any illnesses or operations?
            </label>
            <select className={selectClassName} {...register("hospital")}>
              <option defaultValue="">Select</option>
              <option value="no">No</option>
              <option value="Yes">Yes</option>
              <option value="notsure-maybe">Not Sure/Maybe</option>
            </select>
            <label className={subLabelClassName}>
              Do you have or have you ever had any of the following? Please
              check.
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-0.5 pl-6">
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  {...register("illness")}
                />
                Chest Pain - Angina
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Heart Attack"
                  className={checkboxClassName}
                  {...register("illness")}
                />
                Heart Attack
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Mitral Valve Prolapse"
                  {...register("illness")}
                />
                Mitral Valve Prolapse
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Latex"
                  {...register("illness")}
                />
                Latex
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Thyroid Disease"
                  {...register("illness")}
                />
                Thyroid Disease
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Seizures(Epilepsy)"
                  {...register("illness")}
                />
                Seizures(Epilepsy)
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Shortness of Breathe"
                  {...register("illness")}
                />
                Shortness of Breathe
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Steroid Therapy"
                  {...register("illness")}
                />
                Steroid Therapy
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Osteoporosis"
                  {...register("illness")}
                />
                Osteoporosis
              </label>
              <label>
                <input
                  type="checkbox"
                  className={checkboxClassName}
                  value="Bleeding Problems"
                  {...register("illness")}
                />
                Bleeding Problems
              </label>
            </div>
            <textarea
              className={textAreaClassName}
              placeholder="Have we missed anything that you would like to let us know about?"
              {...register("otherIllness")}
            />
            <label className={subLabelClassName}>
              For Women Only: Are you breastfeeding or pregnant?
            </label>
            <select className={selectClassName} {...register("pregnant")}>
              <option defaultValue="">Select</option>
              <option value="no">No</option>
              <option value="Yes">Yes</option>
              <option value="notsure-maybe">Not Sure/Maybe</option>
            </select>
            <label className={labelClassName}>Dental History</label>
            <textarea
              className={textAreaClassName}
              placeholder="What is your reason for visit today?"
              {...register("visitReason")}
            />
            <input
              type="text"
              placeholder="When was your last dental visit?"
              className="ml-4 mt-4 rounded-xl"
              {...register("lastVisit")}
            />
            <label className={subLabelClassName}>
              Are you nervous during dental visits?
            </label>
            <select className={selectClassName} {...register("nervous")}>
              <option defaultValue="">Select</option>
              <option value="no">No</option>
              <option value="slightly">Slightly</option>
              <option value="somewhat">Somewhat</option>
              <option value="extremely">Extremely</option>
            </select>
            <input
              type="text"
              placeholder="When was your last dental x-ray?"
              className="ml-4 mt-4 rounded-xl"
              {...register("lastXray")}
            />
            <label className={subLabelClassName}>
              Have you ever been to a dental specialist?
            </label>
            <select
              className={selectClassName}
              {...register("dentalSpecialist")}
            >
              <option defaultValue="">Select</option>
              <option value="No">No</option>
              <option value=" Yes"> Yes</option>
              <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
            </select>
            <label className={subLabelClassName}>
              Do your gums bleed when you brush or floss?
            </label>
            <select className={selectClassName} {...register("gumBleed")}>
              <option defaultValue="">Select</option>
              <option value="No">No</option>
              <option value="Yes"> Yes</option>
              <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
            </select>
            <label className={subLabelClassName}>
              Have you been told to take antibiotics before a dental visit?
            </label>
            <select className={selectClassName} {...register("antibiotics")}>
              <option defaultValue="">Select</option>
              <option value="No">No</option>
              <option value="Yes"> Yes</option>
              <option value="Not Sure/Maybe"> Not Sure/Maybe</option>
            </select>
            <label className={subLabelClassName}>
              Do you have pain in the jaw or jaw joint?
            </label>
            <select className={selectClassName} {...register("jawPain")}>
              <option defaultValue="">Select</option>
              <option value="No">No</option>
              <option value="Yes"> Yes</option>
              <option value="Not Sure/Maybe"> Not Sure/Maybe</option>
            </select>
            <label className={inputClassName}>
              I, understand, certify that to the best of my knowledge, the above
              information is correct. I understand that any information that I
              refuse to provide may affect my health and dental treatment.
            </label>
            <label className="mt-3 mb-1">
              Patient Signature *
              <input
                type="hidden"
                {...(register("patientSig"), { required: true })}
              />
              <SignatureCanvas
                ref={patientSignatureRef}
                canvasProps={{
                  className: "border border-gray-300 rounded-lg w-full h-48",
                }}
              />
              {patientSignatureRef.current?.isEmpty() && (
                <div className={errorClassName} role="alert">
                  <MdOutlineError className="mt-1" /> Signature is required
                </div>
              )}
            </label>
            <button
              className={clearButtonClassName}
              onClick={clearPatientCanvas}
            >
              Clear
            </button>
            <label className="mt-3 mb-1">
              Parent/Guardian Signature
              <input type="hidden" {...register("parentSig")} />
              <SignatureCanvas
                ref={parentSignatureRef}
                canvasProps={{
                  className: "border border-gray-300 rounded-lg w-full h-48",
                }}
              />
            </label>
            <button
              className={clearButtonClassName}
              onClick={clearParentCanvas}
            >
              Clear
            </button>
            <label>
              * Date:
              <input
                type="date"
                className="w-40 ml-1 mt-4 rounded-xl"
                {...register("date", { required: true })}
                aria-invalid={errors.date ? "true" : "false"}
              />
            </label>
            {errors.date?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Please provide a date
              </div>
            )}
            <button
              className={clsx(
                "bg-brand-base font-medium px-8 text-sm h-10 mt-5 text-white rounded-lg border-2 border-brand-base",
                formState.isValid &&
                  "hover:text-brand-base hover:shadow-[inset_80rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow]",
                !formState.isValid && "opacity-30"
              )}
              type="submit"
              disabled={!formState.isValid}
              value="Submit Application"
            >
              Submit
            </button>
          </form>
        ) : (
          <p className="text-center text-xl font-extralight pt-20">
            Your submission has been successfully received!
          </p>
        )}
      </div>
    </div>
  );
};

export default NewPatientForm;
