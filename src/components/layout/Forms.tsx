import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

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
}

export default function Forms() {
  const {
    register,
    handleSubmit,
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
  const [antibiotics, setantibiotics] = useState<string>("");
  const [jawPain, setJawPain] = useState<string>("");
  const [terms, setTerms] = useState<string>("");
  const [date, setDate] = useState<string>("");
}
