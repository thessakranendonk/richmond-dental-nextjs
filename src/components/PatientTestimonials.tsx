import Slider from "react-slick";
import { useState, useEffect } from "react";

interface Testimonial {
  authorName: string;
  rating: string;
  review: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const PatientTestimonials: React.FC<Props> = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 5000); //change every 5 seconds
    return () => clearInterval(interval);
  }, [current, testimonials.length]);
  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <h3>{testimonial.authorName}</h3>
          <p>{testimonial.review}</p>
        </div>
      ))}
    </Slider>
  );
};

export default PatientTestimonials;
