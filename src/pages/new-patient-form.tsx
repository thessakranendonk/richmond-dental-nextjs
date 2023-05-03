import { NewPatientFormState } from "@/types/forms-interfaces";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
  date: "",
};

const NewPatientForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPatientFormState>();
  const [newPatientState, setNewPatientState] = useState<NewPatientFormState>(
    initialNewPatientFormState
  );

  const onSubmit = async (data: NewPatientFormState) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      // console.log(result.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-start ml-4">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <p>* marked are required fields.</p>
        <label className="ml-4">Personal Information *</label>
        <div className="flex flex-row">
          <input
            type="text"
            // id="firstName"
            placeholder="First name *"
            className="ml-4 rounded-xl"
            {...register("firstName")}
          />
          <input
            type="text"
            // id="lastName"
            placeholder="Last name *"
            className="ml-4 rounded-xl"
            {...register("lastName")}
          />
        </div>
        <div>
          <input
            type="text"
            // id="name"
            placeholder="Preferred Name"
            className="ml-4 rounded-xl"
            {...register("preferredName")}
          />
          <input
            type="text"
            // id="dateOfBirth"
            placeholder="Date of Birth *"
            className="ml-4 mt-4 rounded-xl"
            {...register("dateOfBirth")}
            required
          />
        </div>
        <label className="ml-4">Gender</label>
        <select
          // id="gender"
          className="ml-4 w-40 h-8 py-1 rounded-xl"
          {...register("gender")}
        >
          <option value="" disabled selected hidden>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <label className="ml-4">Marital Status</label>
        <select
          // id="maritalStatus"
          className="ml-4 w-40 h-8 py-1 rounded-xl"
          {...register("maritalStatus")}
        >
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
            // id="homePhone"
            className="ml-4 mt-4 rounded-xl"
            {...register("homePhone")}
          />
          <input
            type="text"
            placeholder="Mobile number"
            // id="mobilePhone"
            className="ml-4 mt-4 rounded-xl"
            {...register("mobilePhone")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Work Phone"
            // id="workPhone"
            className="ml-4 mt-4 rounded-xl"
            {...register("workPhone")}
          />
          <input
            type="text"
            placeholder="Ext"
            // id="ext"
            className="ml-4 mt-4 rounded-xl"
            {...register("lastName")}
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          // id="email"
          className="w-52  ml-4 mt-4 rounded-xl"
          {...register("email")}
        />
        <label className="ml-4">How did you hear about us? *</label>
        <select
          // id="referral"
          className="w-32 ml-4 rounded-xl"
          {...register("referral")}
          required
        >
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
        <label className="ml-4">Address *</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Address *"
            // id="address"
            className="ml-4 mt-4 rounded-xl"
            {...register("address")}
            required
          />
          <input
            type="text"
            placeholder="Suite/Unit #"
            // id="suite"
            className="ml-4 mt-4 rounded-xl"
            {...register("suite")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="City *"
            // id="city"
            className="ml-4 mt-4 rounded-xl"
            {...register("city")}
            required
          />
          <select
            // id="province"
            className="ml-4 mt-4 rounded-xl"
            {...register("province")}
            required
          >
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
          // id="postalCode"
          className="w-32 ml-4 mt-4 rounded-xl"
          {...register("postalCode")}
          required
        />
        <label className="ml-4">Primary Dental Benefit Plan</label>
        <label className="ml-4">Relationship to Subscriber</label>
        <select
          id="subscriber"
          className="w-36 ml-4 mt-4 rounded-xl"
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
            // id="subscriberName"
            className="ml-4 mt-4 rounded-xl"
            {...register("subscriberName")}
          />
          <input
            type="text"
            placeholder="Insurance Company"
            // id="insuranceCompany"
            className="ml-4 mt-4 rounded-xl"
            {...register("insuranceCompany")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            // id="insuranceTel"
            className="ml-4 mt-4 rounded-xl"
            {...register("insuranceTel")}
          />
          <input
            type="text"
            placeholder="Plan/Policy Number"
            // id="planNum"
            className="ml-4 mt-4 rounded-xl"
            {...register("planNum")}
          />
        </div>
        <input
          type="text"
          placeholder="Subscriber ID/Certificate #"
          // id="subscriberId"
          className="w-52 ml-4 mt-4 rounded-xl"
          {...register("subscriberId")}
        />
        <input type="file" {...register("frontImage")} />
        {/* <label className="ml-4">Emergency Contact *</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Name *"
            // id="emerContact"
            className="ml-4 mt-4 rounded-xl"
            {...register("emerContact")}
            required
          />
          <input
            type="text"
            placeholder="Relationship"
            // id="emerRelationship"
            className="ml-4 mt-4 rounded-xl"
            {...register("emerRelationship")}
          />
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          // id="emerTel"
          className="w-36 ml-4 mt-4 rounded-xl"
          {...register("emerTel")}
        />
        <label className="ml-4">Medical History</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Family Doctor's Name"
            // id="famDocName"
            className="ml-4 mt-4 rounded-xl"
            {...register("famDocName")}
          />
          <input
            type="text"
            placeholder="Family Doctor's Address"
            // id="famDocAddress"
            className="ml-4 mt-4 rounded-xl"
            {...register("famDocAddress")}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Family Doctor's Phone"
            // id="famDocTel"
            className="ml-4 mt-4 rounded-xl"
            {...register("famDocTel")}
          />
          <input
            type="text"
            placeholder="When was your last medical check-up?"
            // id="medCheck"
            className="ml-4 mt-4 rounded-xl"
            {...register("medCheck")}
          />
        </div>
        <label className="ml-4">Do you smoke?</label>
        <select
          // id="smoke"
          className="w-32 ml-4 mt-4 rounded-xl"
          {...register("smoke")}
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
          <option value="Occasionally">Occasionally</option>
        </select>
        <label className="ml-4">
          Are you being treated for or have you had any of the following medical
          conditions?
        </label>
        <div className="flex flex-row ml-4">
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Arthritis
          </label>
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            AIDS/HIV
          </label>
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Asthma
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            High Blood Pressure
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Cancer
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Diabetes
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Heart Murmur
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Joint Replacement
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Psychiatric Treatment
          </label>{" "}
        </div>
        <div className="ml-4">
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Leukemia
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Heart Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Stroke
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Kidney Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Liver Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Sinus Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Hepatitis / Jaundice
          </label>
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Acid Reflux
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Gum Disease
          </label>{" "}
        </div>
        <div className="ml-4">
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Lung Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Thyroid Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Tuberculosis
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Venereal Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            PaceMaker
          </label>
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Rheumatic Fever
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Bone Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Have Fainted
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // id="medConditions"
              {...register("medConditions")}
            />
            Bleeding Problems
          </label>
        </div>
        <textarea
          className="ml-4 mt-4 rounded-xl"
          placeholder="If you weren't diagnosed but suspect of having a medical condition, please list it here. List any other medical conditions you have."
          // id="otherMedConditions"
          {...register("otherMedConditions")}
        />
        <label className="ml-4">
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
          className="ml-4 mt-4 rounded-xl"
          placeholder="If you are not sure but suspect of having an allergic reaction to something, please specify. List any other allergic reactions you have."
          {...register("otherAllergies")}
        />
        <label className="ml-4">
          Have you taken any long term medicaions in the past? Prescription or
          Non-Prescription
        </label>
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          {...register("longTermMeds")}
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="no">No</option>
          <option value="Yes">Yes</option>
        </select>
        <label className="ml-4">
          Have you ever had an adverse reaction to a dental injection?
        </label>
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          {...register("dentalInjection")}
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="no">No</option>
          <option value="Yes">Yes</option>
          <option value="notsure-maybe">Not Sure/Maybe</option>
        </select>
        <label className="ml-4">
          Do you have any conditions that affect your immune system? (e.g.
          leukemia, AIDS, HIV infection, radiotherapy, chemotherapy, etc.)
        </label>
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          {...register("immuneSystem")}
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="no">No</option>
          <option value="Yes">Yes</option>
          <option value="notsure-maybe">Not Sure/Maybe</option>
        </select>
        <label className="ml-4">
          Have you ever been hospitalized for any illnesses or operations?
        </label>
        <select className="w-32 ml-4 mt-4 rounded-xl" {...register("hospital")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="no">No</option>
          <option value="Yes">Yes</option>
          <option value="notsure-maybe">Not Sure/Maybe</option>
        </select>
        <label className="ml-4">
          Do you have or have you ever had any of the following? Please check.
        </label>
        <div className="flex flex-row ml-4">
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
        </div>
        <textarea
          className="ml-4 rounded-xl"
          placeholder="Have we missed anything that you would like to let us know about?"
          {...register("otherIllness")}
        />
        <label className="ml-4">
          For Women Only: Are you breastfeeding or pregnant?
        </label>
        <select className="w-32 ml-4 mt-4 rounded-xl" {...register("pregnant")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="no">No</option>
          <option value="Yes">Yes</option>
          <option value="notsure-maybe">Not Sure/Maybe</option>
        </select>
        <label className="ml-4">Dental History</label>
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
        <label className="ml-4">Are you nervous during dental visits?</label>
        <select className="w-32 ml-4 mt-4 rounded-xl" {...register("nervous")}>
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
        <label className="ml-4">
          Have you ever been to a dental specialist?
        </label>
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          {...register("dentalSpecialist")}
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="No">No</option>
          <option value=" Yes"> Yes</option>
          <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
        </select>
        <label className="ml-4">
          Do your gums bleed when you brush or floss?
        </label>
        <select className="w-32 ml-4 mt-4 rounded-xl" {...register("gumBleed")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="No">No</option>
          <option value=" Yes"> Yes</option>
          <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
        </select>
        <label className="ml-4">
          Have you been told to take antibiotics before a dental visit?
        </label>
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          {...register("antibiotics")}
        >
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="No">No</option>
          <option value=" Yes"> Yes</option>
          <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
        </select>
        <label className="ml-4">
          Do you have pain in the jaw or jaw joint?
        </label>
        <select className="w-32 ml-4 mt-4 rounded-xl" {...register("jawPain")}>
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="No">No</option>
          <option value=" Yes"> Yes</option>
          <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
        </select>
        <label>
          <input
            type="checkbox"
            className="ml-4"
            {...register("terms")}
            required
          />
          * I, understand, certify that to the best of my knowledge, the above
          information is correct. I understand that any information that I
          refuse to provide may affect my health and dental treatment.
        </label>{" "}
        <input
          type="datetime-local"
          placeholder="Today's Date"
          className="w-52 ml-4 mt-4 rounded-xl"
          {...register("date")}
        /> */}
        <button className="w-52 ml-4 mt-4 rounded-xl" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPatientForm;
