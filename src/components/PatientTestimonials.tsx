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
    // <div>
    //   <h2>Patient Testimonials</h2>
    //   <div>
    //     {sliderControl(true)}
    //     {PATIENT_TESTIMONIALS.map((testimonial, i) => (
    //       <div key={i} ref={refs[i]}>
    //         <p>{testimonial.authorName}</p>
    //         <p>{testimonial.review}</p>
    //       </div>
    //     ))}
    //     {sliderControl()}
    //   </div>
    // </div>

    <div className="relative">
      <h2 className="mb-4 text-3xl font-bold">Patient Testimonials</h2>
      <div className="relative h-96 overflow-hidden">
        {sliderControl(true)}
        <div
          className="absolute h-full w-full flex"
          style={{ left: `-${currentReview * 100}%` }}
        >
          {PATIENT_TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              ref={refs[i]}
              className="h-full w-full flex-shrink-0 px-4 py-2"
            >
              <p className="mb-2 text-lg font-medium">
                {testimonial.authorName}
              </p>
              <p className="text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>

        {sliderControl()}
      </div>
    </div>
  );
};

export default PatientTestimonials;
