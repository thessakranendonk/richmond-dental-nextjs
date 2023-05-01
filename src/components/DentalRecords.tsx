import React, { useState } from "react";

interface DentalRecordsFormState {
  currentDate: string;
  dentalOfficeDr: string;
  patientsFirstName: string;
  patientsLastName: string;
  patientsDateOfBirth: string;
  releaseStatement: string;
  releaseTerms: string;
}

const initialDentalState: DentalRecordsFormState = {
  currentDate: "",
  dentalOfficeDr: "",
  patientsFirstName: "",
  patientsLastName: "",
  patientsDateOfBirth: "",
  releaseStatement: "",
  releaseTerms: "",
};
