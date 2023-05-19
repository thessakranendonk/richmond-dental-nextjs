import Button from "@/components/ui/inputs/Button";
import { snakeCaseToTitleCase } from "@/lib/functions";
import { FooterProps } from "@/types/component-types";
import clsx from "clsx";
import Link from "next/link";
import DentalInfo from "@/components/DentalInfo";
import { AiOutlineMenu } from "react-icons/ai";

const Footer: React.FC<FooterProps> = ({ navigationLinks }) => {
  return (
    <div className="flex flex-row justify-around text-center border-t-2 border-zinc-700 bg-gray-500 mr-0">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-center mt-5 mb-1">
          <AiOutlineMenu className="mt-1 mr-2 w-4 h-4 text-white" />
          <h2 className=" tracking-widest text-sm text-white pb-1">
            <strong>MENU</strong>
          </h2>
        </div>
        <ul className="flex flex-col text-sm gap-y-2 pb-10 text-white mt-2">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{snakeCaseToTitleCase(link.name)}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col mt-6 pb-9">
        <DentalInfo />
        <div className="flex justify-center">
          <Button
            extraClassName={clsx(
              "bg-brand-base px-10 mt-2 py-2 text-1xl text-white hover:text-brand-base hover:shadow-[inset_15rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow] rounded-lg border-2 border-brand-base"
            )}
            type="button"
          >
            <Link href="/book-appointment" className="font-semibold">
              BOOK NOW
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
