import { createRef, useState } from "react";
import { PATIENT_TESTIMONIALS } from "../../data/patient-testimonials";

const PatientTestimonials: React.FC = () => {
  const [currentReview, setCurrentReview] = useState<Number>(0);

  const refs = PATIENT_TESTIMONIALS.reduce((acc: any, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});

  const scrollToReview = (i: number) => {
    // Set the index of the image we want to see next
    setCurrentReview(i);
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  const totalReviews = PATIENT_TESTIMONIALS.length;

  const nextReview = () => {
    if (currentReview >= totalReviews - 1) {
      scrollToReview(0);
    } else {
      scrollToReview(currentReview + 1);
    }
  };

  const previousReview = () => {
    if (currentReview === 0) {
      scrollToReview(totalReviews - 1);
    } else {
      scrollToReview(currentReview - 1);
    }
  };

  return <div></div>;
};

export default PatientTestimonials;
