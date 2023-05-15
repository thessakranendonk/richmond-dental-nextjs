import clsx from "clsx";
import { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RICHMOND_TECHNOLOGY } from "../../data/technology-digital-dentistry";
import {
  fadeInFromLeft,
  fadeInFromRight,
  ServiceLinks,
  ServiceList,
} from "./services";

export interface TechnologyImageProps {
  img: string;
  name: string;
  evenOrUneven: boolean;
  technology: string;
  description: string;
}
const Technology: React.FC = () => {
  return (
    <div className="w-[calc(10% - 10px)] mx-10 xl:mx-0 relative z-10 animate-fadeInFast transition">
      <h1 className="text-center my-12 font-semibold text-2xl xl:text-3xl text-shadow-lg shadow-zinc-300">
        Technology & Digital Dentistry
      </h1>
      <p className="font-extralight text-center mb-12 xl:max-w-xl xl:mx-auto xl:text-xl">
        Technology has revolutionized dental care, and the services we offer are
        at the cutting-edge of dentistry. No matter how small or large your
        problem is, or if you only need dental maintenance, we can help.
      </p>

      <ServiceLinks links={RICHMOND_TECHNOLOGY} />
      <ServiceList links={RICHMOND_TECHNOLOGY} />
    </div>
  );
};

export default Technology;
