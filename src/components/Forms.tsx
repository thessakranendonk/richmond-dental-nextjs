import React, { useState, FormEvent, FormEventHandler } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import DataForm from "form-data";
import { useForm, ValidationError } from "@formspree/react";
// import nodemailer from "nodemailer";

interface FormState {
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

const initialFormState: FormState = {
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

const Forms: React.FC = () => {
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm<FormState>();
  // const [formState, setFormState] = useState<FormState>(initialFormState);
  const [state, handleSubmit] = useForm("xgebdegb");
  if (state.succeeded) {
    return <p>Thanks for submitting!</p>;
  }

  // const handleChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //   >
  // ) => {
  //   const { name, value } = e.target;
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleChange = (
  //   e: React.ChangeEvent<
  //     HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
  //   >
  // ) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const transporter = nodemailer.createTransport({
  //     host: "smtp.example.com",
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: "felix.lai@hotmail.com",
  //       pass: "998157827Ruffles",
  //     },
  //     tls: {
  //       rejectUnauthorized: false,
  //     },
  //   });

  //   const mailOptions = {
  //     from: formData.email,
  //     to: "felix.lai@hotmail.com",
  //     subject: `Message from ${formData.firstName} ${formData.lastName}`,
  //     text: formData.firstName,
  //   };

  //   await transporter.sendMail(mailOptions);

  //   setFormData(initialFormState);
  // };

  // const [firstName, setFirstName] = useState<string>("");
  // const [lastName, setLastName] = useState<string>("");
  // const [preferredName, setPreferredName] = useState<string>("");
  // const [dateOfBirth, setDateOfBirth] = useState<string>("");
  // const [gender, setGender] = useState<string>("");
  // const [maritalStatus, setMaritalStatus] = useState<string>("");
  // const [homePhone, setHomePhone] = useState<string>("");
  // const [mobilePhone, setMobilePhone] = useState<string>("");
  // const [workPhone, setWorkPhone] = useState<string>("");
  // const [ext, setExt] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [referral, setReferral] = useState<string>("");
  // const [address, setAddress] = useState<string>("");
  // const [suite, setSuite] = useState<string>("");
  // const [city, setCity] = useState<string>("");
  // const [province, setProvince] = useState<string>("");
  // const [postalCode, setPostalCode] = useState<string>("");
  // const [subscriber, setSubscriber] = useState<string>("");
  // const [subscriberName, setSubscriberName] = useState<string>("");
  // const [insuranceCompany, setInsuranceCompany] = useState<string>("");
  // const [insuranceTel, setInsuranceTel] = useState<string>("");
  // const [planNum, setPlanNum] = useState<string>("");
  // const [subscriberId, setSubscriberId] = useState<string>("");
  // const [emerContact, setEmerContact] = useState<string>("");
  // const [emerRelationship, setEmerRelationship] = useState<string>("");
  // const [emerTel, setEmerTel] = useState<string>("");
  // const [famDocName, setFamDocName] = useState<string>("");
  // const [famDocAddress, setFamDocAddress] = useState<string>("");
  // const [famDocTel, setFamDocTel] = useState<string>("");
  // const [medCheck, setMedCheck] = useState<string>("");
  // const [smoke, setSmoke] = useState<string>("");
  // const [medConditions, setMedConditions] = useState<string>("");
  // const [otherMedConditions, setOtherMedConditions] = useState<string>("");
  // const [allergies, setAllergies] = useState<string>("");
  // const [otherAllergies, setOtherAllergies] = useState<string>("");
  // const [longTermMeds, setLongTermMeds] = useState<string>("");
  // const [dentalInjection, setDentalInjection] = useState<string>("");
  // const [immuneSystem, setImmuneSystem] = useState<string>("");
  // const [hospital, setHospital] = useState<string>("");
  // const [illness, setIllness] = useState<string>("");
  // const [otherIllness, setOtherIllness] = useState<string>("");
  // const [pregnant, setPregnant] = useState<string>("");
  // const [visitReason, setVisitReason] = useState<string>("");
  // const [lastVisit, setLastVisit] = useState<string>("");
  // const [nervous, setNervous] = useState<string>("");
  // const [lastXray, setLastXray] = useState<string>("");
  // const [dentalSpecialist, setDentalSpecialist] = useState<string>("");
  // const [gumBleed, setGumBleed] = useState<string>("");
  // const [antibiotics, setAntibiotics] = useState<string>("");
  // const [jawPain, setJawPain] = useState<string>("");
  // const [terms, setTerms] = useState<string>("");
  // const [date, setDate] = useState<string>("");

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const dataForm = new DataForm();
  //   dataForm.append("pdf", pdfFile);
  //   dataForm.append("recipient_email", recipientEmail);
  //   dataForm.append("sender_email", senderEmail);
  //   dataForm.append("subject", subject);
  //   dataForm.append("firstName", firstName);
  //   dataForm.append("lastName", lastName);
  //   dataForm.append("preferredName", preferredName);
  //   dataForm.append("dateOfBirth", dateOfBirth);
  //   dataForm.append("gender", gender);
  //   dataForm.append("maritalStatus", maritalStatus);
  //   dataForm.append("homePhone", homePhone);
  //   dataForm.append("mobilePhone", mobilePhone);
  //   dataForm.append("workPhone", workPhone);
  //   dataForm.append("ext", ext);
  //   dataForm.append("email", email);
  //   dataForm.append("referral", referral);
  //   dataForm.append("address", address);
  //   dataForm.append("suite", suite);
  //   dataForm.append("city", city);
  //   dataForm.append("province", province);
  //   dataForm.append("postalCode", postalCode);
  //   dataForm.append("subscriber", subscriber);
  //   dataForm.append("subscriberName", subscriberName);
  //   dataForm.append("insuranceCompany", insuranceCompany);
  //   dataForm.append("insuranceTel", insuranceTel);
  //   dataForm.append("planNum", planNum);
  //   dataForm.append("subscriberId", subscriberId);
  //   dataForm.append("emerContact", emerContact);
  //   dataForm.append("emerRelationship", emerRelationship);
  //   dataForm.append("emerTel", emerTel);
  //   dataForm.append("famDocName", famDocName);
  //   dataForm.append("famDocAddress", famDocAddress);
  //   dataForm.append("famDocTel", famDocTel);
  //   dataForm.append("medCheck", medCheck);
  //   dataForm.append("smoke", smoke);
  //   dataForm.append("medConditions", medConditions);
  //   dataForm.append("otherMedConditions", otherMedConditions);
  //   dataForm.append("allergies", allergies);
  //   dataForm.append("otherAllergies", otherAllergies);
  //   dataForm.append("longTermMeds", longTermMeds);
  //   dataForm.append("dentalInjection", dentalInjection);
  //   dataForm.append("immuneSystem", immuneSystem);
  //   dataForm.append("hospital", hospital);
  //   dataForm.append("illness", illness);
  //   dataForm.append("otherIllness", otherIllness);
  //   dataForm.append("pregnant", pregnant);
  //   dataForm.append("visitReason", visitReason);
  //   dataForm.append("lastVisit", lastVisit);
  //   dataForm.append("nervous", nervous);
  //   dataForm.append("lastXray", lastXray);
  //   dataForm.append("dentalSpecialist", dentalSpecialist);
  //   dataForm.append("gumBleed", gumBleed);
  //   dataForm.append("antibiotics", antibiotics);
  //   dataForm.append("jawPain", jawPain);
  //   dataForm.append("terms", terms);
  //   dataForm.append("date", date);

  //   try {
  //     const response = await axios.post<FormData>(
  //       "https://api.emailservice.com/send-pdf",
  //       dataForm,
  //       {
  //         headers: {
  //           ...dataForm.getHeaders(),
  //           Authorization: `Bearer ${process.env.API_KEY}`,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     setPdfFile(e.target.result as string);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post(`/api/contact`, {
  //       firstName,
  //       lastName,
  //       preferredName,
  //       dateOfBirth,
  //       gender,
  //       maritalStatus,
  //       homePhone,
  //       mobilePhone,
  //       workPhone,
  //       ext,
  //       email,
  //       referral,
  //       address,
  //       suite,
  //       city,
  //       province,
  //       postalCode,
  //       subscriber,
  //       subscriberName,
  //       insuranceCompany,
  //       insuranceTel,
  //       planNum,
  //       subscriberId,
  //       emerContact,
  //       emerRelationship,
  //       emerTel,
  //       famDocName,
  //       famDocAddress,
  //       famDocTel,
  //       medCheck,
  //       smoke,
  //       medConditions,
  //       otherMedConditions,
  //       allergies,
  //       otherAllergies,
  //       longTermMeds,
  //       dentalInjection,
  //       immuneSystem,
  //       hospital,
  //       illness,
  //       otherIllness,
  //       pregnant,
  //       visitReason,
  //       lastVisit,
  //       nervous,
  //       lastXray,
  //       dentalSpecialist,
  //       gumBleed,
  //       antibiotics,
  //       jawPain,
  //       terms,
  //       date,
  //     });

  //     if (response.status === 200) {
  //       alert("your message has been sent!");
  //     } else {
  //       alert("an error occurred. please try again later");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("an error occurred. please try again later!");
  //   }
  // };

  // const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formData: FormData) => {
  //   e.preventDefault();
  //   await handleSubmit({
  //     firstName,
  //     lastName,
  //     preferredName,
  //     dateOfBirth,
  //     gender,
  //     maritalStatus,
  //     homePhone,
  //     mobilePhone,
  //     workPhone,
  //     ext,
  //     email,
  //     referral,
  //     address,
  //     suite,
  //     city,
  //     province,
  //     postalCode,
  //     subscriber,
  //     subscriberName,
  //     insuranceCompany,
  //     insuranceTel,
  //     planNum,
  //     subscriberId,
  //     emerContact,
  //     emerRelationship,
  //     emerTel,
  //     famDocName,
  //     famDocAddress,
  //     famDocTel,
  //     medCheck,
  //     smoke,
  //     medConditions,
  //     otherMedConditions,
  //     allergies,
  //     otherAllergies,
  //     longTermMeds,
  //     dentalInjection,
  //     immuneSystem,
  //     hospital,
  //     illness,
  //     otherIllness,
  //     pregnant,
  //     visitReason,
  //     lastVisit,
  //     nervous,
  //     lastXray,
  //     dentalSpecialist,
  //     gumBleed,
  //     antibiotics,
  //     jawPain,
  //     terms,
  //     date,
  //   });
  //   setFirstName("");
  //   setLastName("");
  //   setPreferredName("");
  //   setDateOfBirth("");
  //   setGender("");
  //   setMaritalStatus("");
  //   setHomePhone("");
  //   setMobilePhone("");
  //   setWorkPhone("");
  //   setExt("");
  //   setEmail("");
  //   setReferral("");
  //   setAddress("");
  //   setSuite("");
  //   setCity("");
  //   setProvince("");
  //   setPostalCode("");
  //   setSubscriber("");
  //   setSubscriberName("");
  //   setInsuranceCompany("");
  //   setInsuranceTel("");
  //   setPlanNum("");
  //   setSubscriberId("");
  //   setEmerContact("");
  //   setEmerRelationship("");
  //   setEmerTel("");
  //   setFamDocName("");
  //   setFamDocAddress("");
  //   setFamDocTel("");
  //   setMedCheck("");
  //   setSmoke("");
  //   setMedConditions("");
  //   setOtherMedConditions("");
  //   setAllergies("");
  //   setOtherAllergies("");
  //   setLongTermMeds("");
  //   setDentalInjection("");
  //   setImmuneSystem("");
  //   setHospital("");
  //   setIllness("");
  //   setOtherIllness("");
  //   setPregnant("");
  //   setVisitReason("");
  //   setLastVisit("");
  //   setNervous("");
  //   setLastXray("");
  //   setDentalSpecialist("");
  //   setGumBleed("");
  //   setAntibiotics("");
  //   setJawPain("");
  //   setTerms("");
  //   setDate("");
  // };

  return (
    <div className="flex justify-start ml-4">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <p>* marked are required fields.</p>
        <label className="ml-4">Personal Information *</label>
        <div className="flex flex-row">
          <input
            type="text"
            id="firstName"
            name="First Name"
            placeholder="First name *"
            className="ml-4 rounded-xl"
            onSubmit={handleSubmit}
            required
          />
          <input
            type="text"
            id="lastName"
            name="Last Name"
            placeholder="Last name *"
            className="ml-4 rounded-xl"
            onSubmit={handleSubmit}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="name"
            name="Preferred Name"
            placeholder="Preferred Name"
            className="ml-4 rounded-xl"
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            id="dateOfBirth"
            name="Date Of Birth"
            placeholder="Date of Birth *"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
            required
          />
        </div>
        <label className="ml-4">Gender</label>
        <select
          id="gender"
          name="Gender"
          className="ml-4 w-40 h-8 py-1 rounded-xl"
          onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
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
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            placeholder="Mobile number"
            id="mobilePhone"
            name="Mobile Phone"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Work Phone"
            id="workPhone"
            name="Work Phone"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            placeholder="Ext"
            id="ext"
            name="ext"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="Email"
          className="w-52  ml-4 mt-4 rounded-xl"
          onSubmit={handleSubmit}
        />
        <label className="ml-4">How did you hear about us? *</label>
        <select
          id="referral"
          name="referral"
          className="w-32 ml-4 rounded-xl"
          onSubmit={handleSubmit}
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
            onSubmit={handleSubmit}
            required
          />
          <input
            type="text"
            placeholder="Suite/Unit #"
            id="suite"
            name="Suite #"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="City *"
            id="city"
            name="City"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
            required
          />
          <select
            id="province"
            name="Province"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
          required
        />
        <label className="ml-4">Primary Dental Benefit Plan</label>
        <label className="ml-4">Relationship to Subscriber</label>
        <select
          id="subscriber"
          name="Subscriber"
          className="w-36 ml-4 mt-4 rounded-xl"
          onSubmit={handleSubmit}
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
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            placeholder="Insurance Company"
            id="insuranceCompany"
            name="Insurance Company"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            id="insuranceTel"
            name="Insurance Phone"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            placeholder="Plan/Policy Number"
            id="planNum"
            name="Plan Number"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
        </div>
        <input
          type="text"
          placeholder="Subscriber ID/Certificate #"
          id="subscriberId"
          name="Subscriber ID"
          className="w-52 ml-4 mt-4 rounded-xl"
          onSubmit={handleSubmit}
        />
        <label className="ml-4">Emergency Contact *</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Name *"
            id="emerContact"
            name="Emergency Contact Name"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
            required
          />
          <input
            type="text"
            placeholder="Relationship"
            id="emerRelationship"
            name="Emergency Relationship"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          id="emerTel"
          name="Emergency Phone"
          className="w-36 ml-4 mt-4 rounded-xl"
          onSubmit={handleSubmit}
        />
        <label className="ml-4">Medical History</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Family Doctor's Name"
            id="famDocName"
            name="Family Doctor Name"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            placeholder="Family Doctor's Address"
            id="famDocAddress"
            name="Family Doctor Address"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Family Doctor's Phone"
            id="famDocTel"
            name="Family Doctor Phone"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            placeholder="When was your last medical check-up?"
            id="medCheck"
            name="Last Medical Check"
            className="ml-4 mt-4 rounded-xl"
            onSubmit={handleSubmit}
          />
        </div>
        <label className="ml-4">Do you smoke?</label>
        <select
          id="smoke"
          name="Do you smoke?"
          className="w-32 ml-4 mt-4 rounded-xl"
          onSubmit={handleSubmit}
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
              onSubmit={handleSubmit}
            />
            Arthritis
          </label>
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            AIDS/HIV
          </label>
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Asthma
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            High Blood Pressure
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Cancer
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Diabetes
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Heart Murmur
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Joint Replacement
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
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
              onSubmit={handleSubmit}
            />
            Leukemia
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Heart Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Stroke
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Kidney Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Liver Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Sinus Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Hepatitis / Jaundice
          </label>
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Acid Reflux
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
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
              onSubmit={handleSubmit}
            />
            Lung Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Thyroid Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Tuberculosis
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Venereal Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            PaceMaker
          </label>
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Rheumatic Fever
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Bone Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Have Fainted
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="medConditions"
              name="Medical Conditions"
              onSubmit={handleSubmit}
            />
            Bleeding Problems
          </label>
        </div>
        <textarea
          className="ml-4 mt-4 rounded-xl"
          placeholder="If you weren't diagnosed but suspect of having a medical condition, please list it here. List any other medical conditions you have."
          id="otherMedConditions"
          name="Other Medical Conditions"
          onSubmit={handleSubmit}
        />
        <label className="ml-4">
          Are you allergic to any of the following?
        </label>
        <div className="flex flex-row ml-4">
          <label>
            <input
              type="checkbox"
              id="allergies"
              name="allergies"
              onSubmit={handleSubmit}
            />
            Anesthetic
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="allergies"
              name="allergies"
              onSubmit={handleSubmit}
            />
            Ibuprofen
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="allergies"
              name="allergies"
              onSubmit={handleSubmit}
            />
            Penicilin
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="allergies"
              name="allergies"
              onSubmit={handleSubmit}
            />
            Aspirin
          </label>{" "}
        </div>
        <div className="ml-4">
          <label>
            <input
              type="checkbox"
              id="allergies"
              name="allergies"
              onSubmit={handleSubmit}
            />
            Iodine
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="allergies"
              name="allergies"
              onSubmit={handleSubmit}
            />
            Sulfa Drugs
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="allergies"
              name="allergies"
              onSubmit={handleSubmit}
            />
            Codeine
          </label>{" "}
          <label>
            <input
              type="checkbox"
              id="allergies"
              name="allergies"
              onSubmit={handleSubmit}
            />
            Latex
          </label>
        </div>
        <textarea
          className="ml-4 mt-4 rounded-xl"
          placeholder="If you are not sure but suspect of having an allergic reaction to something, please specify. List any other allergic reactions you have."
          id="otherAllergies"
          name="other allergies"
          onSubmit={handleSubmit}
        />
        <label className="ml-4">
          Have you taken any long term medicaions in the past? Prescription or
          Non-Prescription
        </label>
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          id="longTermMeds"
          name="long term meds"
          onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
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
            <input
              type="checkbox"
              id="illness"
              name="illness"
              onSubmit={handleSubmit}
            />
            Chest Pain, Angina
          </label>
          <label>
            <input
              type="checkbox"
              id="illness"
              name="illness"
              onSubmit={handleSubmit}
            />
            Heart Attack
          </label>
          <label>
            <input
              type="checkbox"
              name="illness"
              id="illness"
              onSubmit={handleSubmit}
            />
            Mitral Valve Prolapse
          </label>
          <label>
            <input
              type="checkbox"
              name="illness"
              id="illness"
              onSubmit={handleSubmit}
            />
            Latex
          </label>
          <label>
            <input
              type="checkbox"
              name="illness"
              id="illness"
              onSubmit={handleSubmit}
            />
            Thyroid Disease
          </label>
        </div>
        <div className="ml-4">
          <label>
            <input
              type="checkbox"
              name="illness"
              id="illness"
              onSubmit={handleSubmit}
            />
            Seizures(Epilepsy)
          </label>
          <label>
            <input
              type="checkbox"
              name="illness"
              id="illness"
              onSubmit={handleSubmit}
            />
            Shortness of Breathe
          </label>
          <label>
            <input
              type="checkbox"
              name="illness"
              id="illness"
              onSubmit={handleSubmit}
            />
            Steroid Therapy
          </label>
          <label>
            <input
              type="checkbox"
              name="illness"
              id="illness"
              onSubmit={handleSubmit}
            />
            Osteoporosis
          </label>
          <label>
            <input
              type="checkbox"
              name="illness"
              id="illness"
              onSubmit={handleSubmit}
            />
            Bleeding Problems
          </label>
        </div>
        <textarea
          className="ml-4 rounded-xl"
          placeholder="Have we missed anything that you would like to let us know about?"
          id="otherIllness"
          name="other illness"
          onSubmit={handleSubmit}
        />
        <label className="ml-4">
          For Women Only: Are you breastfeeding or pregnant?
        </label>
        <select
          id="pregnant"
          name="pregnant"
          className="w-32 ml-4 mt-4 rounded-xl"
          onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
        />
        <input
          type="text"
          placeholder="When was your last dental visit?"
          id="lastVisit"
          name="last visit"
          className="w-64 ml-4 mt-4 rounded-xl"
          onSubmit={handleSubmit}
        />
        <label className="ml-4">Are you nervous during dental visits?</label>
        <select
          id="nervous"
          name="nervous"
          className="w-32 ml-4 mt-4 rounded-xl"
          onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
        />
        <label className="ml-4">
          Have you ever been to a dental specialist?
        </label>
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          id="dentalSpecialist"
          name="dental specialist"
          onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
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
            onSubmit={handleSubmit}
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
          onSubmit={handleSubmit}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
