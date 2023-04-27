import React, { useState, FormEventHandler } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
// import { FormData } from "../types/forms-interface"

interface FormData {
  firstName: string;
  lastName: string;
  preferredName: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  homePhone: string;
  mobilePhone: string;
  workPhone: string;
  ext: string;
  email: string;
  referral: string;
  address: string;
  suite: string;
  city: string;
  province: string;
  postalCode: string;
  subscriber: string;
  subscriberName: string;
  insuranceCompany: string;
  insuranceTel: string;
  planNum: string;
  subscriberId: string;
  emerContact: string;
  emerRelationship: string;
  emerTel: string;
  famDocName: string;
  famDocAddress: string;
  famDocTel: string;
  medCheck: string;
  smoke: string;
  medConditions: string;
  otherMedConditions: string;
  allergies: string;
  otherAllergies: string;
  longTermMeds: string;
  dentalInjection: string;
  immuneSystem: string;
  hospital: string;
  illness: string;
  otherIllness: string;
  pregnant: string;
  visitReason: string;
  lastVisit: string;
  nervous: string;
  lastXray: string;
  dentalSpecialist: string;
  gumBleed: string;
  antibiotics: string;
  jawPain: string;
  terms: string;
  date: string;
}

const Forms: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormData>();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [preferredName, setPreferredName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [homePhone, setHomePhone] = useState<string>("");
  const [mobilePhone, setMobilePhone] = useState<string>("");
  const [workPhone, setWorkPhone] = useState<string>("");
  const [ext, setExt] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [referral, setReferral] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [suite, setSuite] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [subscriber, setSubscriber] = useState<string>("");
  const [subscriberName, setSubscriberName] = useState<string>("");
  const [insuranceCompany, setInsuranceCompany] = useState<string>("");
  const [insuranceTel, setInsuranceTel] = useState<string>("");
  const [planNum, setPlanNum] = useState<string>("");
  const [subscriberId, setSubscriberId] = useState<string>("");
  const [emerContact, setEmerContact] = useState<string>("");
  const [emerRelationship, setEmerRelationship] = useState<string>("");
  const [emerTel, setEmerTel] = useState<string>("");
  const [famDocName, setFamDocName] = useState<string>("");
  const [famDocAddress, setFamDocAddress] = useState<string>("");
  const [famDocTel, setFamDocTel] = useState<string>("");
  const [medCheck, setMedCheck] = useState<string>("");
  const [smoke, setSmoke] = useState<string>("");
  const [medConditions, setMedConditions] = useState<string>("");
  const [otherMedConditions, setOtherMedConditions] = useState<string>("");
  const [allergies, setAllergies] = useState<string>("");
  const [otherAllergies, setOtherAllergies] = useState<string>("");
  const [longTermMeds, setLongTermMeds] = useState<string>("");
  const [dentalInjection, setDentalInjection] = useState<string>("");
  const [immuneSystem, setImmuneSystem] = useState<string>("");
  const [hospital, setHospital] = useState<string>("");
  const [illness, setIllness] = useState<string>("");
  const [otherIllness, setOtherIllness] = useState<string>("");
  const [pregnant, setPregnant] = useState<string>("");
  const [visitReason, setVisitReason] = useState<string>("");
  const [lastVisit, setLastVisit] = useState<string>("");
  const [nervous, setNervous] = useState<string>("");
  const [lastXray, setLastXray] = useState<string>("");
  const [dentalSpecialist, setDentalSpecialist] = useState<string>("");
  const [gumBleed, setGumBleed] = useState<string>("");
  const [antibiotics, setAntibiotics] = useState<string>("");
  const [jawPain, setJawPain] = useState<string>("");
  const [terms, setTerms] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`/api/contact`, {
        firstName,
        lastName,
        preferredName,
        dateOfBirth,
        gender,
        maritalStatus,
        homePhone,
        mobilePhone,
        workPhone,
        ext,
        email,
        referral,
        address,
        suite,
        city,
        province,
        postalCode,
        subscriber,
        subscriberName,
        insuranceCompany,
        insuranceTel,
        planNum,
        subscriberId,
        emerContact,
        emerRelationship,
        emerTel,
        famDocName,
        famDocAddress,
        famDocTel,
        medCheck,
        smoke,
        medConditions,
        otherMedConditions,
        allergies,
        otherAllergies,
        longTermMeds,
        dentalInjection,
        immuneSystem,
        hospital,
        illness,
        otherIllness,
        pregnant,
        visitReason,
        lastVisit,
        nervous,
        lastXray,
        dentalSpecialist,
        gumBleed,
        antibiotics,
        jawPain,
        terms,
        date,
      });

      if (response.status === 200) {
        alert("your message has been sent!");
      } else {
        alert("an error occurred. please try again later");
      }
    } catch (error) {
      console.error(error);
      alert("an error occurred. please try again later!");
    }
  };

  // const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <p>* marked are required fields.</p>
      <label>Personal Information *</label>
      <input
        type="text"
        placeholder="First name *"
        {...register("firstName", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name *"
        {...register("lastName", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Preferred Name"
        {...register("preferredName", {})}
      />
      <input
        type="text"
        placeholder="Date of Birth *"
        {...register("dateOfBirth", { required: true })}
      />
      <label>Gender</label>
      <select {...register("gender")}>
        <option value="" disabled selected hidden>
          Select Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <label>Marital Status</label>
      <select {...register("maritalStatus")}>
        <option value="" disabled selected hidden>
          Select Marital Status
        </option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
        <option value="Widow">Widow</option>
        <option value="Child">Child</option>
      </select>
      <input
        type="tel"
        placeholder="Home Phone"
        {...register("homePhone", {})}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("mobilePhone", { required: true, maxLength: 12 })}
      />
      <input
        type="tel"
        placeholder="Work Phone"
        {...register("workPhone", {})}
      />
      <input type="text" placeholder="Ext" {...register("ext", {})} />
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <label>How did you hear about us? *</label>
      <select {...register("referral")}>
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
      <label>Address *</label>
      <input
        type="text"
        placeholder="Address *"
        {...register("address", { required: true })}
      />
      <input type="number" placeholder="Suite/Unit #" {...register("suite")} />
      <input
        type="text"
        placeholder="City *"
        {...register("city", { required: true })}
      />
      <select {...register("province")}>
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
      <input
        type="text"
        placeholder="Postal Code *"
        {...register("postalCode", { required: true, max: 7, min: 6 })}
      />
      <label>Primary Dental Benefit Plan</label>
      <label>Relationship to Subscriber</label>
      <select {...register("subscriber")}>
        <option value="" disabled selected hidden>
          Relationship
        </option>
        <option value="Self">Self</option>
        <option value="Spouse">Spouse</option>
        <option value="Child">Child</option>
      </select>
      <input
        type="text"
        placeholder="Subscriber Name"
        {...register("subscriberName", {})}
      />
      <input
        type="text"
        placeholder="Insurance Company"
        {...register("insuranceCompany", {})}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        {...register("insuranceTel", {})}
      />
      <input
        type="number"
        placeholder="Plan/Policy Number"
        {...register("planNum", {})}
      />
      <input
        type="number"
        placeholder="Subscriber ID/Certificate #"
        {...register("subscriberId", {})}
      />
      <label>Emergency Contact *</label>
      <input
        type="text"
        placeholder="Name *"
        {...register("emerContact", { required: true })}
      />
      <input
        type="text"
        placeholder="Relationship"
        {...register("emerRelationship", {})}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        {...register("emerTel", {})}
      />
      <label>Medical History</label>
      <input
        type="text"
        placeholder="Family Doctor's Name"
        {...register("famDocName", {})}
      />
      <input
        type="text"
        placeholder="Family Doctor's Address"
        {...register("famDocAddress", {})}
      />
      <input
        type="tel"
        placeholder="Family Doctor's Phone"
        {...register("famDocTel", {})}
      />
      <input
        type="text"
        placeholder="When was your last medical check-up?"
        {...register("medCheck", {})}
      />
      <label>Do you smoke?</label>
      <select {...register("smoke")}>
        <option value="" disabled selected hidden>
          Select
        </option>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
        <option value="Occasionally">Occasionally</option>
      </select>
      <label>
        Are you being treated for or have you had any of the following medical
        conditions?
      </label>
      <label>
        <input
          type="checkbox"
          value="arthritis"
          {...register("medConditions")}
        />
        Arthritis
      </label>
      <label>
        <input
          type="checkbox"
          value="AIDS/HIV"
          {...register("medConditions")}
        />
        AIDS/HIV
      </label>
      <label>
        <input type="checkbox" value="asthma" {...register("medConditions")} />
        Asthma
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="highbloodpressure"
          {...register("medConditions")}
        />
        High Blood Pressure
      </label>{" "}
      <label>
        <input type="checkbox" value="cancer" {...register("medConditions")} />
        Cancer
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="diabetes"
          {...register("medConditions")}
        />
        Diabetes
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="heart-murmur"
          {...register("medConditions")}
        />
        Heart Murmur
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="joint-replacement"
          {...register("medConditions")}
        />
        Joint Replacement
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="psychiatric-treatment"
          {...register("medConditions")}
        />
        Psychiatric Treatment
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="leukemia"
          {...register("medConditions")}
        />
        Leukemia
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="heart-problems"
          {...register("medConditions")}
        />
        Heart Problems
      </label>{" "}
      <label>
        <input type="checkbox" value="stroke" {...register("medConditions")} />
        Stroke
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="kidney-disease"
          {...register("medConditions")}
        />
        Kidney Disease
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="liver-problems"
          {...register("medConditions")}
        />
        Liver Problems
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="sinus-problems"
          {...register("medConditions")}
        />
        Sinus Problems
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="hepatitus-jaudice"
          {...register("medConditions")}
        />
        Hepatitis / Jaundice
      </label>
      <label>
        <input
          type="checkbox"
          value="acid-reflux"
          {...register("medConditions")}
        />
        Acid Reflux
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="gum-disease"
          {...register("medConditions")}
        />
        Gum Disease
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="lung-disease"
          {...register("medConditions")}
        />
        Lung Disease
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="thyroid-problems"
          {...register("medConditions")}
        />
        Thyroid Problems
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="tuberculosis"
          {...register("medConditions")}
        />
        Tuberculosis
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="venereal-disease"
          {...register("medConditions")}
        />
        Venereal Disease
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="pace-maker"
          {...register("medConditions")}
        />
        PaceMaker
      </label>
      <label>
        <input
          type="checkbox"
          value="rheumatic-fever"
          {...register("medConditions")}
        />
        Rheumatic Fever
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="bone-problems"
          {...register("medConditions")}
        />
        Bone Problems
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="have-fainted"
          {...register("medConditions")}
        />
        Have Fainted
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="bleeding-problems"
          {...register("medConditions")}
        />
        Bleeding Problems
      </label>
      <textarea
        placeholder="If you weren't diagnosed but suspect of having a medical condition, please list it here. List any other medical conditions you have."
        {...register("otherMedConditions", {})}
      />
      <label>Are you allergic to any of the following?</label>
      <label>
        <input type="checkbox" value="anesthetic" {...register("allergies")} />
        Anesthetic
      </label>{" "}
      <label>
        <input type="checkbox" value="ibuprofen" {...register("allergies")} />
        Ibuprofen
      </label>{" "}
      <label>
        <input type="checkbox" value="penicilin" {...register("allergies")} />
        Penicilin
      </label>{" "}
      <label>
        <input type="checkbox" value="aspirin" {...register("allergies")} />
        Aspirin
      </label>{" "}
      <label>
        <input type="checkbox" value="iodine" {...register("allergies")} />
        Iodine
      </label>{" "}
      <label>
        <input type="checkbox" value="sulfa-drugs" {...register("allergies")} />
        Sulfa Drugs
      </label>{" "}
      <label>
        <input type="checkbox" value="codeine" {...register("allergies")} />
        Codeine
      </label>{" "}
      <label>
        <input type="checkbox" value="latex" {...register("allergies")} />
        Latex
      </label>
      <textarea
        placeholder="If you are not sure but suspect of having an allergic reaction to something, please specify. List any other allergic reactions you have."
        {...register("otherAllergies", {})}
      />
      <label>
        Have you taken any long term medicaions in the past? Prescription or
        Non-Prescription
      </label>
      <select {...register("longTermMeds")}>
        <option value="" disabled selected hidden>
          Select
        </option>
        <option value="no">No</option>
        <option value="Yes">Yes</option>
      </select>
      <label>
        Have you ever had an adverse reaction to a dental injection?
      </label>
      <select {...register("dentalInjection")}>
        <option value="" disabled selected hidden>
          Select
        </option>
        <option value="no">No</option>
        <option value="Yes">Yes</option>
        <option value="notsure-maybe">Not Sure/Maybe</option>
      </select>
      <label>
        Do you have any conditions that affect your immune system? (e.g.
        leukemia, AIDS, HIV infection, radiotherapy, chemotherapy, etc.)
      </label>
      <select {...register("immuneSystem")}>
        <option value="" disabled selected hidden>
          Select
        </option>
        <option value="no">No</option>
        <option value="Yes">Yes</option>
        <option value="notsure-maybe">Not Sure/Maybe</option>
      </select>
      <label>
        Have you ever been hospitalized for any illnesses or operations?
      </label>
      <select {...register("hospital")}>
        <option value="" disabled selected hidden>
          Select
        </option>
        <option value="no">No</option>
        <option value="Yes">Yes</option>
        <option value="notsure-maybe">Not Sure/Maybe</option>
      </select>
      <label>
        Do you have or have you ever had any of the following? Please check.
      </label>
      <label>
        <input type="checkbox" value="chest-pain" {...register("illness")} />
        Chest Pain, Angina
      </label>
      <label>
        <input type="checkbox" value="heart-attack" {...register("illness")} />
        Heart Attack
      </label>
      <label>
        <input
          type="checkbox"
          value="mitral-valve-propalse"
          {...register("illness")}
        />
        Mitral Valve Prolapse
      </label>
      <label>
        <input
          type="checkbox"
          value="stomach-ulcers"
          {...register("illness")}
        />
        Latex
      </label>
      <label>
        <input
          type="checkbox"
          value="thyroid-disease"
          {...register("illness")}
        />
        Thyroid Disease
      </label>
      <label>
        <input type="checkbox" value="seizures" {...register("illness")} />
        Seizures(Epilepsy)
      </label>
      <label>
        <input
          type="checkbox"
          value="short-of-breathe"
          {...register("illness")}
        />
        Shortness of Breathe
      </label>
      <label>
        <input
          type="checkbox"
          value="steroid-therapy"
          {...register("illness")}
        />
        Steroid Therapy
      </label>
      <label>
        <input type="checkbox" value="osteoporosis" {...register("illness")} />
        Osteoporosis
      </label>
      <label>
        <input
          type="checkbox"
          value="bleeding-problems"
          {...register("illness")}
        />
        Bleeding Problems
      </label>
      <textarea
        placeholder="Have we missed anything that you would like to let us know about?"
        {...register("otherIllness", {})}
      />
      <label>For Women Only: Are you breastfeeding or pregnant?</label>
      <select {...register("pregnant")}>
        <option value="" disabled selected hidden>
          Select
        </option>
        <option value="no">No</option>
        <option value="Yes">Yes</option>
        <option value="notsure-maybe">Not Sure/Maybe</option>
      </select>
      <label>Dental History</label>
      <textarea
        placeholder="What is your reason for visit today?"
        {...register("visitReason", {})}
      />
      <input
        type="text"
        placeholder="When was your last dental visit?"
        {...register("lastVisit", {})}
      />
      <label>Are you nervous during dental visits?</label>
      <select {...register("nervous")}>
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
        {...register("lastXray", {})}
      />
      <label>Have you ever been to a dental specialist?</label>
      <select {...register("dentalSpecialist")}>
        <option value="" disabled selected hidden>
          Select
        </option>
        <option value="No">No</option>
        <option value=" Yes"> Yes</option>
        <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
      </select>
      <label>Do your gums bleed when you brush or floss?</label>
      <select {...register("gumBleed")}>
        <option value="" disabled selected hidden>
          Select
        </option>
        <option value="No">No</option>
        <option value=" Yes"> Yes</option>
        <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
      </select>
      <label>
        Have you been told to take antibiotics before a dental visit?
      </label>
      <select {...register("antibiotics")}>
        <option value="" disabled selected hidden>
          Select
        </option>
        <option value="No">No</option>
        <option value=" Yes"> Yes</option>
        <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
      </select>
      <label>Do you have pain in the jaw or jaw joint?</label>
      <select {...register("jawPain")}>
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
          value="terms"
          {...register("terms", { required: true })}
        />
        * I, understand, certify that to the best of my knowledge, the above
        information is correct. I understand that any information that I refuse
        to provide may affect my health and dental treatment.
      </label>{" "}
      <input
        type="datetime-local"
        placeholder="Today's Date"
        {...register("date", { required: true })}
      />
      <input type="submit" />
    </form>
  );
};

export default Forms;
