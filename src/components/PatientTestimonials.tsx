import { useState, useEffect } from "react";
import clsx from "clsx";

interface Testimonial {
  authorName: string;
  review: string;
  rating: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const photoClassName =
  "h-32 md:h-80 xl:h-[20rem] max-w-3xl rounded-lg shadow-lg";

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
      <h2 className="text-center my-12 font-semibold text-2xl xl:text-3xl">
        Patient Testimonials
      </h2>
      <div className={clsx("relative mt-12", photoClassName)}>
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
              <p className="mt-16 ml-6 mr-6 text-center">
                {testimonial.review}
              </p>
              <div className="text-center">
                <p className="mt-5 text-base font-semibold">
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
