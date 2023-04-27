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
      <label>Personal Information</label>
      <input
        type="text"
        placeholder="First name"
        {...register("firstName", { required: true, maxLength: 80 })}
      />

      <input
        type="text"
        placeholder="Last name"
        {...register("lastName", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Preferred Name"
        {...register("preferredName", {})}
      />
      <input
        type="text"
        placeholder="Date of Birth"
        {...register("dateOfBirth", { required: true })}
      />
      <select {...register("gender")}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <select {...register("maritalStatus")}>
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

      <select {...register("referral")}>
        <option value="Search Engine/Social Media">
          Search Engine/Social Media
        </option>
        <option value="Map">Map</option>
        <option value="Our Existing Patient">Our Existing Patient</option>
        <option value="Newspaper/Flyer">Newspaper/Flyer</option>
        <option value="Other">Other</option>
      </select>

      <label>Address</label>
      <input
        type="text"
        placeholder="Address"
        {...register("address", { required: true })}
      />
      <input
        type="number"
        placeholder="Suite/Unit #"
        {...register("suite", { required: true })}
      />
      <input
        type="text"
        placeholder="City"
        {...register("city", { required: true })}
      />

      <select {...register("province")}>
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
        placeholder="Postal Code"
        {...register("postalCode", { required: true, max: 7, min: 6 })}
      />
      <label>Primary Dental Benefit Plan</label>
      <select {...register("subscriber")}>
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
      <label>Emergency Contact</label>
      <input
        type="text"
        placeholder="Emergency Contact"
        {...register("emerContact", { required: true })}
      />
      <input
        type="text"
        placeholder="Relationship"
        {...register("emerRelationship", {})}
      />

      <input
        type="tel"
        placeholder="Emergency Phone Number"
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
        <option value="No">No</option>
        <option value="Yes">Yes</option>
        <option value="Occasionally">Occasionally</option>
      </select>
      <label>
        Are you being treated for or have you had any of the following medical
        conditions?
      </label>
      <select {...register("medConditions")}>
        <option value="Arthritis">Arthritis</option>
        <option value=" AIDS/HIV"> AIDS/HIV</option>
        <option value=" Asthma"> Asthma</option>
        <option value=" High Blood Pressure"> High Blood Pressure</option>
        <option value=" Cancer"> Cancer</option>
        <option value=" Diabetes"> Diabetes</option>
        <option value=" Heart Murmur"> Heart Murmur</option>
        <option value=" Joint Replacement"> Joint Replacement</option>
        <option value=" Psychiatric treatment"> Psychiatric treatment</option>
        <option value=" Leukaemia"> Leukaemia</option>
        <option value=" Heart Problems"> Heart Problems</option>
        <option value=" Stroke"> Stroke</option>
        <option value=" Kidney Disease"> Kidney Disease</option>
        <option value=" Liver Problems"> Liver Problems</option>
        <option value=" Sinus Problems"> Sinus Problems</option>
        <option value=" Hepatitis/Jaundice"> Hepatitis/Jaundice</option>
        <option value=" Acid Reflux"> Acid Reflux</option>
        <option value=" Gum Disease"> Gum Disease</option>
        <option value=" Lung Disease"> Lung Disease</option>
        <option value=" Thyroid Problems"> Thyroid Problems</option>
        <option value=" Tuberculosis"> Tuberculosis</option>
        <option value=" Venereal Disease"> Venereal Disease</option>
        <option value=" PaceMaker"> PaceMaker</option>
        <option value=" Rheumatic Fever"> Rheumatic Fever</option>
        <option value=" Bone Problems"> Bone Problems</option>
        <option value=" Have Fainted"> Have Fainted</option>
        <option value=" Bleeding Problems "> Bleeding Problems </option>
      </select>
      <textarea {...register("otherMedConditions", {})} />
      <label>Are you allergic to any of the following?</label>
      <select {...register("allergies")}>
        <option value="Anesthetic">Anesthetic</option>
        <option value=" Ibuprofen"> Ibuprofen</option>
        <option value=" Penicillin"> Penicillin</option>
        <option value=" Aspirin"> Aspirin</option>
        <option value=" Iodine"> Iodine</option>
        <option value=" Sulfa Drugs"> Sulfa Drugs</option>
        <option value=" Codeine"> Codeine</option>
        <option value=" Latex"> Latex</option>
      </select>
      <textarea {...register("otherAllergies", {})} />

      <input
        {...register("longTermMeds", { required: true })}
        type="radio"
        value="No"
      />
      <input
        {...register("longTermMeds", { required: true })}
        type="radio"
        value="Yes"
      />

      <input {...register("dentalInjection")} type="radio" value="No" />
      <input {...register("dentalInjection")} type="radio" value="Yes" />
      <input
        {...register("dentalInjection")}
        type="radio"
        value="Not Sure/Maybe"
      />

      <input {...register("immuneSystem")} type="radio" value="No" />
      <input {...register("immuneSystem")} type="radio" value="Yes" />
      <input
        {...register("immuneSystem")}
        type="radio"
        value="Not Sure/Maybe"
      />

      <input {...register("hospital")} type="radio" value="No" />
      <input {...register("hospital")} type="radio" value="Yes" />
      <input {...register("hospital")} type="radio" value="Not Sure/Maybe" />
      <select {...register("illness")}>
        <option value="Chest Pain">Chest Pain</option>
        <option value=" Angina Heart Attack"> Angina Heart Attack</option>
        <option value=" Mitral Valve Prolapse"> Mitral Valve Prolapse</option>
        <option value=" Stomach Ulcers"> Stomach Ulcers</option>
        <option value=" Thyroid Disease"> Thyroid Disease</option>
        <option value=" Seizures (Epilepsy)"> Seizures (Epilepsy)</option>
        <option value=" Shortness of Breath"> Shortness of Breath</option>
        <option value=" Steroid Therapy"> Steroid Therapy</option>
        <option value=" Osteoporosis"> Osteoporosis</option>
        <option value=" Bleeding Problems"> Bleeding Problems</option>
      </select>
      <textarea {...register("otherIllness", {})} />

      <input {...register("pregnant")} type="radio" value="No" />
      <input {...register("pregnant")} type="radio" value="Yes" />
      <input {...register("pregnant")} type="radio" value="Not Sure/Maybe" />
      <textarea {...register("visitReason", {})} />
      <input
        type="text"
        placeholder="When was your last dental visit?"
        {...register("lastVisit", {})}
      />

      <input {...register("nervous")} type="radio" value="No" />
      <input {...register("nervous")} type="radio" value="Slightly" />
      <input {...register("nervous")} type="radio" value="Somewhat" />
      <input {...register("nervous")} type="radio" value="Extremely" />
      <input
        type="text"
        placeholder="When was your last dental x-ray?"
        {...register("lastXray", {})}
      />
      <select {...register("dentalSpecialist")}>
        <option value="No">No</option>
        <option value=" Yes"> Yes</option>
        <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
      </select>

      <input {...register("gumBleed")} type="radio" value="No" />
      <input {...register("gumBleed")} type="radio" value="Yes" />
      <input {...register("gumBleed")} type="radio" value="Not Sure/Maybe" />

      <input {...register("antibiotics")} type="radio" value="No" />
      <input {...register("antibiotics")} type="radio" value="Yes" />
      <input {...register("antibiotics")} type="radio" value="Not Sure/Maybe" />

      <input {...register("jawPain")} type="radio" value="No" />
      <input {...register("jawPain")} type="radio" value="Yes" />
      <input {...register("jawPain")} type="radio" value="Not Sure/Maybe" />
      <input
        type="checkbox"
        placeholder="I, understand, certify that to the best of my knowledge, the above information is correct. I understand that any information that I refuse to provide may affect my health and dental treatment."
        {...register("terms", { required: true })}
      />
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
