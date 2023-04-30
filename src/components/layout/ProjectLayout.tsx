import { NavigationLink } from "@/types/component-types";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { Content } from "./project-layout/Content";
import Footer from "./project-layout/Footer";
import Header from "./project-layout/Header";
import { Wrapper } from "./project-layout/Wrapper";
import logo from "../../../public/richmond2.png";
import { useRouter } from "next/router";
import { SERVICES_DROPDOWN } from "../../../data/services";
import { TECHNOLOGY_DROPDOWN } from "../../../data/technology-digital-dentistry";

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
    {
      name: "TECHNOLOGY & DIGITAL DENTISTRY",
      href: "/technology-and-digital-dentistry",
      dropdown: TECHNOLOGY_DROPDOWN,
    },
    { name: "ABOUT US", href: "/about-us" },
    { name: "FORMS", href: "/forms", dropdown: [] },
  ];

  return (
    <Wrapper>
      <Header
        logo={logo.src}
        navigationLinks={navigationLinks}
        textClassName="group text-md transition-all duration-300 ease-in-out text-black font-light mx-8 text-zinc-600"
        linkClassName="flex bg-left-bottom pb-2 lg:text-md mb-3 pt-3"
        logoClassName="w-[calc(10% - 10px)] w-52 ml-2 mt-1"
        hoverClassName={clsx(
          "flex bg-left-bottom pb-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
        )}
        activeLinkClassName="text-emerald-600 lg:text-lg font-light mb-3 pt-3"
        currentActiveLocation={location.pathname}
      />
      <Content>{children}</Content>
      <Footer logo={logo.src} navigationLinks={navigationLinks} />
    </Wrapper>
  );
};
