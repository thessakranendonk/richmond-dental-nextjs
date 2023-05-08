import Slider from "react-slick";

interface Testimonial {
  authorName: string;
  rating: string;
  review: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}
