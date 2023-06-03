export interface FormState {
  [key: string]: string;
}

export interface Patient {
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  email: string;
}

export interface NewPatientFormProps extends Patient {
  preferredName: string;
  dateOfBirth: string;
  gender: string;
  pronouns: string;
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
  frontInsuranceCard: File | string | null;
  backInsuranceCard: File | string | null;
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
  patientSig: string;
  parentSig: string;
  date: string;
}

export interface DentalRecordFormProps extends Patient {
  currentDate: string;
  dentalOfficeDr: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  releaseStatement: string;
  releaseTerms: string;
  patientSig: string;
}

export interface BookingFormProps extends Patient {
  file: any;
  phoneNumber: number;
  timeFrame: string;
}
