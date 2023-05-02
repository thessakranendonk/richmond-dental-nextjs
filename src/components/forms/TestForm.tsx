import React, { useState } from "react";

const TestForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any | React.FormEvent) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e: any | React.FormEvent) => {
    e.preventDefault();
    if (inputs.name && inputs.email && inputs.message) {
      try {
        const res = await fetch(`http://localhost:3000/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });
        const { error } = await res.json();

        if (error) {
          console.log(error);

          return;
        }

        // contactEvent();
        setInputs({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className="w-full md:w-2/4" onSubmit={(e) => onSubmitForm(e)}>
      <input
        id="name"
        aria-label="Name field for Contact form"
        value={inputs.name}
        onChange={handleChange}
        placeholder="Name"
        type="text"
        required
        className="input mb-4"
      />
      <input
        id="email"
        aria-label="Email field for Contact form"
        value={inputs.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        required
        className="input mb-4"
      />
      <textarea
        id="message"
        aria-label="Message field for Contact form"
        value={inputs.message}
        onChange={(e) => handleChange(e)}
        placeholder="Your Message"
        required
        className="input mb-4"
      />
      <div className="flex flex-row items-center">
        <button type="submit" className="btn btn-themed uppercase w-2/4">
          Send
        </button>
      </div>
    </form>
  );
};

export default TestForm;
