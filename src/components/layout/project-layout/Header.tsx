import HamburgerIcon from "@/components/ui/icons/HamburgerIcon";
import Button from "@/components/ui/inputs/Button";
import { HeaderProps } from "@/types/component-types";
import { Popover, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import LogoAnimation from "@/components/LogoAnimation";
import { AnimatePresence, motion } from "framer-motion";

export function useOnClickOutside<T extends HTMLDivElement>(
  ref: React.RefObject<T>,
  handler: (e: any) => void
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

/**
 * Header logo link pointing to the home ('/') route.
 */
const LogoLink: React.FC<
  Pick<
    HeaderProps,
    "onLinkClick" | "companyName" | "companyNameClassName" | "logo" | "alt"
  > & {
    logoClassName?: string;
    showSidePanel?: boolean;
  }
> = ({ onLinkClick, logoClassName }) => {
  return (
    <div className="hover:animate-spin">
      <Link
        href="/"
        className={clsx(
          "flex lg:inline-block relative",
          "focus:outline-none focus-visible:ring focus-visible:ring-black/20 focus-visible:border-transparent",

          logoClassName
        )}
        onClick={onLinkClick}
      >
        <LogoAnimation />
      </Link>
    </div>
  );
};

const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring",
    },
    display: "block",
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

/**
 * Header navigation links rendered as React `NavLink` siblings encapsulated within a fragment.
 *
 * Each individual link (anchor tag) has the given `linkClassName` applied as its className and the
 * optional `onLinkClick` set as its `onClick` handler.
 */
const MenuLinks: React.FC<
  Pick<
    HeaderProps,
    | "navigationLinks"
    | "currentActiveLocation"
    | "activeLinkClassName"
    | "linkClassName"
    | "hoverClassName"
    | "onLinkClick"
    | "textClassName"
  > & { onLinkClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void }
> = ({
  navigationLinks,
  currentActiveLocation,
  activeLinkClassName,
  textClassName,
  hoverClassName,
  linkClassName,
  onLinkClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul>
      {navigationLinks.map((link) => (
        <div key={link.name}>
          {link.name !== "FORMS" ? (
            <li key={link.name}>
              <Link
                href={link.href}
                className={clsx(
                  currentActiveLocation?.includes(link.href)
                    ? activeLinkClassName
                    : linkClassName,
                  hoverClassName,
                  textClassName,
                  "text-center lg:text-left border-b-[1px] font-light py-[0.75rem]",
                  "flex flex-col"
                )}
                onClick={onLinkClick}
              >
                {link.name}
              </Link>
            </li>
          ) : (
            <motion.div>
              <AnimatePresence>
                <div
                  className={clsx(
                    currentActiveLocation?.includes(link.href)
                      ? activeLinkClassName
                      : linkClassName,
                    hoverClassName,
                    textClassName,
                    "text-center lg:text-left font-light py-2",
                    "flex flex-col"
                  )}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  FORMS
                </div>

                {isOpen && (
                  <motion.div
                    key="dropdown-animation"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: {
                        rotateX: 0,
                        y: 0,
                        opacity: 1,
                        height: "auto",
                        transition: {
                          duration: 0.3,
                          mass: 0.8,
                          type: "spring",
                        },
                        display: "block",
                      },
                      collapsed: {
                        rotateX: -15,
                        y: -320,
                        opacity: 0,

                        transition: {
                          duration: 1,
                        },
                        transitionEnd: {
                          display: "none",
                        },
                      },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className={clsx(
                      "text-center lg:text-left font-light",
                      "flex flex-col"
                    )}
                  >
                    <div className="flex flex-col">
                      <p className="text-brand-lighter font-light text-lg">|</p>
                      {link.dropdown?.map((item) => (
                        <motion.div
                          key={item.name}
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{
                            duration: 0.8,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          }}
                          className={clsx(
                            "text-center lg:text-left font-light pb-2",
                            "flex flex-col"
                          )}
                        >
                          <Link
                            href={item.href}
                            onClick={onLinkClick}
                            className={clsx(
                              currentActiveLocation?.includes(link.href)
                                ? activeLinkClassName
                                : linkClassName,
                              hoverClassName,
                              textClassName,
                              "pb-2 text-brand-lighter font-light text-center lg:text-left py-[0.75rem]",
                              "flex flex-col",
                              isOpen
                                ? "opacity-100 transition-all"
                                : "opacity-0"
                            )}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      ))}
    </ul>
  );
};

const DesktopNavBar: React.FC<
  Pick<
    HeaderProps,
    | "onLinkClick"
    | "navigationLinks"
    | "linkClassName"
    | "hoverClassName"
    | "arrowColor"
    | "dropdownBgColor"
    | "activeLinkClassName"
    | "currentActiveLocation"
    | "textClassName"
  >
> = ({
  navigationLinks,
  currentActiveLocation,
  activeLinkClassName,
  textClassName,
  hoverClassName,
  arrowColor,
  dropdownBgColor,
  linkClassName,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [dropdownVariant, setDropdownVariant] = useState<string>("");
  const ref = useRef(null);
  const isShowing = isClick || isHover;
  useOnClickOutside(ref, () => {
    setIsClick(false);
  });

  return (
    <ul className="flex">
      {navigationLinks.map((link, i) => {
        return (
          <li key={link.name}>
            {!link.dropdown ? (
              <Link
                href={link.href}
                className={clsx(
                  currentActiveLocation?.includes(link.href)
                    ? activeLinkClassName
                    : linkClassName,
                  textClassName,
                  "text-center lg:text-left",
                  "flex flex-col"
                )}
                onClick={() => setIsClick(true)}
                onMouseLeave={() => {
                  setIsHover(false);
                }}
              >
                <span className={clsx(hoverClassName)}>{link.name}</span>
              </Link>
            ) : (
              <Popover as="div" className="h-full">
                {({ close, open }) => (
                  <>
                    <div
                      className="relative h-full transition-all duration-300 ease-in-out"
                      ref={ref}
                      onMouseEnter={() => {
                        if (link.dropdown) {
                          setIsHover(true);
                          setDropdownVariant(link.name);
                        }
                      }}
                      onMouseLeave={() => {
                        setIsHover(false);
                      }}
                      onClick={() => setIsClick(true)}
                    >
                      <Popover.Button
                        className={clsx(textClassName, linkClassName)}
                      >
                        <Link className={hoverClassName} href={link.href}>
                          {link.name}

                          {link.dropdown && (
                            <ChevronUpIcon
                              className={clsx(
                                "ml-2 -mr-1 h-5 w-5 mt-1",
                                arrowColor,
                                isHover && dropdownVariant === link.name
                                  ? "rotate-0"
                                  : "rotate-180"
                              )}
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </Popover.Button>
                    </div>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                      show={
                        link.name !== dropdownVariant ?? isClick
                          ? open
                          : isShowing
                      }
                      as={Fragment}
                    >
                      <Popover.Panel
                        className={clsx(
                          "absolute top-[4.75rem] mt-2 w-64 origin-top-right rounded-md bg-white shadow-md shadow-teal-800 ring-1 ring-black ring-opacity-5 focus:outline-none",
                          dropdownBgColor
                        )}
                        ref={ref}
                        onMouseEnter={() => {
                          if (link.dropdown) {
                            setIsHover(true);
                            setDropdownVariant(link.name);
                          }
                        }}
                        onMouseLeave={() => {
                          setIsHover(false);
                          setDropdownVariant("");
                        }}
                        onClick={() => setIsClick(true)}
                      >
                        <div className="px-10 py-2">
                          <ul>
                            <>
                              {link.dropdown?.map((droplink) => (
                                <li
                                  key={droplink.name}
                                  className="first:mb-2 last:pb-0 border-b-2 border-zinc-100 last:border-none"
                                >
                                  <Link
                                    href={droplink.href}
                                    className={textClassName}
                                  >
                                    <span className={hoverClassName}>
                                      {droplink.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </>
                          </ul>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const Header: React.FC<HeaderProps> = ({
  navigationLinks,
  companyName,
  companyNameClassName,
  linkClassName,
  hoverClassName,
  activeLinkClassName,
  currentActiveLocation,
  dropdownBgColor,
  arrowColor,
  textClassName,
  logo,
  logoClassName,
  alt,
}) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setIsClick(false);
  });

  return (
    <header className="fixed flex justify-between xl:justify-evenly w-screen items-center bg-white z-40 pb-2 md:pb-2 md:pl-4">
      <div className="m-0">
        {logo ? (
          <LogoLink logo={logo} alt={alt} logoClassName={logoClassName} />
        ) : (
          <Link href="/">
            <div className={clsx(companyNameClassName, "")}>{companyName}</div>
          </Link>
        )}
      </div>
      <div className="flex">
        <div className="sm:flex lg:hidden mt-1">
          <Button
            extraClassName={clsx(
              "bg-brand-base px-8 text-sm h-10 mt-1 text-white hover:text-brand-base hover:shadow-[inset_15rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow] rounded-lg border-2 border-brand-base"
            )}
            type="button"
            content="BOOK NOW"
            href="/new-appointment"
          />
        </div>
        <Popover className="lg:hidden">
          {({ open, close }) => (
            <>
              <Popover.Button
                className={clsx(
                  "flex px-6 mt-2",
                  "focus:outline-none focus:ring-1 focus-ring-inset focus:ring-black-100"
                )}
              >
                <span className="sr-only">'open-navigation-menu'</span>
                <HamburgerIcon />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-50 mt-10 w-screen -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl bg-white border-y-[2px] shadow-xl">
                  {({ close }) => (
                    <div>
                      <MenuLinks
                        navigationLinks={navigationLinks}
                        linkClassName={linkClassName}
                        hoverClassName={hoverClassName}
                        activeLinkClassName={activeLinkClassName}
                        currentActiveLocation={currentActiveLocation}
                        onLinkClick={() => close()}
                      />
                    </div>
                  )}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
      <div className="hidden lg:inline-flex mt-3">
        <DesktopNavBar
          navigationLinks={navigationLinks}
          textClassName={textClassName}
          dropdownBgColor={dropdownBgColor}
          arrowColor={arrowColor}
          linkClassName={linkClassName}
          hoverClassName={hoverClassName}
          activeLinkClassName={activeLinkClassName}
          currentActiveLocation={currentActiveLocation}
        />
      </div>
      <div className="hidden lg:flex">
        <Button
          extraClassName={clsx(
            "bg-brand-base px-8 text-sm h-12 mt-1 mr-2 text-white hover:text-brand-base hover:shadow-[inset_15rem_0_0_0] hover:shadow-white duration-[400ms] transition-[color,box-shadow] rounded-lg border-2 border-brand-base"
          )}
          type="button"
          content="BOOK NOW"
          href="/new-appointment"
        />
      </div>
    </header>
  );
};
export default Header;
