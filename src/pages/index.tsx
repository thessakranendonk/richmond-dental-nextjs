import PatientTestimonials from "@/components/PatientTestimonials";
import { PATIENT_TESTIMONIALS } from "../../data/patient-testimonials";

const Home: React.FC = () => {
  return (
    <div>
      <PatientTestimonials testimonials={PATIENT_TESTIMONIALS} />
    </div>
  );
};

export default Home;
