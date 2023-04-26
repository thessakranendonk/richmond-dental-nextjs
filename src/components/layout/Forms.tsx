import { useState } from "react";
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

const Forms = () => {
  const [formData, setFormData] = useState<FormData>({
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
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`api/contact`, formData);

      if (response.status === 200) {
        alert("your message has been sent!");
      } else {
        alert("an error occured. please try again later");
      }
    } catch (error) {
      console.error(error);
      alert("an error occured. please try again later");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return <form onSubmit={handleSubmit}></form>;
};
