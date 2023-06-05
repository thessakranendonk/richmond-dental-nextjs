import Button from "@/components/ui/inputs/Button";
import { snakeCaseToTitleCase } from "@/lib/functions";
import { FooterProps, NavigationLink } from "@/types/component-types";
import clsx from "clsx";
import Link from "next/link";
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlinePhone,
} from "react-icons/ai";
import LogoAnimation from "@/components/LogoAnimation";
import { CLINIC_DETAILS, HOURS } from "../../../../data/clinic-data";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineContactPhone } from "react-icons/md";

const iconClassName = "mt-1 mr-2 w-4 h-4 text-white";
const divClassName = " flex flex-row justify-center mt-5 mb-1";
const hoursClassName = "flex flex-row justify-between";
const dayClassName = "flex justify-center text-left text-sm text-white pb-1";

const LogoFooter = () => {
  return (
    <div className="h-full bg-brand-evenLighter flex justify-center w-full">
      <div className="relative my-auto">
        <LogoAnimation />
      </div>
    </div>
  );
};

const FooterHeading: React.FC<{ title: string; icon: any }> = ({
  title,
  icon,
}) => {
  return (
    <div className="flex justify-center bg-white/20 w-full h-10">
      <div className="flex relative my-auto">
        <div>{icon}</div>
        <h2 className=" tracking-widest text-md text-white">
          <strong>{title}</strong>
        </h2>
      </div>
    </div>
  );
};

const FooterMenu: React.FC<Pick<FooterProps, "navigationLinks">> = ({
  navigationLinks,
}) => {
  return (
    <div className="flex flex-col justify-between h-full w-full bg-brand-lighter pb-5">
      <div className="relative text-center">
        <FooterHeading
          title="MENU"
          icon={<AiOutlineMenu className="mt-1 mr-2 w-4 h-4 text-white" />}
        />

        <ul className="flex flex-col mx-auto text-md gap-y-2 font-light text-white mt-4">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              {link.name !== "FORMS" ? (
                <div className="hover:font-medium">
                  <Link href={link.href}>
                    {snakeCaseToTitleCase(link.name)}
                  </Link>
                </div>
              ) : (
                <ul className="flex flex-col text-md gap-y-2">
                  {link.dropdown?.map((drop) => (
                    <li key={drop.name} className="hover:font-medium">
                      <Link href={drop.href}>
                        {snakeCaseToTitleCase(drop.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ClinicHours = () => {
  return (
    <div className="flex flex-col justify-between h-full bg-brand-lighter md:bg-brand-base pb-8">
      <FooterHeading
        title="HOURS"
        icon={<AiOutlineClockCircle className={iconClassName} />}
      />

      <ul className="hidden md:inline-block w-[calc(10% - 10px)] mx-2 lg:mx-12 pt-8">
        {HOURS.map((day) => (
          <li key={day.day} className={hoursClassName}>
            <p className={`${dayClassName} font-bold`}>{day.day}</p>
            <p className={dayClassName}>{day.hours}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-evenly md:hidden text-white text-sm w-[calc(10% - 10px)] mx-2 pt-8">
        <div className="flex flex-col text-center md:flex-row justify-between">
          <p>Mon - Thu</p>
          <p>10 AM - 5 PM</p>
        </div>
        <div className="flex flex-col text-center md:flex-row justify-between">
          <p>Fri</p>
          <p>10 AM - 4 PM</p>
        </div>
        <div className="flex flex-col md:flex-row j text-center ustify-between">
          <p>Every Other Sat</p>
          <p>10 AM - 4 PM</p>
        </div>
      </div>
    </div>
  );
};

const ClinicContact = () => {
  return (
    <div className="flex flex-col justify-between h-full border-t-8 md:border-none border-brand-lightest bg-brand-lighter md:bg-brand-darkest">
      <FooterHeading
        title="CONTACT"
        icon={<MdOutlineContactPhone className={iconClassName} />}
      />
      <div className="pb-8 pt-4 md:pt-0">
        <div className={divClassName}>
          <AiOutlinePhone className={iconClassName} />
          <a
            className="hover:underline text-sm text-white"
            href={`tel:${CLINIC_DETAILS.phone}`}
          >
            {CLINIC_DETAILS.phone}
          </a>
        </div>

        <div className={divClassName}>
          <AiOutlineMail className={iconClassName} />
          <a
            className="hover:underline text-sm text-white"
            href={`mailto:${CLINIC_DETAILS.email}`}
          >
            {CLINIC_DETAILS.email}
          </a>
        </div>

        <div className={divClassName}>
          <CiLocationOn className={iconClassName} />
          <a
            className="hover:underline text-sm text-white"
            href="https://www.google.com/maps?q=500+Richmond+St.+W,+Suite+128,+Toronto,+ON,+M5V+3N4"
            target="_blank"
            rel="noopener noreferrer"
          >
            {CLINIC_DETAILS.address}
          </a>
        </div>
        <div className="w-full justify-center hidden md:flex">
          <Button
            extraClassName={clsx(
              "bg-brand-darkest px-8 mt-3 py-2 text-sm text-white hover:text-brand-base hover:shadow-[inset_15rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow] rounded-lg border-2 border-brand-darkest md:border-brand-lightest"
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

const Footer: React.FC<FooterProps> = ({ navigationLinks }) => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-4 h-full mt-48">
      <div className="hidden md:inline-block">
        <LogoFooter />
      </div>
      <div className="hidden md:inline-block">
        <FooterMenu navigationLinks={navigationLinks} />
      </div>
      <div>
        <ClinicHours />
      </div>
      <div>
        <ClinicContact />
      </div>
    </div>
  );
};

export default Footer;
