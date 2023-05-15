import { images } from "@/pages/office-tour";
import { motion } from "framer-motion";

const ImageGrid: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
      {images.map((img, i) => (
        <div className="h-auto max-w-full rounded-lg" key={img}>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href={`#${i.toString()}`}>
              <img
                id={i.toString()}
                src={img}
                className="rounded-full object-cover opacity-80 z-10 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24"
                alt="Our Practice"
              />
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
