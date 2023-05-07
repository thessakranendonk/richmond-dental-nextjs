import { LinkCardProps } from "@/types/component-types";
import Link from "next/link";
import { useState } from "react";

const LinkCard: React.FC<LinkCardProps> = ({
  href,
  icon,
  hoverIcon,
  name,
  information,
}) => {
  const [iconType, setIconType] = useState<string>();
  return (
    <Link
      href={href}
      className="flex flex-col w-80 px-8 h-full rounded-lg justify-start text-center mx-auto gap-y-4 hover:shadow-xl hover:scale-105 hover:transition hover:duration-300"
      onMouseEnter={() => setIconType("hoverIcon")}
      onMouseLeave={() => setIconType("icon")}
    >
      <div className="mx-auto pt-4 transition">
        {iconType === "icon" ? icon : hoverIcon}
      </div>

      <h2 className="text-2xl font-normal">{name}</h2>

      <p className="text-xl text-zinc-400 font-extralight">{information}</p>
    </Link>
  );
};

export default LinkCard;
