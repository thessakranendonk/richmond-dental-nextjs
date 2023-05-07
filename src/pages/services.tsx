import clsx from "clsx";
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

export const fadeInFromRight = {
  visible: {
    opacity: 1,
    scale: 4,
    transition: { duration: 0.75, delay: 1 },
    transformOrigin: "50% 50%",
    transform: "translateX(0)",
    filter: "blur(0)",
  },
  hidden: {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 100%",
    transform: "translateX(200px)",
    filter: "blur(40px)",
  },
};

export const fadeInFromLeft = {
  visible: {
    opacity: 1,
    scale: 4,
    transition: { duration: 0.75, delay: 1 },
    transformOrigin: "50% 50%",
    transform: "translateX(0)",
    filter: "blur(0)",
  },
  hidden: {
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 100%",
    transform: "translateX(-200px)",
    filter: "blur(40px)",
  },
};

const ServiceDiv = ({
  img,
  name,
  evenOrUneven,
  service,
  description,
}: ServiceImageProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      viewport={{ once: true }}
      animate={controls}
      initial="hidden"
      variants={evenOrUneven ? fadeInFromRight : fadeInFromLeft}
    >
      <motion.div className="xl:flex xl:flex-row xl:w-screen xl:justify-between">
        {/* <img
          key={name}
          src={img}
          alt={name}
          className={clsx(
            "xl:hidden mask mask-hexagon mask-center mx-auto z-10 h-32 md:h-96 mb-10"
          )}
        /> */}

        {evenOrUneven && (
          <>
            <div className="">
              <img className="img img-4object-none br-left" src={img} />
              <div className="wrap-4 br-left top-[20px] left-[20px]">
                <div className="info-4 br-left"></div>
                <img className="info-4 object-none br-left" src={img} />
              </div>
            </div>
          </>
        )}

        <div className="p-0 my-auto xl:w-1/2 md:max-w-2xl text-center md:mx-auto xl:text-left">
          <h2 className="font-semibold text-2xl md:text-3xl xl:text-5xl mb-12 xl:w-[32rem] mx-auto text-zinc-800">
            {service}
          </h2>
          <p className="font-extralight text-md xl:pb-24 xl:text-xl xl:w-[32rem] mx-auto text-zinc-600">
            {description}
          </p>
        </div>
        {!evenOrUneven && (
          <div className="mask-right">
            <img className="img img-4 object-none br-right" src={img} />
            <div className="wrap-4 br-right top-[20px] right-[20px]">
              <div className="info-4 br-right"></div>
              <img className="info-4 object-none br-right" src={img} />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export const ServiceLinks: React.FC<ServiceLinkArr> = ({ links }) => {
  return (
    <ul className="flex flex-wrap p-12 overflow-y-hidden xl:w-screen md:justify-center xl:gap-12 relative z-10">
      {links.map((link) => (
        <li
          key={link.service}
          className="flex w-1/2 md:w-1/5 justify-center xl:w-fit md:hover:scale-110 md:ease-in-out md:duration-200 md:pt-12"
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

export const ServiceList: React.FC<ServiceLinkArr> = ({ links }) => {
  return (
    <ul className="">
      {links.map((service, i) => {
        return (
          <li key={service.service} id={service.id} className="pb-12 xl:pb-0">
            <AnimatePresence>
              <ServiceDiv
                img={service.img}
                name={service.service}
                evenOrUneven={i % 2 === 0}
                service={service.service}
                description={service.description}
              />
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
};

const Services: React.FC = () => {
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
      <div className="mt-24">
        <ServiceList links={RICHMOND_SERVICES} />
      </div>
    </div>
  );
};

export default Services;
