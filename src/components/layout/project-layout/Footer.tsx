import Button from "@/components/ui/inputs/button";
import { snakeCaseToTitleCase } from "@/lib/functions";
import { FooterProps } from "@/types/component-types";
import clsx from "clsx";
import Link from "next/link";

const Footer: React.FC<FooterProps> = ({ navigationLinks }) => {
  return (
    <div className="text-center border-t-2 border-zinc-700 w-[calc(10% - 10px)] mx-5">
      <ul className="flex flex-col justify-center text-sm gap-y-2 pb-10 text-zinc-500 mt-5">
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{snakeCaseToTitleCase(link.name)}</Link>
          </li>
        ))}
      </ul>
      <div className="mb-12">
        <Button
          extraClassName={clsx(
            "bg-emerald-800 px-12 py-4 text-2xl text-white hover:text-emerald-800 hover:shadow-[inset_15rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow] rounded-full border-2 border-emerald-800"
          )}
          type="button"
        >
          <Link href="/" className="font-semibold">
            BOOK NOW
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
