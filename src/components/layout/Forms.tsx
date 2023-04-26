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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register("Last name", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Preferred Name"
        {...register("Preferred Name", {})}
      />
      <input
        type="text"
        placeholder="Date Of Birth"
        {...register("Date Of Birth", { required: true })}
      />

      <input {...register("Gender")} type="radio" value="Male" />
      <input {...register("Gender")} type="radio" value="Female" />
      <input {...register("Gender")} type="radio" value="Other" />

      <input {...register("Marital Status")} type="radio" value="Single" />
      <input {...register("Marital Status")} type="radio" value="Married" />
      <input {...register("Marital Status")} type="radio" value="Divorced" />
      <input {...register("Marital Status")} type="radio" value="Widow" />
      <input {...register("Marital Status")} type="radio" value="Child" />
      <input
        type="tel"
        placeholder="Home Phone"
        {...register("Home Phone", {})}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", { required: true, maxLength: 12 })}
      />
      <input
        type="tel"
        placeholder="Work Phone"
        {...register("Work Phone", {})}
      />
      <input type="text" placeholder="Ext" {...register("Ext", {})} />
      <input
        type="email"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <input
        {...register("How did you hear about us?", { required: true })}
        type="radio"
        value="Search Engine/Social Media"
      />
      <input
        {...register("How did you hear about us?", { required: true })}
        type="radio"
        value="Map"
      />
      <input
        {...register("How did you hear about us?", { required: true })}
        type="radio"
        value="Our Existing Patient"
      />
      <input
        {...register("How did you hear about us?", { required: true })}
        type="radio"
        value="Newspaper/Flyer"
      />
      <input
        {...register("How did you hear about us?", { required: true })}
        type="radio"
        value="Other"
      />
      <input
        type="text"
        placeholder="Address"
        {...register("Address", { required: true })}
      />
      <input
        type="number"
        placeholder="Suite/Unit #"
        {...register("Suite/Unit #", { required: true })}
      />
      <input
        type="text"
        placeholder="City"
        {...register("City", { required: true })}
      />

      <input
        {...register("Province", { required: true })}
        type="radio"
        value="Alberta"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="British Columbia"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="Manitoba"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="New Brunswick"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="Newfoundland and Labrador"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="Northwest Territories"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="Nova Scotia"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="Nunavut"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="Ontario"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="Prince Edward Island"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="Quebec"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="Saskatchewan"
      />
      <input
        {...register("Province", { required: true })}
        type="radio"
        value="Yukon"
      />
      <input
        type="text"
        placeholder="Postal Code"
        {...register("Postal Code", { required: true, max: 7, min: 6 })}
      />

      <input
        {...register("Relationship to subscriber")}
        type="radio"
        value="Self"
      />
      <input
        {...register("Relationship to subscriber")}
        type="radio"
        value="Spouse"
      />
      <input
        {...register("Relationship to subscriber")}
        type="radio"
        value="Child"
      />
      <input
        type="text"
        placeholder="Subscriber Name"
        {...register("Subscriber Name", {})}
      />
      <input
        type="text"
        placeholder="Insurance Company"
        {...register("Insurance Company", {})}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        {...register("Phone Number", {})}
      />
      <input
        type="number"
        placeholder="Plan/Policy Number"
        {...register("Plan/Policy Number", {})}
      />
      <input
        type="number"
        placeholder="Subscriber ID/Certificate #"
        {...register("Subscriber ID/Certificate #", {})}
      />
      <input
        type="text"
        placeholder="Emergency Contact"
        {...register("Emergency Contact", { required: true })}
      />
      <input
        type="text"
        placeholder="Relationship"
        {...register("Relationship", {})}
      />
      <input
        type="tel"
        placeholder="Emergency Phone Number"
        {...register("Emergency Phone Number", {})}
      />
      <input
        type="text"
        placeholder="Family Doctor's Name"
        {...register("Family Doctor's Name", {})}
      />
      <input
        type="text"
        placeholder="Family Doctor's Address"
        {...register("Family Doctor's Address", {})}
      />
      <input
        type="tel"
        placeholder="Family Doctor's Phone"
        {...register("Family Doctor's Phone", {})}
      />
      <input
        type="text"
        placeholder="When was your last medical check-up?"
        {...register("When was your last medical check-up?", {})}
      />

      <input {...register("Do you smoke?")} type="radio" value="No" />
      <input {...register("Do you smoke?")} type="radio" value="Yes" />
      <input {...register("Do you smoke?")} type="radio" value="Occasionally" />
      <select
        {...register(
          "Are you bring treated for or have you had any of the following medical conditions?"
        )}
      >
        <option value="Arthritis">Arthritis</option>
        <option value=" AIDS/HIV"> AIDS/HIV</option>
        <option value=" Asthma"> Asthma</option>
        <option value=" High Blood Pressure"> High Blood Pressure</option>
        <option value=" Cancer"> Cancer</option>
        <option value=" Diabetes"> Diabetes</option>
        <option value=" Heart Murmur"> Heart Murmur</option>
        <option value=" Joint Replacement"> Joint Replacement</option>
        <option value=" Psychiatric treatment"> Psychiatric treatment</option>
        <option value=" Leukaemia"> Leukaemia</option>
        <option value=" Heart Problems"> Heart Problems</option>
        <option value=" Stroke"> Stroke</option>
        <option value=" Kidney Disease"> Kidney Disease</option>
        <option value=" Liver Problems"> Liver Problems</option>
        <option value=" Sinus Problems"> Sinus Problems</option>
        <option value=" Hepatitis/Jaundice"> Hepatitis/Jaundice</option>
        <option value=" Acid Reflux"> Acid Reflux</option>
        <option value=" Gum Disease"> Gum Disease</option>
        <option value=" Lung Disease"> Lung Disease</option>
        <option value=" Thyroid Problems"> Thyroid Problems</option>
        <option value=" Tuberculosis"> Tuberculosis</option>
        <option value=" Venereal Disease"> Venereal Disease</option>
        <option value=" PaceMaker"> PaceMaker</option>
        <option value=" Rheumatic Fever"> Rheumatic Fever</option>
        <option value=" Bone Problems"> Bone Problems</option>
        <option value=" Have Fainted"> Have Fainted</option>
        <option value=" Bleeding Problems "> Bleeding Problems </option>
      </select>
      <textarea
        {...register(
          "If you weren't diagnosed but suspect of having a medical condition, please list it here. List any other medical conditions you may have. ",
          {}
        )}
      />
      <select {...register("Are you allergic to any of the following?")}>
        <option value="Anesthetic">Anesthetic</option>
        <option value=" Ibuprofen"> Ibuprofen</option>
        <option value=" Penicillin"> Penicillin</option>
        <option value=" Aspirin"> Aspirin</option>
        <option value=" Iodine"> Iodine</option>
        <option value=" Sulfa Drugs"> Sulfa Drugs</option>
        <option value=" Codeine"> Codeine</option>
        <option value=" Latex"> Latex</option>
      </select>
      <textarea
        {...register(
          "If you are not sure but suspect of having an allergic reaction to something, please specify. List any other allergic reactions you have. ",
          {}
        )}
      />

      <input
        {...register(
          "Have you taken any long term medications in the past? Prescription or Non-Prescription",
          { required: true }
        )}
        type="radio"
        value="No"
      />
      <input
        {...register(
          "Have you taken any long term medications in the past? Prescription or Non-Prescription",
          { required: true }
        )}
        type="radio"
        value="Yes"
      />

      <input
        {...register(
          "Have you ever had an adverse reaction to a dental injection?"
        )}
        type="radio"
        value="No"
      />
      <input
        {...register(
          "Have you ever had an adverse reaction to a dental injection?"
        )}
        type="radio"
        value="Yes"
      />
      <input
        {...register(
          "Have you ever had an adverse reaction to a dental injection?"
        )}
        type="radio"
        value="Not Sure/Maybe"
      />

      <input
        {...register(
          "Do you have any conditions that affect your immune system? (e.g. leukaemia, AIDS, HIV infection, radiotherapy, chemotherapy, etc.)"
        )}
        type="radio"
        value="No"
      />
      <input
        {...register(
          "Do you have any conditions that affect your immune system? (e.g. leukaemia, AIDS, HIV infection, radiotherapy, chemotherapy, etc.)"
        )}
        type="radio"
        value="Yes"
      />
      <input
        {...register(
          "Do you have any conditions that affect your immune system? (e.g. leukaemia, AIDS, HIV infection, radiotherapy, chemotherapy, etc.)"
        )}
        type="radio"
        value="Not Sure/Maybe"
      />

      <input
        {...register(
          "Have you ever been hospitalized for any illnesses or operations?"
        )}
        type="radio"
        value="No"
      />
      <input
        {...register(
          "Have you ever been hospitalized for any illnesses or operations?"
        )}
        type="radio"
        value="Yes"
      />
      <input
        {...register(
          "Have you ever been hospitalized for any illnesses or operations?"
        )}
        type="radio"
        value="Not Sure/Maybe"
      />
      <select
        {...register(
          "Do you have or have you ever had any of the following? Please check."
        )}
      >
        <option value="Chest Pain">Chest Pain</option>
        <option value=" Angina Heart Attack"> Angina Heart Attack</option>
        <option value=" Mitral Valve Prolapse"> Mitral Valve Prolapse</option>
        <option value=" Stomach Ulcers"> Stomach Ulcers</option>
        <option value=" Thyroid Disease"> Thyroid Disease</option>
        <option value=" Seizures (Epilepsy)"> Seizures (Epilepsy)</option>
        <option value=" Shortness of Breath"> Shortness of Breath</option>
        <option value=" Steroid Therapy"> Steroid Therapy</option>
        <option value=" Osteoporosis"> Osteoporosis</option>
        <option value=" Bleeding Problems"> Bleeding Problems</option>
      </select>
      <textarea
        {...register(
          "Have we missed anything that you would like to let us know about?",
          {}
        )}
      />

      <input
        {...register("For Women Only: Are you breastfeeding or pregnant?")}
        type="radio"
        value="No"
      />
      <input
        {...register("For Women Only: Are you breastfeeding or pregnant?")}
        type="radio"
        value="Yes"
      />
      <input
        {...register("For Women Only: Are you breastfeeding or pregnant?")}
        type="radio"
        value="Not Sure/Maybe"
      />
      <textarea {...register("Reason for your visit today?", {})} />
      <input
        type="text"
        placeholder="When was your last dental visit?"
        {...register("When was your last dental visit?", {})}
      />

      <input
        {...register("Are you nervous during dental visits?")}
        type="radio"
        value="No"
      />
      <input
        {...register("Are you nervous during dental visits?")}
        type="radio"
        value="Slightly"
      />
      <input
        {...register("Are you nervous during dental visits?")}
        type="radio"
        value="Somewhat"
      />
      <input
        {...register("Are you nervous during dental visits?")}
        type="radio"
        value="Extremely"
      />
      <input
        type="text"
        placeholder="When was your last dental x-ray? "
        {...register("When was your last dental x-ray? ", {})}
      />
      <select {...register("Have you ever been to a dental specialist?")}>
        <option value="No">No</option>
        <option value=" Yes"> Yes</option>
        <option value=" Not Sure/Maybe"> Not Sure/Maybe</option>
      </select>

      <input
        {...register("Do your gums bleed when you brush or floss?")}
        type="radio"
        value="No"
      />
      <input
        {...register("Do your gums bleed when you brush or floss?")}
        type="radio"
        value="Yes"
      />
      <input
        {...register("Do your gums bleed when you brush or floss?")}
        type="radio"
        value="Not Sure/Maybe"
      />

      <input
        {...register(
          "Have you been told to take antibiotics before a dental visit?"
        )}
        type="radio"
        value="No"
      />
      <input
        {...register(
          "Have you been told to take antibiotics before a dental visit?"
        )}
        type="radio"
        value="Yes"
      />
      <input
        {...register(
          "Have you been told to take antibiotics before a dental visit?"
        )}
        type="radio"
        value="Not Sure/Maybe"
      />

      <input
        {...register("Do you have pain in the jaw or jaw joint?")}
        type="radio"
        value="No"
      />
      <input
        {...register("Do you have pain in the jaw or jaw joint?")}
        type="radio"
        value="Yes"
      />
      <input
        {...register("Do you have pain in the jaw or jaw joint?")}
        type="radio"
        value="Not Sure/Maybe"
      />
      <input
        type="checkbox"
        placeholder="I, understand, certify that to the best of my knowledge, the above information is correct. I understand that any information that I refuse to provide may affect my health and dental treatment."
        {...register(
          "I, understand, certify that to the best of my knowledge, the above information is correct. I understand that any information that I refuse to provide may affect my health and dental treatment.",
          { required: true }
        )}
      />
      <input
        type="datetime-local"
        placeholder="Today's Date"
        {...register("Today's Date", { required: true })}
      />

      <input type="submit" />
    </form>
  );
};
