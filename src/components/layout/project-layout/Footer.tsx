import Button from "@/components/ui/inputs/Button";
import { snakeCaseToTitleCase } from "@/lib/functions";
import { FooterProps } from "@/types/component-types";
import clsx from "clsx";
import Link from "next/link";
import DentalInfo from "@/components/DentalInfo";

const Footer: React.FC<FooterProps> = ({ navigationLinks }) => {
  return (
    <div className=" text-center border-t-2 border-zinc-700 mx-5">
      <div className="flex justify-evenly flex-col w-[calc(90% - 90px)] md:flex-row">
        <div className="flex mb-5">
          <ul className="flex flex-col justify-center text-sm gap-y-2 pb-10 text-zinc-500 mt-5">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{snakeCaseToTitleCase(link.name)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <DentalInfo />
        </div>
      </div>
      <div className="mb-12">
        <Button
          extraClassName={clsx(
            "bg-brand-base px-12 py-4 text-2xl text-white hover:text-brand-base hover:shadow-[inset_15rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow] rounded-lg border-2 border-brand-base"
          )}
          type="button"
        >
          <Link href="/book-appointment" className="font-semibold">
            BOOK NOW
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
