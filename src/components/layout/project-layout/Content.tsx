import type { PropsWithChildren } from "react";
import clsx from "clsx";

export interface ContentProps {
  containerPaddingStyle?: string;
  extraClassName?: string;
}

/**
 * Content wrapper of ProjectLayout that sets responsive max widths, padding, etc. and renders its
 * children inside of a `<main>..</main>` block.
 */
export const Content: React.FC<PropsWithChildren<ContentProps>> = ({
  extraClassName,
  children,
}) => {
  return (
    <main
      className={clsx("flex-1 w-screen pb-12 xl:py-0 mx-0 z-0", extraClassName)}
    >
      {children}
    </main>
  );
};
