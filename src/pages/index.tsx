import PatientTestimonials from "@/components/PatientTestimonials";
import { PATIENT_TESTIMONIALS } from "../../data/patient-testimonials";
import LinkCard from "@/components/ui/LinkCard";
import { RiServiceFill, RiServiceLine } from "react-icons/ri";
import { HiOfficeBuilding, HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdCamera, MdOutlineCamera } from "react-icons/md";
import DentalOffer from "@/components/DentalOffer";

const iconClassName = "w-24 h-24 text-emerald-700";
const HomePageLinks = [
  {
    href: "/services",
    name: "Services",
    information:
      "We can do everything a traditional dentist does with more precision and less waste to preserve and protect your healthy enamel.",
    icon: <RiServiceLine className={iconClassName} />,
    hoverIcon: <RiServiceFill className={iconClassName} />,
  },
  {
    href: "/technology-and-digital-dentistry",
    name: "Technology",
    information:
      "We can do everything a traditional dentist does with more precision and less waste to preserve and protect your healthy enamel.",
    icon: <MdOutlineCamera className={iconClassName} />,
    hoverIcon: <MdCamera className={iconClassName} />,
  },
  {
    href: "/office-tour",
    name: "Office",
    information:
      "You’ll enjoy a clean and modern aesthetic at our office located in the Lincoln Square neighborhood of Chicago, right next to the Western CTA Brown Line stop.",
    icon: <HiOutlineOfficeBuilding className={iconClassName} />,
    hoverIcon: <HiOfficeBuilding className={iconClassName} />,
  },
];
const Home: React.FC = () => {
  return (
    <div>
      <ul className="flex flex-col md:flex-row md:justify-evenly lg:justify-center">
        {HomePageLinks.map((link) => (
          <div
            key={link.href}
            className="h-96 border-b-[1px] border-zinc-300 last:border-none md:border-none mx-10"
          >
            <LinkCard
              href={link.href}
              name={link.name}
              icon={link.icon}
              hoverIcon={link.hoverIcon}
              information={link.information}
            />
          </div>
        ))}
      </ul>
      <div>
        <DentalOffer />
      </div>
      <div>
        <PatientTestimonials testimonials={PATIENT_TESTIMONIALS} />
      </div>
    </div>
  );
};

export default Home;
