import { createRef, useState } from "react";
import { PATIENT_TESTIMONIALS } from "../../data/patient-testimonials";

const PatientTestimonials: React.FC = () => {
  const [currentReview, setCurrentReview] = useState<number>(0);

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

  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

  const sliderControl = (isLeftButton?: boolean) => (
    <button
      type="button"
      onClick={isLeftButton ? previousReview : nextReview}
      className={`${arrowStyle} ${isLeftButton ? "left-2" : "right-2"}`}
      style={{ top: "45%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeftButton ? "left" : "right"}`}>
        {isLeftButton ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div>
      <h2>Patient Testimonials</h2>
      <div>
        {PATIENT_TESTIMONIALS.map((testimonial, i) => (
          <div key={i} ref={refs[i]}>
            <p>{testimonial.authorName}</p>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientTestimonials;
