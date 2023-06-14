import { ButtonProps } from "@/types/component-types";
import clsx from "clsx";
import Link from "next/link";

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  id,
  extraClassName,
  type,
  onSubmit,
  href,
  content,
}) => {
  return (
    <Link href={href} className="font-medium">
      <button
        type={type}
        id={id}
        onSubmit={onSubmit}
        className={clsx(extraClassName)}
      >
        {content}
      </button>
    </Link>
  );
};

export default Button;
