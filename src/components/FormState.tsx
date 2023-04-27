import React, { useState } from "react";

interface FormState {
  [key: string]: string;
}

interface InputProps {
  type: string;
  label: string;
  name: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

function NewPatientFormState({
  type,
  label,
  name,
  className,
  onChange,
}: InputProps) {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="input-field">
      <label htmlFor={name} className="input-field__label">
        {label}
      </label>
      <input
        type={type}
        placeholder={label}
        id={name}
        name={name}
        className={className}
        onChange={onChange}
      />
    </div>
  );
}

export default NewPatientFormState;