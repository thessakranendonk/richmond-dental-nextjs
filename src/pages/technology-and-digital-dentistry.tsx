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

const TechnologyDiv = ({
  img,
  name,
  evenOrUneven,
  technology,
  description,
}: TechnologyImageProps) => {
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
      className="w-full"
    >
      <motion.div>
        <img
          key={name}
          src={img}
          alt={name}
          className={clsx(
            "xl:hidden mask mask-hexagon mask-center mx-auto z-10 h-32 md:h-72 mb-10"
          )}
        />

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

        <h2 className="font-semibold text-2xl mb-12">{technology}</h2>
        <p className="font-extralight text-md">{description}</p>
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

const Technology: React.FC = () => {
  return (
    <div className="w-[calc(10% - 10px)] mx-10 xl:mx-0 relative z-10">
      <h1 className="text-center my-12 font-semibold text-2xl xl:text-3xl">
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
