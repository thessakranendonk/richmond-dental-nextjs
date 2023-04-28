import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RICHMOND_TECHNOLOGY } from "../../data/technology-digital-dentistry";
import { fadeInFromLeft, fadeInFromRight } from "./services";

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
            "mask mask-hexagon mask-center mx-auto -z-20 h-32 mb-10"
          )}
        />
        <h2 className="font-semibold text-2xl mb-12">{technology}</h2>
        <p className="font-extralight text-md">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const TechnologyLinks: React.FC = () => {
  return (
    <ul className="flex flex-wrap pb-12">
      {RICHMOND_TECHNOLOGY.map((link) => (
        <li key={link.technology} className="flex w-1/2 mx-auto">
          <Link href={link.href}>
            <img
              src={link.img}
              alt={link.technology}
              className="mask mask-hexagon mask-center -z-20 h-24"
            />
            <p className="font-extralight text-sm text-center py-4">
              {link.technology}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Technology: React.FC = () => {
  return (
    <div className="w-[calc(10% - 10px)] mx-10">
      <h1 className="text-center my-12 font-semibold text-2xl">
        Technology & Digital Dentistry
      </h1>
      <p className="font-extralight text-center mb-12">
        Technology has revolutionized dental care, and the services we offer are
        at the cutting-edge of dentistry. No matter how small or large your
        problem is, or if you only need dental maintenance, we can help.
      </p>
      <div>
        <TechnologyLinks />
      </div>
      <ul>
        {RICHMOND_TECHNOLOGY.map((tech, i) => (
          <li key={tech.technology} id={tech.id} className="pb-12">
            <AnimatePresence>
              <TechnologyDiv
                img={tech.img}
                name={tech.technology}
                evenOrUneven={i % 2 === 0}
                technology={tech.technology}
                description={tech.description}
              />
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technology;
