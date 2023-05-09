import { ChangeEventHandler } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineError } from "react-icons/md";

export interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  errorMessage: string;
  options?: { val: string; name: string }[];
  registerSpecs?: any;
  type?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
}

const inputClassName = "";
const errorClassName = "";
const labelClassName = "";

const Input = ({
  placeholder,
  errorMessage,
  options,
  registerSpecs,
  name,
  type,
  label,
  id,
  children,
  onChange,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="" id={id}>
      {type === "text" ? (
        <div>
          {label && (
            <label htmlFor={name} className={labelClassName}>
              {label}
            </label>
          )}
          <input
            type={type}
            placeholder={placeholder}
            className={inputClassName}
            {...register(name, registerSpecs)}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <div className={errorClassName} role="alert">
              <MdOutlineError className="mt-1" /> {errorMessage}
            </div>
          )}
        </div>
      ) : (
        <div>
          {label && (
            <label htmlFor={name} className={labelClassName}>
              {label}
            </label>
          )}
          <select className="" {...register("gender")}>
            {options?.map((item) => {
              return (
                <>
                  {item.val === "" ? (
                    <option key={item.name} value={item.val}>
                      {item.name}
                    </option>
                  ) : (
                    <option key={item.name} value={item.val}>
                      {item.name}
                    </option>
                  )}
                </>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default Input;
