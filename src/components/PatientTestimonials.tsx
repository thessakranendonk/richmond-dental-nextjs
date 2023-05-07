import { useState, useEffect } from "react";
import { google } from "googleapis";

export const initialTestimonialState: PatientTestimonials = {
  authorName: "",
  rating: 0,
  review: "",
};

const PatientTestimonials = () => {
  const [reviews, setReviews] = useState<PatientTestimonials>(
    initialTestimonialState
  );

  useEffect(() => {
      const getPlaceDetails = async () => {
          const client = google.maps.createClient({
              key: process.env
              Promise,
          });
      }
  })
};
