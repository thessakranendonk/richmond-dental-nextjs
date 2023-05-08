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
  "h-64 md:h-96 xl:h-[29rem] max-w-3xl rounded-lg shadow-lg";

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
    <div>
      <h2>Testimonials</h2>
      <div>
        {testimonials.map((testimonial: any, index: any) => (
          <div
            key={index}
            style={{ display: index === current ? "block" : "none" }}
          >
            <p>{testimonial.review}</p>
            <p>
              <strong>{testimonial.authorName}</strong>
            </p>
            <p className="text-yellow">{testimonial.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientTestimonials;
