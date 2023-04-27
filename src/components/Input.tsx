import React from "react";

interface InputProps {
  type: string;
  label: string;
  name: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, label, name, className, onChange }) {
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

export default Input;
