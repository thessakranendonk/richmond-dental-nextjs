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
}
