import { useState, useEffect } from "react";

export const initialTestimonialState: PatientTestimonials = {
  authorName: "",
  rating: 0,
  text: "",
};

const PatientTestimonials = () => {
  const [reviews, setReviews] = useState<PatientTestimonials>(
    initialTestimonialState
  );
};
