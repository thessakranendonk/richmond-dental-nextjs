import { ButtonProps } from "@/types/component-types";
import clsx from "clsx";

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  id,
  extraClassName,
  type,
  onSubmit,
  children,
}) => {
  return (
    <button
      type={type}
      id={id}
      onSubmit={onSubmit}
      className={clsx(extraClassName)}
    >
      {children}
    </button>
  );
};

export default Button;
