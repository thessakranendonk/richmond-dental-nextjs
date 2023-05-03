import { NewPatientFormState } from "@/types/forms-interfaces";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineError } from "react-icons/md";
import clsx from "clsx";
import SignatureCanvas from "react-signature-canvas";

export const initialNewPatientFormState: NewPatientFormState = {
  firstName: "",
  lastName: "",
  preferredName: "",
  dateOfBirth: "",
  gender: "",
  maritalStatus: "",
  homePhone: "",
  mobilePhone: "",
  workPhone: "",
  ext: "",
  email: "",
  referral: "",
  address: "",
  suite: "",
  city: "",
  province: "",
  postalCode: "",
  subscriber: "",
  subscriberName: "",
  insuranceCompany: "",
  insuranceTel: "",
  planNum: "",
  subscriberId: "",
  frontImage: null,
  backImage: null,
  emerContact: "",
  emerRelationship: "",
  emerTel: "",
  famDocName: "",
  famDocAddress: "",
  famDocTel: "",
  medCheck: "",
  smoke: "",
  medConditions: "",
  otherMedConditions: "",
  allergies: "",
  otherAllergies: "",
  longTermMeds: "",
  dentalInjection: "",
  immuneSystem: "",
  hospital: "",
  illness: "",
  otherIllness: "",
  pregnant: "",
  visitReason: "",
  lastVisit: "",
  nervous: "",
  lastXray: "",
  dentalSpecialist: "",
  gumBleed: "",
  antibiotics: "",
  jawPain: "",
  terms: "",
  patientSig: "",
  parentSig: "",
  signature: "" as string,
  date: "",
};

const NewPatientForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<NewPatientFormState>();
  const [newPatientState, setNewPatientState] = useState<NewPatientFormState>({
    ...initialNewPatientFormState,
    signature: "" as string,
  });

  const signatureRef = useRef<SignatureCanvas>(null);

  const onSubmit = async (data: NewPatientFormState) => {
    try {
      const signature = signatureRef.current?.toDataURL("image/png");
      if (signature) {
        data.signature = signature;
      }
      // data.patientSig = signatureRef.current?.toDataURL() || "";
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
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

  return (
    <div className="flex flex-col w-[calc(10% - 10px)] mx-12 my-12 lg:max-w-lg lg:mx-auto">
      <h1 className="text-center text-2xl xl:text-3xl mb-4 xl:mb-8 font-medium mt-8 sm:mt-0">
        Patient Intake Form
      </h1>
      <form
        className="flex flex-col mt-8 xl:mt-12 text-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="ml-4">* marked are required fields.</p>
        <label className={labelClassName}>Personal Information *</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="First name *"
            className={inputClassName}
            {...register("firstName", { required: true, maxLength: 80 })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <div className={errorClassName} role="alert">
              <MdOutlineError className="mt-1" /> First name is required
            </div>
          )}
          {/* <input
            type="text"
            placeholder="Last name *"
            className={inputClassName}
            {...register("lastName", { required: true, maxLength: 80 })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName?.type === "required" && (
            <div className={errorClassName} role="alert">
              <MdOutlineError className="mt-1" /> Last name is required
            </div>
          )} */}
        </div>
        {/* <div>
          <input
            type="text"
            placeholder="Preferred Name"
            className={inputClassName}
            {...register("preferredName")}
          />
          <input
            type="text"
            placeholder="Date of Birth *"
            className={inputClassName}
            {...register("dateOfBirth", { required: true, maxLength: 10 })}
            aria-invalid={errors.dateOfBirth ? "true" : "false"}
          />
          {errors.lastName?.type === "required" && (
            <div className={errorClassName} role="alert">
              <MdOutlineError className="mt-1" /> Date Of Birth is required
            </div>
          )}
        </div> */}
        {/* <label className={subLabelClassName}>Gender</label>
        <select className={selectClassName} {...register("gender")}>
          <option value="" disabled selected hidden>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label className={subLabelClassName}>Marital Status</label>
        <select className={selectClassName} {...register("maritalStatus")}>
          <option value="" disabled selected hidden>
            Select Marital Status
          </option>
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
            className={inputClassName}
            {...register("homePhone", { minLength: 6, maxLength: 12 })}
          />
          <input
            type="text"
            placeholder="Mobile number"
            className={inputClassName}
            {...register("mobilePhone", { minLength: 6, maxLength: 12 })}
          />
        </div> */}
        {/* <div>
          <input
            type="text"
            placeholder="Work Phone"
            className={inputClassName}
            {...register("workPhone", { minLength: 6, maxLength: 12 })}
          />
          <input
            type="text"
            placeholder="Ext"
            className={inputClassName}
            {...register("ext", { minLength: 1, maxLength: 12 })}
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="w-52  ml-4 mt-4 mb-2 rounded-xl border-zinc-400/60"
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
          {errors.referral?.type === "required" && (
            <div className={errorClassName} role="alert">
              <MdOutlineError className="mt-1" /> Please select one of the
              following
            </div>
          )}
          <option value="" disabled selected hidden>
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
        <label className={labelClassName}>Address *</label> */}
        {/* <div className="flex flex-row">
          <input
            type="text"
            placeholder="Address *"
            className={inputClassName}
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
            className={inputClassName}
            {...register("suite")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="City *"
            className={inputClassName}
            {...register("city", { required: true })}
            aria-invalid={errors.city ? "true" : "false"}
          />
          {errors.city?.type === "required" && (
            <div className={errorClassName} role="alert">
              <MdOutlineError className="mt-1" /> City is required
            </div>
          )}
          <select
            className="w-52 ml-4 mt-4 mb-2 rounded-xl border-zinc-400/60"
            {...register("province", { required: true })}
            aria-invalid={errors.province ? "true" : "false"}
          >
            {errors.province?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Province is required
              </div>
            )}
            <option value="" disabled selected hidden>
              Select Province *
            </option>
            <option value="Alberta">Alberta</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland and Labrador">
              Newfoundland and Labrador
            </option>
            <option value="Northwest Territories">Northwest Territories</option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Nunavut">Nunavut</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Saskatchewan">Saskatchewan</option>
            <option value="Yukon">Yukon</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Postal Code *"
          className="w-52 ml-4 mt-4 mb-2 rounded-xl border-zinc-400/60"
          {...register("postalCode", { required: true })}
          aria-invalid={errors.postalCode ? "true" : "false"}
        />
        {errors.postalCode?.type === "required" && (
          <div className={errorClassName} role="alert">
            <MdOutlineError className="mt-1" /> Postal Code is required
          </div>
        )}
        <label className={labelClassName}>Primary Dental Benefit Plan</label>
        <label className={subLabelClassName}>Relationship to Subscriber</label>
        <select
          id="subscriber"
          className={selectClassName}
          {...register("subscriber")}
        >
          <option value="" disabled selected hidden>
            Relationship
          </option>
          <option value="Self">Self</option>
          <option value="Spouse">Spouse</option>
          <option value="Child">Child</option>
        </select>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Subscriber Name"
            className={inputClassName}
            {...register("subscriberName")}
          />
          <input
            type="text"
            placeholder="Insurance Company"
            className={inputClassName}
            {...register("insuranceCompany")}
          />
        </div> */}
        {/* <div>
          <input
            type="text"
            placeholder="Phone Number"
            className={inputClassName}
            {...register("insuranceTel", { minLength: 6, maxLength: 12 })}
          />
          <input
            type="text"
            placeholder="Plan/Policy Number"
            className={inputClassName}
            {...register("planNum")}
          />
        </div>
        <input
          type="text"
          placeholder="Subscriber ID/Certificate #"
          className="w-52 ml-4 mt-4 mb-2 rounded-xl border-zinc-400/60"
          {...register("subscriberId")}
        />
        <input type="file" {...register("frontImage")} accept="image/" />
        <label className={labelClassName}>Emergency Contact *</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Name *"
            className={inputClassName}
            {...register("emerContact", { required: true })}
            aria-invalid={errors.emerContact ? "true" : "false"}
          />
          {errors.emerContact?.type === "required" && (
            <div className={errorClassName} role="alert">
              <MdOutlineError className="mt-1" /> Emergency Contact Name is
              required
            </div>
          )}
          <input
            type="text"
            placeholder="Relationship"
            className={inputClassName}
            {...register("emerRelationship")}
          />
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          className="w-52 ml-4 mt-4 mb-2 rounded-xl border-zinc-400/60"
          {...register("emerTel", { minLength: 6, maxLength: 12 })}
        />
        <label className={labelClassName}>Medical History</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Family Doctor's Name"
            className={inputClassName}
            {...register("famDocName")}
          />
          <input
            type="text"
            placeholder="Family Doctor's Address"
            className={inputClassName}
            {...register("famDocAddress")}
          />
        </div> */}
        {/* <div>
          <input
            type="tel"
            placeholder="Family Doctor's Phone"
            className={inputClassName}
            {...register("famDocTel", { minLength: 6, maxLength: 12 })}
          />
          <input
            type="text"
            placeholder="When was your last medical check-up?"
            className={inputClassName}
            {...register("medCheck")}
          />
        </div>
        <label className={subLabelClassName}>Do you smoke?</label>
        <select className={selectClassName} {...register("smoke")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
          <option value="Occasionally">Occasionally</option>
        </select>
        <label className={subLabelClassName}>
          Are you being treated for or have you had any of the following medical
          conditions?
        </label> */}
        {/* <div className="flex flex-col">
          <div>
            <label className="mr-2 ml-6">
              <input type="checkbox" {...register("medConditions")} />
              Arthritis
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              AIDS/HIV
            </label>
            <label>
              <input
                // className="ml-2"
                type="checkbox"
                {...register("medConditions")}
              />
              Asthma
            </label>
            <label>
              <input
                // className="ml-1"
                type="checkbox"
                {...register("medConditions")}
              />
              High Blood Pressure
            </label>{" "}
            <label>
              <input
                // className="ml-1"
                type="checkbox"
                {...register("medConditions")}
              />
              Cancer
            </label>
            <label>
              <input
                // className="ml-1"
                type="checkbox"
                {...register("medConditions")}
              />
              Diabetes
            </label>{" "}
            <label>
              <input
                // className="ml-1"
                type="checkbox"
                {...register("medConditions")}
              />
              Heart Murmur
            </label>{" "}
            <label>
              <input
                // className="ml-1"
                type="checkbox"
                {...register("medConditions")}
              />
              Joint Replacement
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Psychiatric Treatment
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Leukemia
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Heart Problems
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Stroke
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Kidney Disease
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Liver Problems
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Sinus Problems
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Hepatitis / Jaundice
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Acid Reflux
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Gum Disease
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Lung Disease
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Thyroid Problems
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Tuberculosis
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Venereal Disease
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              PaceMaker
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Rheumatic Fever
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Bone Problems
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Have Fainted
            </label>
            <label>
              <input type="checkbox" {...register("medConditions")} />
              Bleeding Problems
            </label>
          </div>
        </div> */}
        {/* <textarea
          className={textAreaClassName}
          placeholder="If you weren't diagnosed but suspect of having a medical condition, please list it here. List any other medical conditions you have."
          {...register("otherMedConditions")}
        />
        <label className={subLabelClassName}>
          Are you allergic to any of the following?
        </label>
        <div className="flex flex-row ml-4">
          <label>
            <input type="checkbox" {...register("allergies")} />
            Anesthetic
          </label>{" "}
          <label>
            <input type="checkbox" {...register("allergies")} />
            Ibuprofen
          </label>{" "}
          <label>
            <input type="checkbox" {...register("allergies")} />
            Penicilin
          </label>{" "}
          <label>
            <input type="checkbox" {...register("allergies")} />
            Aspirin
          </label>{" "}
        </div>
        <div className="ml-4">
          <label>
            <input type="checkbox" {...register("allergies")} />
            Iodine
          </label>{" "}
          <label>
            <input type="checkbox" {...register("allergies")} />
            Sulfa Drugs
          </label>{" "}
          <label>
            <input type="checkbox" {...register("allergies")} />
            Codeine
          </label>{" "}
          <label>
            <input type="checkbox" {...register("allergies")} />
            Latex
          </label>
        </div>
        <textarea
          className={textAreaClassName}
          placeholder="If you are not sure but suspect of having an allergic reaction to something, please specify. List any other allergic reactions you have."
          {...register("otherAllergies")}
        />
        <label className={subLabelClassName}>
          Have you taken any long term medicaions in the past? Prescription or
          Non-Prescription
        </label>
        <select className={selectClassName} {...register("longTermMeds")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="no">No</option>
          <option value="Yes">Yes</option>
        </select>
        <label className={subLabelClassName}>
          Have you ever had an adverse reaction to a dental injection?
        </label>
        <select className={selectClassName} {...register("dentalInjection")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="no">No</option>
          <option value="Yes">Yes</option>
          <option value="notsure-maybe">Not Sure/Maybe</option>
        </select>
        <label className={subLabelClassName}>
          Do you have any conditions that affect your immune system? (e.g.
          leukemia, AIDS, HIV infection, radiotherapy, chemotherapy, etc.)
        </label>
        <select className={selectClassName} {...register("immuneSystem")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="no">No</option>
          <option value="Yes">Yes</option>
          <option value="notsure-maybe">Not Sure/Maybe</option>
        </select>
        <label className={subLabelClassName}>
          Have you ever been hospitalized for any illnesses or operations?
        </label>
        <select className={selectClassName} {...register("hospital")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="no">No</option>
          <option value="Yes">Yes</option>
          <option value="notsure-maybe">Not Sure/Maybe</option>
        </select>
        <label className={subLabelClassName}>
          Do you have or have you ever had any of the following? Please check.
        </label> */}
        {/* <div className="flex flex-row ml-4">
          <label>
            <input type="checkbox" {...register("illness")} />
            Chest Pain, Angina
          </label>
          <label>
            <input type="checkbox" {...register("illness")} />
            Heart Attack
          </label>
          <label>
            <input type="checkbox" {...register("illness")} />
            Mitral Valve Prolapse
          </label>
          <label>
            <input type="checkbox" {...register("illness")} />
            Latex
          </label>
          <label>
            <input type="checkbox" {...register("illness")} />
            Thyroid Disease
          </label>
        </div>
        <div className="ml-4">
          <label>
            <input type="checkbox" {...register("illness")} />
            Seizures(Epilepsy)
          </label>
          <label>
            <input type="checkbox" {...register("illness")} />
            Shortness of Breathe
          </label>
          <label>
            <input type="checkbox" {...register("illness")} />
            Steroid Therapy
          </label>
          <label>
            <input type="checkbox" {...register("illness")} />
            Osteoporosis
          </label>
          <label>
            <input type="checkbox" {...register("illness")} />
            Bleeding Problems
          </label>
        </div> */}
        {/* <textarea
          className={textAreaClassName}
          placeholder="Have we missed anything that you would like to let us know about?"
          {...register("otherIllness")}
        />
        <label className={subLabelClassName}>
          For Women Only: Are you breastfeeding or pregnant?
        </label>
        <select className={selectClassName} {...register("pregnant")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="no">No</option>
          <option value="Yes">Yes</option>
          <option value="notsure-maybe">Not Sure/Maybe</option>
        </select>
        <label className={labelClassName}>Dental History</label>
        <textarea
          className="w-72 h-40 ml-4 mt-4 rounded-xl"
          placeholder="What is your reason for visit today?"
          {...register("visitReason")}
        />
        <input
          type="text"
          placeholder="When was your last dental visit?"
          className="w-64 ml-4 mt-4 rounded-xl"
          {...register("lastVisit")}
        />
        <label className={subLabelClassName}>
          Are you nervous during dental visits?
        </label>
        <select className={selectClassName} {...register("nervous")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="no">No</option>
          <option value="slightly">Slightly</option>
          <option value="somewhat">Somewhat</option>
          <option value="extremely">Extremely</option>
        </select>
        <input
          type="text"
          placeholder="When was your last dental x-ray?"
          className="w-72 ml-4 mt-4 rounded-xl"
          {...register("lastXray")}
        />
        <label className={subLabelClassName}>
          Have you ever been to a dental specialist?
        </label>
        <select className={selectClassName} {...register("dentalSpecialist")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="No">No</option>
          <option value=" Yes"> Yes</option>
          <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
        </select>
        <label className={subLabelClassName}>
          Do your gums bleed when you brush or floss?
        </label>
        <select className={selectClassName} {...register("gumBleed")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="No">No</option>
          <option value="Yes"> Yes</option>
          <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
        </select>
        <label className={subLabelClassName}>
          Have you been told to take antibiotics before a dental visit?
        </label>
        <select className={selectClassName} {...register("antibiotics")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="No">No</option>
          <option value="Yes"> Yes</option>
          <option value="Not Sure/Maybe"> Not Sure/Maybe</option>
        </select>
        <label className={subLabelClassName}>
          Do you have pain in the jaw or jaw joint?
        </label>
        <select className={selectClassName} {...register("jawPain")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="No">No</option>
          <option value="Yes"> Yes</option>
          <option value="Not Sure/Maybe"> Not Sure/Maybe</option>
        </select>
        <label>
          <input
            type="checkbox"
            className={subLabelClassName}
            {...register("terms", { required: true })}
            aria-invalid={errors.terms ? "true" : "false"}
          />
          {errors.terms?.type === "required" && (
            <div className={errorClassName} role="alert">
              <MdOutlineError className="mt-1" />
              Must agree to terms
            </div>
          )}
          * I, understand, certify that to the best of my knowledge, the above
          information is correct. I understand that any information that I
          refuse to provide may affect my health and dental treatment.
        </label>{" "} */}
        <input
          type="datetime-local"
          placeholder="Today's Date"
          className="w-52 ml-4 mt-4 rounded-xl"
          {...register("date")}
        />
        {/* <SignatureCanvas
          ref={signatureRef}
          canvasProps={{ width: 400, height: 200, className: "sigCanvas" }}
          onBegin={() => console.log("onBegin")}
          onEnd={() => console.log("onEnd")}
        /> */}
        <SignatureCanvas
          ref={signatureRef}
          canvasProps={{
            width: 500,
            height: 200,
            className: "border border-gray-300",
          }}
        />

        <SignatureCanvas
          ref={signatureRef}
          canvasProps={{
            width: 500,
            height: 200,
            className: "border border-gray-300",
          }}
        />
        {/* <button onClick={clearCanvas}>Clear</button> */}
        <button
          // className={clsx(
          //   "bg-emerald-800 font-medium px-8 text-sm h-10 mt-5 text-white rounded-full border-2 border-emerald-800",
          //   formState.isValid &&
          //     "hover:text-emerald-800 hover:shadow-[inset_50rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow]",
          //   !formState.isValid && "opacity-30"
          // )}
          type="submit"
          // disabled={!formState.isValid}
          value="Submit Application"
        >
          submit{" "}
        </button>
      </form>
    </div>
  );
};

export default NewPatientForm;
