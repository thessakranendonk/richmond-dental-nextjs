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
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [state, handleSubmit] = useForm("mayzvyrb");
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
            // value={formData.firstName}
            placeholder="First name *"
            className="ml-4 rounded-xl"
            // {...register("firstName", { required: true, maxLength: 80 })}
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            id="lastName"
            // value={formData.lastName}
            placeholder="Last name *"
            className="ml-4 rounded-xl"
            // {...register("lastName", { required: true, maxLength: 100 })}
            onSubmit={handleSubmit}
          />
        </div>
        <div>
          <input
            type="text"
            id="preferredName"
            // value={formData.preferredName}
            placeholder="Preferred Name"
            className="ml-4 rounded-xl"
            // {...register("preferredName", {})}
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            id="dateOfBirth"
            // value={formData.dateOfBirth}
            placeholder="Date of Birth *"
            className="ml-4 mt-4 rounded-xl"
            // {...register("dateOfBirth", { required: true })}
            onSubmit={handleSubmit}
          />
        </div>
        <label className="ml-4">Gender</label>
        <select
          id="gender"
          // value={formData.gender}
          className="ml-4 w-40 h-8 py-1 rounded-xl"
          // {...register("gender")}
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
          // value={formData.maritalStatus}
          className="ml-4 w-40 h-8 py-1 rounded-xl"
          // {...register("maritalStatus")}
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
            type="tel"
            placeholder="Home Phone"
            id="homePhone"
            // value={formData.homePhone}
            className="ml-4 mt-4 rounded-xl"
            // {...register("homePhone", {})}
            onSubmit={handleSubmit}
          />
          <input
            type="tel"
            placeholder="Mobile number"
            id="mobilePhone"
            // value={formData.mobilePhone}
            className="ml-4 mt-4 rounded-xl"
            // {...register("mobilePhone", { required: true, maxLength: 12 })}
            onSubmit={handleSubmit}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Work Phone"
            id="workPhone"
            // value={formData.workPhone}
            className="ml-4 mt-4 rounded-xl"
            // {...register("workPhone", {})}
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            placeholder="Ext"
            id="ext"
            // value={formData.ext}
            className="ml-4 mt-4 rounded-xl"
            // {...register("ext", {})}
            onSubmit={handleSubmit}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          id="email"
          // value={formData.email}
          className="w-32  ml-4 mt-4 rounded-xl"
          // {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          onSubmit={handleSubmit}
        />
        <label className="ml-4">How did you hear about us? *</label>
        <select
          id="referral"
          // value={formData.referral}
          className="w-32 ml-4 rounded-xl"
          // {...register("referral")}
          onSubmit={handleSubmit}
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
            // value={formData.address}
            className="ml-4 mt-4 rounded-xl"
            // {...register("address", { required: true })}
            onSubmit={handleSubmit}
          />
          <input
            type="number"
            placeholder="Suite/Unit #"
            id="suite"
            // value={formData.suite}
            className="ml-4 mt-4 rounded-xl"
            // {...register("suite")}
            onSubmit={handleSubmit}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="City *"
            id="city"
            // value={formData.city}
            className="ml-4 mt-4 rounded-xl"
            // {...register("city", { required: true })}
            onSubmit={handleSubmit}
          />
          <select
            id="province"
            // value={formData.province}
            className="ml-4 mt-4 rounded-xl"
            // {...register("province")}
            onSubmit={handleSubmit}
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
          // value={formData.postalCode}
          className="w-32 ml-4 mt-4 rounded-xl"
          // {...register("postalCode", { required: true, max: 7, min: 6 })}
          onSubmit={handleSubmit}
        />
        <label className="ml-4">Primary Dental Benefit Plan</label>
        <label className="ml-4">Relationship to Subscriber</label>
        <select
          id="subscriber"
          // value={formData.subscriber}
          className="w-36 ml-4 mt-4 rounded-xl"
          // {...register("subscriber")}
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
            // value={formData.subscriberName}
            className="ml-4 mt-4 rounded-xl"
            // {...register("subscriberName", {})}
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            placeholder="Insurance Company"
            id="insuranceCompany"
            // value={formData.insuranceCompany}
            className="ml-4 mt-4 rounded-xl"
            // {...register("insuranceCompany", {})}
            onSubmit={handleSubmit}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            id="insuranceTel"
            // value={formData.insuranceTel}
            className="ml-4 mt-4 rounded-xl"
            // {...register("insuranceTel", {})}
            onSubmit={handleSubmit}
          />
          <input
            type="number"
            placeholder="Plan/Policy Number"
            id="planNum"
            // value={formData.planNum}
            className="ml-4 mt-4 rounded-xl"
            // {...register("planNum", {})}
            onSubmit={handleSubmit}
          />
        </div>
        <input
          type="number"
          placeholder="Subscriber ID/Certificate #"
          id="subscriberId"
          // value={formData.subscriberId}
          className="w-52 ml-4 mt-4 rounded-xl"
          // {...register("subscriberId", {})}
          onSubmit={handleSubmit}
        />
        <label className="ml-4">Emergency Contact *</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Name *"
            id="emerContact"
            // value={formData.emerContact}
            className="ml-4 mt-4 rounded-xl"
            // {...register("emerContact", { required: true })}
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            placeholder="Relationship"
            id="emerRelationship"
            // value={formData.emerRelationship}
            className="ml-4 mt-4 rounded-xl"
            // {...register("emerRelationship", {})}
            onSubmit={handleSubmit}
          />
        </div>
        <input
          type="tel"
          placeholder="Phone Number"
          id="emerTel"
          // value={formData.emerTel}
          className="w-36 ml-4 mt-4 rounded-xl"
          // {...register("emerTel", {})}
          onSubmit={handleSubmit}
        />
        <label className="ml-4">Medical History</label>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Family Doctor's Name"
            id="famDocName"
            // value={formData.famDocName}
            className="ml-4 mt-4 rounded-xl"
            // {...register("famDocName", {})}
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            placeholder="Family Doctor's Address"
            id="famDocAddress"
            // value={formData.famDocAddress}
            className="ml-4 mt-4 rounded-xl"
            // {...register("famDocAddress", {})}
            onSubmit={handleSubmit}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Family Doctor's Phone"
            id="famDocTel"
            // value={formData.famDocTel}
            className="ml-4 mt-4 rounded-xl"
            // {...register("famDocTel", {})}
            onSubmit={handleSubmit}
          />
          <input
            type="text"
            placeholder="When was your last medical check-up?"
            id="medCheck"
            // value={formData.medCheck}
            className="ml-4 mt-4 rounded-xl"
            // {...register("medCheck", {})}
            onSubmit={handleSubmit}
          />
        </div>
        <label className="ml-4">Do you smoke?</label>
        <select
          id="smoke"
          // value={formData.smoke}
          className="w-32 ml-4 mt-4 rounded-xl"
          // {...register("smoke")}
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
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Arthritis
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            AIDS/HIV
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Asthma
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            High Blood Pressure
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Cancer
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Diabetes
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Heart Murmur
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Joint Replacement
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Psychiatric Treatment
          </label>{" "}
        </div>
        <div className="ml-4">
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Leukemia
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Heart Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Stroke
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Kidney Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Liver Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Sinus Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Hepatitis / Jaundice
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Acid Reflux
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Gum Disease
          </label>{" "}
        </div>
        <div className="ml-4">
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Lung Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Thyroid Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Tuberculosis
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Venereal Disease
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            PaceMaker
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Rheumatic Fever
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Bone Problems
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Have Fainted
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.medConditions}
              id="medConditions"
              // {...register("medConditions")}
              onSubmit={handleSubmit}
            />
            Bleeding Problems
          </label>
        </div>
        <textarea
          className="ml-4 mt-4 rounded-xl"
          placeholder="If you weren't diagnosed but suspect of having a medical condition, please list it here. List any other medical conditions you have."
          id="otherMedConditions"
          // value={formData.otherMedConditions}
          // {...register("otherMedConditions", {})}
          onSubmit={handleSubmit}
        />
        <label className="ml-4">
          Are you allergic to any of the following?
        </label>
        <div className="flex flex-row ml-4">
          <label>
            <input
              type="checkbox"
              // value={formData.allergies}
              id="allergies"
              // {...register("allergies")}
              onSubmit={handleSubmit}
            />
            Anesthetic
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.allergies}
              id="allergies"
              // {...register("allergies")}
              onSubmit={handleSubmit}
            />
            Ibuprofen
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.allergies}
              id="allergies"
              // {...register("allergies")}
              onSubmit={handleSubmit}
            />
            Penicilin
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.allergies}
              id="allergies"
              // {...register("allergies")}
              onSubmit={handleSubmit}
            />
            Aspirin
          </label>{" "}
        </div>
        <div className="ml-4">
          <label>
            <input
              type="checkbox"
              // value={formData.allergies}
              id="allergies"
              // {...register("allergies")}
              onSubmit={handleSubmit}
            />
            Iodine
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.allergies}
              id="allergies"
              // {...register("allergies")}
              onSubmit={handleSubmit}
            />
            Sulfa Drugs
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.allergies}
              id="allergies"
              // {...register("allergies")}
              onSubmit={handleSubmit}
            />
            Codeine
          </label>{" "}
          <label>
            <input
              type="checkbox"
              // value={formData.allergies}
              id="allergies"
              // {...register("allergies")}
              onSubmit={handleSubmit}
            />
            Latex
          </label>
        </div>
        <textarea
          className="ml-4 mt-4 rounded-xl"
          placeholder="If you are not sure but suspect of having an allergic reaction to something, please specify. List any other allergic reactions you have."
          id="otherAllergies"
          // value={formData.otherAllergies}
          // {...register("otherAllergies", {})}
          onSubmit={handleSubmit}
        />
        <label className="ml-4">
          Have you taken any long term medicaions in the past? Prescription or
          Non-Prescription
        </label>
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          id="longTermMeds"
          // value={formData.longTermMeds}
          // {...register("longTermMeds")}
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
          // value={formData.dentalInjection}
          // {...register("dentalInjection")}
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
          // value={formData.immuneSystem}
          // {...register("immuneSystem")}
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
          // value={formData.hospital}
          // {...register("hospital")}
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
              // value={formData.illness}
              id="illness"
              // {...register("illness")}
              onSubmit={handleSubmit}
            />
            Chest Pain, Angina
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.illness}
              id="illness"
              // {...register("illness")}
              onSubmit={handleSubmit}
            />
            Heart Attack
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.illness}
              id="illness"
              // {...register("illness")}
              onSubmit={handleSubmit}
            />
            Mitral Valve Prolapse
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.illness}
              id="illness"
              // {...register("illness")}
              onSubmit={handleSubmit}
            />
            Latex
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.illness}
              id="illness"
              // {...register("illness")}
              onSubmit={handleSubmit}
            />
            Thyroid Disease
          </label>
        </div>
        <div className="ml-4">
          <label>
            <input
              type="checkbox"
              // value={formData.illness}
              id="illness"
              // {...register("illness")}
              onSubmit={handleSubmit}
            />
            Seizures(Epilepsy)
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.illness}
              id="illness"
              // {...register("illness")}
              onSubmit={handleSubmit}
            />
            Shortness of Breathe
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.illness}
              id="illness"
              // {...register("illness")}
              onSubmit={handleSubmit}
            />
            Steroid Therapy
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.illness}
              id="illness"
              // {...register("illness")}
              onSubmit={handleSubmit}
            />
            Osteoporosis
          </label>
          <label>
            <input
              type="checkbox"
              // value={formData.illness}
              id="illness"
              // {...register("illness")}
              onSubmit={handleSubmit}
            />
            Bleeding Problems
          </label>
        </div>
        <textarea
          className="ml-4 rounded-xl"
          placeholder="Have we missed anything that you would like to let us know about?"
          id="otherIllness"
          // value={formData.otherIllness}
          // {...register("otherIllness", {})}
          onSubmit={handleSubmit}
        />
        <label className="ml-4">
          For Women Only: Are you breastfeeding or pregnant?
        </label>
        <select
          id="pregnant"
          // value={formData.pregnant}
          className="w-32 ml-4 mt-4 rounded-xl"
          // {...register("pregnant")}
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
          // value={formData.visitReason}
          // {...register("visitReason", {})}
          onSubmit={handleSubmit}
        />
        <input
          type="text"
          placeholder="When was your last dental visit?"
          id="lastVisit"
          // value={formData.lastVisit}
          className="w-64 ml-4 mt-4 rounded-xl"
          // {...register("lastVisit", {})}
          onSubmit={handleSubmit}
        />
        <label className="ml-4">Are you nervous during dental visits?</label>
        <select
          id="nervous"
          // value={formData.nervous}
          className="w-32 ml-4 mt-4 rounded-xl"
          // {...register("nervous")}
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
          // value={formData.lastXray}
          // {...register("lastXray", {})}
          onSubmit={handleSubmit}
        />
        <label className="ml-4">
          Have you ever been to a dental specialist?
        </label>
        <select
          className="w-32 ml-4 mt-4 rounded-xl"
          id="dentalSpecialist"
          // value={formData.dentalSpecialist}
          // {...register("dentalSpecialist")}
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
          // value={formData.gumBleed}
          className="w-32 ml-4 mt-4 rounded-xl"
          // {...register("gumBleed")}
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
          // value={formData.antibiotics}
          className="w-32 ml-4 mt-4 rounded-xl"
          // {...register("antibiotics")}
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
          // value={formData.jawPain}
          className="w-32 ml-4 mt-4 rounded-xl"
          // {...register("jawPain")}
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
            // value={formData.terms}
            id="terms"
            className="ml-4"
            // {...register("terms", { required: true })}
            onSubmit={handleSubmit}
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
          // value={formData.date}
          // {...register("date", { required: true })}
          onSubmit={handleSubmit}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
