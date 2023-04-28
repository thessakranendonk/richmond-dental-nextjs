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

export interface serviceLinkProps {
  name: string;
  href: string;
  imgSrc: string;
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
      <motion.div className="xl:flex xl:flex-row">
        <img
          key={name}
          src={img}
          alt={name}
          className={clsx(
            "xl:hidden mask mask-hexagon mask-center mx-auto -z-20 h-32 md:h-72 mb-10"
          )}
        />

        {evenOrUneven && (
          <img
            key={name}
            src={img}
            alt={name}
            className="hidden xl:flex mask mask-hexagon mask-center xl:mask-left mx-auto -z-20 h-32 md:h-72 xl:h-[42rem] mb-10"
          />
        )}

        <div>
          <h2 className="font-semibold text-2xl md:text-3xl mb-12">
            {service}
          </h2>
          <p className="font-extralight text-md">{description}</p>
        </div>
        {!evenOrUneven && (
          <img
            key={name}
            src={img}
            alt={name}
            className={clsx(
              "hidden xl:flex mask mask-hexagon mask-center mx-auto -z-20 h-32 md:h-72 mb-10"
            )}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const ServiceLinks: React.FC = () => {
  return (
    <ul className="flex flex-wrap pb-12">
      {RICHMOND_SERVICES.map((link) => (
        <li key={link.service} className="flex w-1/2 mx-auto">
          <Link href={link.href}>
            <img
              src={link.img}
              alt={link.service}
              className="mask mask-hexagon mask-center -z-20 h-24"
            />
            <p className="font-extralight text-sm text-center py-4">
              {link.service}
            </p>
          </Link>
        </li>
      ))}
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
    <div className="w-[calc(10% - 10px)] mx-10">
      <h1 className="text-center my-12 font-semibold text-2xl">Services</h1>
      <p className="font-extralight text-center mb-12">
        Technology has revolutionized dental care, and the services we offer are
        at the cutting-edge of dentistry. No matter how small or large your
        problem is, or if you only need dental maintenance, we can help.
      </p>
      <div>
        <ServiceLinks />
      </div>
      <ul className="">
        {RICHMOND_SERVICES.map((service, i) => {
          return (
            <li key={service.service} id={service.id} className="pb-12">
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
    </div>
  );
};

export default Services;
