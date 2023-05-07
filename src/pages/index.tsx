import LinkCard from "@/components/ui/LinkCard";
import { RiServiceFill, RiServiceLine } from "react-icons/ri";
import { HiOfficeBuilding, HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdCamera, MdOutlineCamera } from "react-icons/md";
import logo from "../../public/richmond-logo.svg";

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
    <ul className="flex gap-20 justify-center">
      <img src={logo.src} />
      {HomePageLinks.map((link) => (
        <div className="h-96 max-w-full">
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
  );
};

export default Home;
