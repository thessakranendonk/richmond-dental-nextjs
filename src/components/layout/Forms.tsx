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
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response await axios.post(`api/contact`)
        }
    }
}
