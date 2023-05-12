import { useState, useEffect } from "react";
import clsx from "clsx";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
interface Testimonial {
  authorName: string;
  review: string;
  rating: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const photoClassName =
  "h-45 md:h-80 xl:h-[20rem] max-w-5xl border hover:border-blue-200 relative";

const PatientTestimonials: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 5000); //change every 5 seconds
    return () => clearInterval(interval);
  }, [current, testimonials.length]);

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center w-full max-w-4xl mx-auto pb-8"
      )}
    >
      <h2 className="text-center tracking-widest my-2 font-medium text-2xl xl:text-5xl">
        Patient Testimonials
      </h2>
      <div className={clsx("relative mt-5", photoClassName)}>
        <div className="absolute left-1/2 top-2 transform -translate-x-1 -translate-y-1">
          <FaQuoteLeft size={20} className="text-orange-400" />
        </div>
        <div className="absolute bottom-1 left-1/2 transform translate-x-1 translate-y-1">
          <FaQuoteRight size={20} className="text-orange-400" />
        </div>
        <div
          className={clsx(
            "flex overflow-x-hidden snap-mandatory snap-x",
            photoClassName,
            "justify-center"
          )}
        >
          {testimonials.map((testimonial: any, index: any) => (
            <div
              key={index}
              style={{ display: index === current ? "block" : "none" }}
              className={clsx("flex flex-col items-center", photoClassName)}
            >
              <p className="pt-16 ml-6 mr-6 text-center font-light ">
                {testimonial.review}
              </p>
              <div className="text-center">
                <p className="pt-5 text-base font-semibold">
                  {testimonial.authorName}
                </p>
                <p className="text-gray-400 text-xs font-light">Patient</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientTestimonials;
