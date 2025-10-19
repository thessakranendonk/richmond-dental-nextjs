import { NavigationLink } from "@/types/component-types";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import Header from "./project-layout/Header";
import { Wrapper } from "./project-layout/Wrapper";
import logo from "../../../public/images/logo.svg";
import { useRouter } from "next/router";
import { SERVICES_DROPDOWN } from "../../../data/services";
import { TECHNOLOGY_DROPDOWN } from "../../../data/technology-digital-dentistry";
import { FORMS_DROPDOWN } from "../../../data/form-dropdown";

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
    { name: "SERVICES", href: "/services", dropdown: SERVICES_DROPDOWN },
    // {
    //   name: "TECHNOLOGY",
    //   href: "/technology-and-digital-dentistry",
    //   dropdown: TECHNOLOGY_DROPDOWN,
    // },
    { name: "ABOUT US", href: "/about-us" },
    // { name: "OFFICE TOUR", href: "/office-tour" },
    { name: "FORMS", href: "#", dropdown: FORMS_DROPDOWN },
  ];

  return (
    <Wrapper>
      <Header
        logo={logo.src}
        navigationLinks={navigationLinks}
        currentActiveLocation={location.pathname}
        textClassName="group text-md transition-all duration-300 ease-in-out text-black font-light mx-8 text-zinc-600"
        linkClassName="flex bg-left-bottom lg:text-md"
        logoClassName="sm:w-3/5 sm:ml-8 md:w-3/4 h-auto ml-2 mt-2 mr-1"
        hoverClassName={clsx(
          "flex bg-left-bottom hover:text-brand-lightest bg-gradient-to-r from-brand-lightest/40 to-brand-darkest bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
        )}
        activeLinkClassName="text-brand-lightest font-normal lg:text-lg font-light"
      />
      <Content>{children}</Content>
      <Footer logo={logo.src} navigationLinks={navigationLinks} />
    </Wrapper>
  );
};
