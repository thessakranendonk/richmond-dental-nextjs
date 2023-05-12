import Link from "next/link";
import { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
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
    <ul className="flex flex-wrap md:p-12 overflow-y-hidden xl:w-screen md:justify-center xl:gap-12 relative z-10">
      {links.map((link) => (
        <li
          key={link.service}
          className="flex w-1/2 md:w-1/5 justify-center xl:w-fit md:hover:scale-110 md:ease-in-out md:duration-200 md:pt-12 mx-auto md:mx-0"
        >
          <Link href={link.href}>
            <img
              src={link.img}
              alt={link.service}
              className="rounded-full z-10 h-24 w-24 mx-auto object-cover hover:img-hover"
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
    <div className="w-[calc(10% - 10px)] mx-10 xl:mx-0 relative z-10">
      <h1 className="text-center my-12 font-semibold text-2xl xl:text-3xl">
        Services
      </h1>
      <p className="font-extralight text-center mb-12 xl:max-w-xl xl:mx-auto xl:text-xl">
        Technology has revolutionized dental care, and the services we offer are
        at the cutting-edge of dentistry. No matter how small or large your
        problem is, or if you only need dental maintenance, we can help.
      </p>
      <div className="mb-12">
        <ServiceLinks links={RICHMOND_SERVICES} />
      </div>
    </div>
  );
};

export default DentalOffer;
