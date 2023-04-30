import Button from "@/components/ui/inputs/button";
import { snakeCaseToTitleCase } from "@/lib/functions";
import { FooterProps } from "@/types/component-types";
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
      <div className="mb-12 sm:hidden">
        <Button
          extraClassName="mb-2 bg-clip-content text-white bg-gradient-to-r from-emerald-400 to-emerald-600 w-full h-12 text-lg rounded-full"
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
