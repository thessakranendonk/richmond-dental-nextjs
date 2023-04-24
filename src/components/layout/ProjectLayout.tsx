import { NavigationLink } from "@/types/component-types";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import Header from "./project-layout/Header";
import { Wrapper } from "./project-layout/Wrapper";
import logo from "../../../public/richmond2.png";
import { useRouter } from "next/router";
var generalJson = require("../../../data/dropdowns/general-dropdown.json");

/**
 * Responsive web UI layout for RheumInfo.
 * Includes a header with responsive navigation menu and a footer.
 */
export const ProjectLayout: React.FC<PropsWithChildren> = (
  { children },
  props
) => {
  const location = useRouter();

  const navigationLinks: Array<NavigationLink> = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    {
      name: "GENERAL",
      href: "/general",
      dropdown: generalJson,
    },
    { name: "COSMETIC", href: "/cosmetic" },
    { name: "FORMS", href: "/forms" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <Wrapper>
      <Header
        companyName="Daniel Medical Clinic"
        companyNameClassName=""
        logo={logo.src}
        navigationLinks={navigationLinks}
        dropdownBgColor="bg-white"
        arrowColor="text-emerald-400"
        textClassName="group text-md transition-all duration-300 ease-in-out text-black font-light mx-10"
        linkClassName="flex bg-left-bottom pb-2 lg:text-lg lg:tracking-wider mb-3 pt-3"
        logoClassName="w-[calc(10% - 10px)] sm:w-52 ml-2 mt-1"
        hoverClassName={clsx(
          "flex text-lg tracking-wider bg-left-bottom pb-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
        )}
        activeLinkClassName="text-emerald-600 lg:text-lg lg:tracking-wider font-light mb-3 pt-3"
        currentActiveLocation={location.pathname}
      />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};
