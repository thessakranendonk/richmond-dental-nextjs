export interface FormState {
  [key: string]: string;
}

export interface InputProps {
  type: string;
  label: string;
  name: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Patient {
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  email: string;
}

export interface NewPatientFormState extends Patient {
  preferredName: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  homePhone: string;
  mobilePhone: string;
  workPhone: string;
  ext: string;
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
  // frontFile: File | null;
  // backFile: File | null;
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

export interface DentalRecordFormProps extends Patient {
  currentDate: string;
  dentalOfficeDr: string;
  releaseStatement: string;
  releaseTerms: string;
}

export interface BookingFormProps extends Patient {
  phoneNumber: number;
  timeFrame: string;
}
