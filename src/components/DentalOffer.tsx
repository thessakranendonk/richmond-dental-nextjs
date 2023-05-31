import Link from "next/link";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RICHMOND_SERVICES } from "../../data/services";

export interface ServiceImageProps {
  img: string;
  name: string;
  evenOrUneven: boolean;
  service: string;
  description: string;
}

export interface ServiceLinkProps {
  service: string;
  description: string;
  href: string;
  img: string;
  id: string;
}
export interface ServiceLinkArr {
  links: ServiceLinkProps[];
}

export const ServiceLinks: React.FC<ServiceLinkArr> = ({ links }) => {
  return (
    <ul className="flex flex-wrap md:p-12 overflow-y-hidden xl:w-screen md:justify-center xl:gap-12 relative z-10 text-shadow-lg shadow-zinc-300">
      {links.map((link) => (
        <li
          key={link.service}
          className="flex w-1/2 md:w-1/5 justify-center xl:w-fit md:hover:scale-110 md:ease-in-out md:duration-200 md:pt-2 mx-auto md:mx-0"
        >
          <Link href={link.href}>
            <img
              src={link.img}
              alt={link.service}
              className="rounded-full z-10 h-20 w-20 mx-auto object-cover hover:img-hover"
            />
            <p className="font-extralight text-sm text-center py-4 xl:text-lg">
              {link.service}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const DentalOffer: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="w-[calc(10% - 10px)] mx-10 xl:mx-0 relative z-10 text-shadow-lg shadow-zinc-300">
      <p className="text-center font-extrabold text-brand-base">
        ________________
      </p>
      <h1 className="text-center tracking-widest my-12 font-medium text-3xl xl:text-4xl text-zinc-700">
        What We Offer
      </h1>
      <p className="font-extralight text-center xl:max-w-3xl xl:mx-auto xl:text-xl pb-10 text-zinc-500 text-lg">
        Our office is focused on providing you with the most up-to-date and
        technologically driven dental treatment options. We emphasize patient
        understanding and education, and as such, are driven by using digital
        options and photography to present you information that is relevant and
        impactful to your oral health.
      </p>
      <div className="mb-12">
        <ServiceLinks links={RICHMOND_SERVICES} />
      </div>
    </div>
  );
};

export default DentalOffer;
