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
  frontFile: null,
  backFile: null,
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
      console.log(result.message);
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
            id="firstName"
            name="First Name"
            placeholder="First name *"
            className="ml-4 rounded-xl"
          />
          <input
            type="text"
            id="lastName"
            name="Last Name"
            placeholder="Last name *"
            className="ml-4 rounded-xl"
          />
        </div>
        <div>
          <input
            type="text"
            id="name"
            name="Preferred Name"
            placeholder="Preferred Name"
            className="ml-4 rounded-xl"
          />
          <input
            type="text"
            id="dateOfBirth"
            name="Date Of Birth"
            placeholder="Date of Birth *"
            className="ml-4 mt-4 rounded-xl"
            required
          />
        </div>
        <label className="ml-4">Gender</label>
        <select
          id="gender"
          name="Gender"
          className="ml-4 w-40 h-8 py-1 rounded-xl"
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
          id="maritalStatus"
          name="Marital Status"
          className="ml-4 w-40 h-8 py-1 rounded-xl"
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
            id="homePhone"
            name="Home Phone"
            className="ml-4 mt-4 rounded-xl"
          />
          <input
            type="text"
            placeholder="Mobile number"
            id="mobilePhone"
            name="Mobile Phone"
            className="ml-4 mt-4 rounded-xl"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Work Phone"
            id="workPhone"
            name="Work Phone"
            className="ml-4 mt-4 rounded-xl"
          />
          <input
            type="text"
            placeholder="Ext"
            id="ext"
            name="ext"
            className="ml-4 mt-4 rounded-xl"
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="Email"
          className="w-52  ml-4 mt-4 rounded-xl"
          //
        />
        <label className="ml-4">How did you hear about us? *</label>
        <select
          id="referral"
          name="referral"
          className="w-32 ml-4 rounded-xl"
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
            id="address"
            name="Address"
            className="ml-4 mt-4 rounded-xl"
            required
          />
          <input
            type="text"
            placeholder="Suite/Unit #"
            id="suite"
            name="Suite #"
            className="ml-4 mt-4 rounded-xl"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="City *"
            id="city"
            name="City"
            className="ml-4 mt-4 rounded-xl"
            required
          />
          <select
            id="province"
            name="Province"
            className="ml-4 mt-4 rounded-xl"
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
          id="postalCode"
          name="Postal Code"
          className="w-32 ml-4 mt-4 rounded-xl"
          required
        />
        <label className="ml-4">Primary Dental Benefit Plan</label>
        <label className="ml-4">Relationship to Subscriber</label>
        <select
          id="subscriber"
          name="Subscriber"
          className="w-36 ml-4 mt-4 rounded-xl"
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
            id="subscriberName"
            name="Subscriber Name"
            className="ml-4 mt-4 rounded-xl"
          />
          <input
            type="text"
            placeholder="Insurance Company"
            id="insuranceCompany"
            name="Insurance Company"
            className="ml-4 mt-4 rounded-xl"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            id="insuranceTel"
            name="Insurance Phone"
            className="ml-4 mt-4 rounded-xl"
          />
          <input
            type="text"
            placeholder="Plan/Policy Number"
            id="planNum"
            name="Plan Number"
            className="ml-4 mt-4 rounded-xl"
          />
        </div>
        <input
          type="text"
          placeholder="Subscriber ID/Certificate #"
          id="subscriberId"
          name="Subscriber ID"
          className="w-52 ml-4 mt-4 rounded-xl"
        />
        <label className="ml-4">Emergency Contact *</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Name *"
            id="emerContact"
            name="Emergency Contact Name"
            className="ml-4 mt-4 rounded-xl"
            required
          />
          <input
            type="text"
            placeholder="Relationship"
            id="emerRelationship"
            name="Emergency Relationship"
            className="ml-4 mt-4 rounded-xl"
          />
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          id="emerTel"
          name="Emergency Phone"
          className="w-36 ml-4 mt-4 rounded-xl"
        />
        <label className="ml-4">Medical History</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Family Doctor's Name"
            id="famDocName"
            name="Family Doctor Name"
            className="ml-4 mt-4 rounded-xl"
          />
          <input
            type="text"
            placeholder="Family Doctor's Address"
            id="famDocAddress"
            name="Family Doctor Address"
            className="ml-4 mt-4 rounded-xl"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Family Doctor's Phone"
            id="famDocTel"
            name="Family Doctor Phone"
            className="ml-4 mt-4 rounded-xl"
          />
          <input
            type="text"
            placeholder="When was your last medical check-up?"
            id="medCheck"
            name="Last Medical Check"
            className="ml-4 mt-4 rounded-xl"
          />
        </div>
        <label className="ml-4">Do you smoke?</label>
        <select
          id="smoke"
          name="Do you smoke?"
          className="w-32 ml-4 mt-4 rounded-xl"
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
              name="Medical Conditions"
              id="medConditions"
            />
            Arthritis
          </label>
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            AIDS/HIV
          </label>
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Asthma
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            High Blood Pressure
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Cancer
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Diabetes
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Heart Murmur
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Joint Replacement
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Psychiatric Treatment
          </label>{" "}
        </div>
        <div className="ml-4">
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Leukemia
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Heart Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Stroke
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Kidney Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Liver Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Sinus Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Hepatitis / Jaundice
          </label>
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Acid Reflux
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Gum Disease
          </label>{" "}
        </div>
        <div className="ml-4">
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Lung Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Thyroid Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Tuberculosis
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Venereal Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            PaceMaker
          </label>
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Rheumatic Fever
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Bone Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Have Fainted
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
            />
            Bleeding Problems
          </label>
        </div>
        <textarea
          className="ml-4 mt-4 rounded-xl"
          placeholder="If you weren't diagnosed but suspect of having a medical condition, please list it here. List any other medical conditions you have."
          id="otherMedConditions"
          name="Other Medical Conditions"
        />
        <label className="ml-4">
          Are you allergic to any of the following?
        </label>
        <div className="flex flex-row ml-4">
          <label>
            <input type="checkbox" id="allergies" name="allergies" />
            Anesthetic
          </label>{" "}
          <label>
            <input type="checkbox" id="allergies" name="allergies" />
            Ibuprofen
          </label>{" "}
          <label>
            <input type="checkbox" id="allergies" name="allergies" />
            Penicilin
          </label>{" "}
          <label>
            <input type="checkbox" id="allergies" name="allergies" />
            Aspirin
          </label>{" "}
        </div>
        <div className="ml-4">
          <label>
            <input type="checkbox" id="allergies" name="allergies" />
            Iodine
          </label>{" "}
          <label>
            <input type="checkbox" id="allergies" name="allergies" />
            Sulfa Drugs
          </label>{" "}
          <label>
            <input type="checkbox" id="allergies" name="allergies" />
            Codeine
          </label>{" "}
          <label>
            <input type="checkbox" id="allergies" name="allergies" />
            Latex
          </label>
        </div>
        <textarea
          className="ml-4 mt-4 rounded-xl"
          placeholder="If you are not sure but suspect of having an allergic reaction to something, please specify. List any other allergic reactions you have."
          id="otherAllergies"
          name="other allergies"
        />
        <label className="ml-4">
          Have you taken any long term medicaions in the past? Prescription or
          Non-Prescription
        </label>
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          id="longTermMeds"
          name="long term meds"
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
          id="dentalInjection"
          name="dental injection"
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
          id="immuneSystem"
          name="immune system"
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
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          id="hospital"
          name="hospital"
        >
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
            <input type="checkbox" id="illness" name="illness" />
            Chest Pain, Angina
          </label>
          <label>
            <input type="checkbox" id="illness" name="illness" />
            Heart Attack
          </label>
          <label>
            <input type="checkbox" name="illness" id="illness" />
            Mitral Valve Prolapse
          </label>
          <label>
            <input type="checkbox" name="illness" id="illness" />
            Latex
          </label>
          <label>
            <input type="checkbox" name="illness" id="illness" />
            Thyroid Disease
          </label>
        </div>
        <div className="ml-4">
          <label>
            <input type="checkbox" name="illness" id="illness" />
            Seizures(Epilepsy)
          </label>
          <label>
            <input type="checkbox" name="illness" id="illness" />
            Shortness of Breathe
          </label>
          <label>
            <input type="checkbox" name="illness" id="illness" />
            Steroid Therapy
          </label>
          <label>
            <input type="checkbox" name="illness" id="illness" />
            Osteoporosis
          </label>
          <label>
            <input type="checkbox" name="illness" id="illness" />
            Bleeding Problems
          </label>
        </div>
        <textarea
          className="ml-4 rounded-xl"
          placeholder="Have we missed anything that you would like to let us know about?"
          id="otherIllness"
          name="other illness"
        />
        <label className="ml-4">
          For Women Only: Are you breastfeeding or pregnant?
        </label>
        <select
          id="pregnant"
          name="pregnant"
          className="w-32 ml-4 mt-4 rounded-xl"
        >
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
          id="visitReason"
          name="visit reason"
        />
        <input
          type="text"
          placeholder="When was your last dental visit?"
          id="lastVisit"
          name="last visit"
          className="w-64 ml-4 mt-4 rounded-xl"
        />
        <label className="ml-4">Are you nervous during dental visits?</label>
        <select
          id="nervous"
          name="nervous"
          className="w-32 ml-4 mt-4 rounded-xl"
        >
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
          id="lastXray"
          name="last xray"
        />
        <label className="ml-4">
          Have you ever been to a dental specialist?
        </label>
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          id="dentalSpecialist"
          name="dental specialist"
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
        <select
          id="gumBleed"
          name="gum bleed"
          className="w-32 ml-4 mt-4 rounded-xl"
        >
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
          id="antibiotics"
          name="antibiotics"
          className="w-32 ml-4 mt-4 rounded-xl"
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
        <select
          id="jawPain"
          name="jaw pain"
          className="w-32 ml-4 mt-4 rounded-xl"
        >
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
            name="terms"
            id="terms"
            className="ml-4"
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
          id="date"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPatientForm;
