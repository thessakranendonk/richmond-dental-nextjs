import Link from "next/link";
import { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RICHMOND_SERVICES } from "../../data/services";

export interface ServiceImageProps {
  img?: string;
  name: string;
  evenOrUneven: boolean;
  service: string;
  // description: string;
}

export interface ServiceLinkProps {
  service: string;
  // description: string;
  href: string;
  img?: string;
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
  evenOrUneven,
  service,
  // description,
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
      <motion.div className="xl:flex xl:flex-row xl:w-auto">
        {evenOrUneven && (
          <>
            <div className="hidden xl:inline-flex">
              <img className="img img-settings object-fit br-left" src={img} />
              <div className="img-wrap xl:img-wrap-xl br-left top-[20px] left-[20px]">
                <div className="back-img br-left"></div>
                <img className="back-img object-fit br-left" src={img} />
              </div>
            </div>
          </>
        )}

        <div className="p-0 my-auto xl:w-1/2 md:max-w-2xl text-center md:mx-auto xl:text-left md:mt-8 xl:my-auto">
          <h2 className="font-semibold text-2xl md:text-3xl xl:text-5xl mb-12 xl:w-[32rem] mx-auto text-zinc-800 text-shadow-lg shadow-zinc-300">
            {service}
          </h2>
          {/* <p className="font-extralight text-md md:pb-8 xl:pb-24 xl:text-xl xl:w-[32rem] mx-auto text-zinc-600">
            {description}
          </p> */}
        </div>
        {!evenOrUneven && (
          <div className="hidden xl:inline-flex">
            <img
              className="img img-settings object-fit br-right-about"
              src={img}
            />
            <div className="img-wrap img-wrap-xl br-right-about top-[20px] right-[20px]">
              <div className="back-img br-right-about"></div>
              <img className="back-img object-fit br-right-about" src={img} />
            </div>
          </div>
        )}

        <div className="xl:hidden">
          <img
            className="img-sm md:img-wrap-md object-cover img-settings br-left mx-auto mt-12"
            src={img}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// export const ServiceLinks: React.FC<ServiceLinkArr> = ({ links }) => {
//   return (
//     <ul className="flex flex-wrap md:px-12 overflow-y-hidden xl:w-screen md:justify-center xl:gap-12 relative z-10">
//       {links.map((link) => (
//         <li
//           key={link.service}
//           className="flex flex-column  md:w-1/5 justify-center xl:w-fit md:hover:scale-110 md:ease-in-out md:duration-200 md:pt-12 md:mx-0"
//         >
//           <motion.div
//             className="box"
//             whileHover={{ scale: 1.5 }}
//             transition={{ type: "spring", stiffness: 200, damping: 10 }}
//           >
//             <Link href={link.href}>
//               <img
//                 src={link.img}
//                 alt={link.service}
//                 className="z-10 h-25 w-25 mx-auto  hover:img-hover mt-3 "
//               />
//               <p className="font-extralight text-sm text-center py-4 xl:text-lg">
//                 {link.service}
//               </p>
//             </Link>
//           </motion.div>
//         </li>
//       ))}
//     </ul>
//   );
// };

export const ServiceList: React.FC<ServiceLinkArr> = ({ links }) => {
  return (
    <ul>
      {links.map((service, i) => {
        return (
          <li key={service.service} id={service.id} className="pb-12 xl:pb-0">
            <AnimatePresence>
              <ServiceDiv
                img={service.img}
                name={service.service}
                evenOrUneven={i % 2 === 0}
                service={service.service}
                // description={service.description}
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
    <div className="w-[calc(10% - 10px)] mx-10 xl:mx-0 relative z-10 animate-fadeInFast transition">
      <h1 className="text-center pt-24 sm:pt-0 my-12 font-semibold text-2xl xl:text-3xl text-shadow-lg shadow-zinc-300">
        Services
      </h1>
      <p className="font-extralight text-center mb-12 xl:max-w-xl xl:mx-auto xl:text-xl">
        Technology has revolutionized dental care, and the services we offer are
        at the cutting-edge of dentistry. No matter how small or large your
        problem is, or if you only need dental maintenance, we can help.
      </p>
      {/* <div className="mb-12">
        <ServiceLinks links={RICHMOND_SERVICES} />
      </div> */}
      <div className="mt-24">
        <ServiceList links={RICHMOND_SERVICES} />
      </div>
    </div>
  );
};

export default Services;
