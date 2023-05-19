import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/images/hero-image.jpg"
        className="w-full xl:h-[38rem] z-0 object-cover contrast-more"
        alt="Hero Image"
      />
      <div className="absolute inset-0 bg-brand-base/70 z-10 brightness-125"></div>

      <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-fadeIn transition duration-100">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-6xl font-medium tracking-widest text-white py-4 text-shadow-lg shadow-zinc-500">
            Richmond West Dental
          </h1>
          <p className="text-sm md:text-2xl text-white font-extralight pb-4 text-shadow-lg shadow-zinc-500">
            A modern, sophisticated and transparent dental office
          </p>
          <p className="text-sm md:text-lg font-extralight text-white text-shadow-lg shadow-zinc-500">
            Downtown Toronto | Queen West
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
