import { BookingFormProps } from "@/types/forms-interfaces";
import clsx from "clsx";
import React, { FormEvent, useState } from "react";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { MdOutlineError } from "react-icons/md";

const BookingForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<BookingFormProps>({
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<BookingFormProps> = async (
    data: BookingFormProps
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const inputClassName = "mb-2 rounded-xl border-zinc-400/60";
  const errorClassName = "text-red-700 pb-2 pl-4 flex gap-2";
  return (
    <div>
      <div className="w-screen pt-24 pb-24 bg-[url('https://res.cloudinary.com/dybcfr6cd/image/upload/v1670110454/nordwood-themes-KcsKWw77Ovw-unsplash_wil93u.jpg')]">
        <h1 className="relative z-10 text-center text-3xl xl:text-6xl mb-4 xl:mb-8 mt-8 sm:mt-0 text-white tracking-widest text-shadow-lg shadow-zinc-700">
          Request Appointment
        </h1>
      </div>
      <div className="absolute h-[26rem] inset-0 bg-emerald-700/90 to-black mix-blend-multiply" />
      <p className="text-center text-lg font-extralight lg:max-w-lg mx-auto pt-20">
        We are always glad to address any questions that you might come up with.
        Please get in touch with us to inquire about anything! We review and
        accept patient’s requests on within a 24 hour basis.
      </p>
      <div>
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mt-8 xl:mt-12 text-sm mx-auto lg:max-w-lg"
          >
            <input
              className={inputClassName}
              type="text"
              placeholder="First name"
              {...register("firstName", { required: true, maxLength: 80 })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> First name is required
              </div>
            )}
            <input
              className={inputClassName}
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: true, maxLength: 100 })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Last name is required
              </div>
            )}
            <input
              className={inputClassName}
              type="tel"
              placeholder="Phone number"
              {...register("phoneNumber", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
              aria-invalid={errors.phoneNumber ? "true" : "false"}
            />
            {errors.phoneNumber?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Phone number is required
              </div>
            )}
            <input
              className={inputClassName}
              type="text"
              placeholder="Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Email is required
              </div>
            )}
            {errors.email?.type === "pattern" && (
              <div className={errorClassName} role="alert">
                <MdOutlineError className="mt-1" /> Email didn't pass validation
              </div>
            )}
            <select
              {...register("timeFrame", { required: true })}
              className={inputClassName}
            >
              <option value="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</option>
              <option value="1:00 PM - 4:00 PM">1:00 PM - 4:00 PM</option>
              <option value="4:00 PM - 7:00PM">4:00 PM - 7:00PM</option>
              <option value="10:00 AM - 7:00 PM">10:00 AM - 7:00 PM</option>
            </select>
            <input
              className={clsx(
                "bg-emerald-800 font-medium px-8 text-sm h-10 mt-5 text-white rounded-full border-2 border-emerald-800",
                formState.isValid &&
                  "hover:text-emerald-800 hover:shadow-[inset_50rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow]",
                !formState.isValid && "opacity-30"
              )}
              type="submit"
              disabled={!formState.isValid}
              value="Request An Appointment"
            />
          </form>
        ) : (
          <p className="text-center text-xl font-extralight pt-20">
            Your appointment request has been successfully submitted!
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
