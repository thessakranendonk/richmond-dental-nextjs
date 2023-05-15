import PatientTestimonials from "@/components/PatientTestimonials";
import LinkCard from "@/components/ui/LinkCard";
import { RiDoubleQuotesL, RiServiceFill, RiServiceLine } from "react-icons/ri";
import { HiOfficeBuilding, HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdCamera, MdOutlineCamera } from "react-icons/md";
import DentalOffer from "@/components/DentalOffer";
import Hero from "@/components/Hero";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const iconClassName = "w-24 h-24 text-brand-base";
const HomePageLinks = [
  {
    href: "/services",
    name: "Services",
    information:
      "We can do everything a traditional dentist does with more precision and less waste to preserve and protect your healthy enamel.",
    icon: <RiServiceLine className={iconClassName} />,
    hoverIcon: <RiServiceFill className={iconClassName} />,
  },
  {
    href: "/technology-and-digital-dentistry",
    name: "Technology",
    information:
      "We can do everything a traditional dentist does with more precision and less waste to preserve and protect your healthy enamel.",
    icon: <MdOutlineCamera className={iconClassName} />,
    hoverIcon: <MdCamera className={iconClassName} />,
  },
  {
    href: "/office-tour",
    name: "Office",
    information:
      "You’ll enjoy a clean and modern aesthetic at our office located in the Lincoln Square neighborhood of Chicago, right next to the Western CTA Brown Line stop.",
    icon: <HiOutlineOfficeBuilding className={iconClassName} />,
    hoverIcon: <HiOfficeBuilding className={iconClassName} />,
  },
];

export const fadeIn = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1.25 },
    filter: "blur(0)",
  },
  hidden: {
    opacity: 0,
    filter: "blur(40px)",
  },
};

const Home: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <Hero />
      <ul className="flex flex-col md:flex-row md:justify-evenly lg:justify-center md: mt-12 lg:mt-24 md:mb-10">
        {HomePageLinks.map((link) => (
          <div
            key={link.href}
            className="h-96 border-b-[1px] border-zinc-300 last:border-none md:border-none mx-10 pt-4"
          >
            <LinkCard
              href={link.href}
              name={link.name}
              icon={link.icon}
              hoverIcon={link.hoverIcon}
              information={link.information}
            />
          </div>
        ))}
      </ul>
      <motion.div
        ref={ref}
        viewport={{ once: true }}
        animate={controls}
        initial="hidden"
        variants={fadeIn}
      >
        <DentalOffer />
      </motion.div>
      <p className="text-center font-extrabold text-brand-base">
        ________________
      </p>
      <h1 className="text-center font-medium text-4xl xl:text-3xl mt-14 md:mt-24 tracking-widest text-zinc-700">
        Patient Testimonials
      </h1>
      <div className="bg-zinc-200 relative mx-auto mt-24">
        <div className="relative max-w-md flex justify-center mx-auto">
          <div className="absolute max-w-md mx-auto text-[4rem] z-20 pt-4">
            <motion.div
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
              animate={
                isInView && {
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }
              }
              transition={{
                duration: 2,
                delay: 1,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: 0,
                repeatDelay: 1,
              }}
            >
              <RiDoubleQuotesL className="text-brand-lightest border-[1px] border-brand-lighter rounded-full bg-white" />
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl transform skew-y-[12deg] lg:rounded-xl mx-auto bg-brand-lighter/20 bg-clip-content bg-gradient-to-tr from-brand-lighter via-brand-base to-brand-lighter">
          <div className="transform -skew-y-[12deg] mb-24">
            <PatientTestimonials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
