import clsx from "clsx";
import { createRef, useState } from "react";
import { PATIENT_TESTIMONIALS } from "../../data/patient-testimonials";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const slideClassName =
  "h-[32rem] md:h-80 xl:h-[20rem] max-w-3xl rounded-lg shadow-lg bg-white";

const OfficeTour: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const refs = PATIENT_TESTIMONIALS.reduce((acc: any, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToSlide = (i: number) => {
    // Set the index of the image we want to see next
    setCurrentSlide(i);
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  const totalSlides = PATIENT_TESTIMONIALS.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousSlide method.
  const nextSlide = () => {
    if (currentSlide >= totalSlides - 1) {
      scrollToSlide(0);
    } else {
      scrollToSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide === 0) {
      scrollToSlide(totalSlides - 1);
    } else {
      scrollToSlide(currentSlide - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeftButton?: boolean) => (
    <button
      type="button"
      onClick={isLeftButton ? previousSlide : nextSlide}
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
      <div className={clsx("relative mt-12 w-full", slideClassName)}>
        <div
          className={clsx(
            "flex overflow-hidden snap-mandatory snap-x",
            slideClassName
          )}
        >
          {sliderControl(true)}
          {PATIENT_TESTIMONIALS.map((testimonial: any, i: any) => (
            <div
              key={testimonial.authorName}
              className={clsx(
                "flex flex-col w-full h-full flex-shrink-0 mb-10",
                slideClassName
              )}
              ref={refs[i]}
            >
              <div className="flex flex-col justify-between h-full w-[calc(10% - 10px)] mx-12 md:mx-24 text-zinc-700 text-shadow-sm shadow-zinc-300 pb-6">
                <div>
                  <div className="flex justify-center pt-12 pb-4">
                    {testimonial.rating.split("").forEach((i: any) => (
                      <AiFillStar
                        key={`${i} - star`}
                        className="text-amber-500 md:text-xl"
                      />
                    ))}
                    {testimonial.rating.split("").length === 4 ? (
                      <AiOutlineStar />
                    ) : testimonial.rating.split("").length === 3 ? (
                      <>
                        <AiOutlineStar /> <AiOutlineStar />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="mr-6 text-center font-extralight w-full">
                    {testimonial.review}
                  </p>
                </div>
                <div className="text-center">
                  <p className="pt-5 text-xl font-semibold">
                    {testimonial.authorName}
                  </p>
                  <p className="text-sm font-light pt-3">Patient</p>
                </div>
              </div>
            </div>
          ))}
          {sliderControl()}
        </div>
      </div>
    </div>
  );
};

export default OfficeTour;
