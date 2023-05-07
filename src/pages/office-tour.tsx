import ImageGrid from "@/components/ImageGrid";
import clsx from "clsx";
import { createRef, useState } from "react";

export const images = [
  "https://res.cloudinary.com/dybcfr6cd/image/upload/v1682719836/richmond-dental/DSC5532-1024x683_a7esph.jpg",
  "https://res.cloudinary.com/dybcfr6cd/image/upload/v1682719836/richmond-dental/DSC5531-1024x406_lcywiq.jpg",
  "https://res.cloudinary.com/dybcfr6cd/image/upload/v1682719836/richmond-dental/DSC5543-1024x683_zdp76h.jpg",
  "https://res.cloudinary.com/dybcfr6cd/image/upload/v1682719836/richmond-dental/DSC5528-1024x683_lvobjn.jpg",
  "https://res.cloudinary.com/dybcfr6cd/image/upload/v1682719835/richmond-dental/DSC5539-1024x683_wu3sec.jpg",
  "https://res.cloudinary.com/dybcfr6cd/image/upload/v1682719835/richmond-dental/DSC5549-1024x683_nrr2jj.jpg",
  "https://res.cloudinary.com/dybcfr6cd/image/upload/v1682719835/richmond-dental/DSC5562-1024x683_zosyut.jpg",
  "https://res.cloudinary.com/dybcfr6cd/image/upload/v1682719836/richmond-dental/DSC5529_zja6ud.jpg",
  "https://res.cloudinary.com/dybcfr6cd/image/upload/v1682719835/richmond-dental/DSC5580-1024x833_pnj8qn.jpg",
  "https://res.cloudinary.com/dybcfr6cd/image/upload/v1682719835/richmond-dental/DSC5581-1024x683_bp6v5w.jpg",
  "https://res.cloudinary.com/dybcfr6cd/image/upload/v1682719835/richmond-dental/DSC5599-1024x683_sxjuqy.jpg",
];

const photoClassName =
  "h-64 md:h-96 xl:h-[29rem] max-w-3xl rounded-lg shadow-lg";

const OfficeTour: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const refs = images.reduce((acc: any, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToImage = (i: number) => {
    // Set the index of the image we want to see next
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeftButton?: boolean) => (
    <button
      type="button"
      onClick={isLeftButton ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeftButton ? "left-2" : "right-2"}`}
      style={{ top: "45%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeftButton ? "left" : "right"}`}>
        {isLeftButton ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center w-[calc(10% - 10px)] mx-5 lg:mx-auto pb-8"
      )}
    >
      <h1 className="text-center my-12 font-semibold text-2xl xl:text-3xl">
        Our Practice
      </h1>
      <div className={clsx("relative mt-12", photoClassName)}>
        <div
          className={clsx(
            "flex overflow-x-hidden snap-mandatory snap-x",
            photoClassName
          )}
        >
          {sliderControl(true)}
          {images.map((img, i) => (
            <div
              className="w-full flex-shrink-0"
              key={img}
              ref={refs[i]}
              id={i.toString()}
            >
              <img
                src={img}
                className={clsx("object-cover w-full h-full", photoClassName)}
                alt="Our Practice"
              />
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
      <div className="mt-8 max-w-3xl">
        <ImageGrid />
      </div>
    </div>
  );
};

export default OfficeTour;
