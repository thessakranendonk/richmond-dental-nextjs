import { PropsWithChildren } from "react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300','400','500','600','700'], // pick what you actually use
  display: 'swap',
});

/**
 * Wrapper component for children of ProjectLayout that resets z-index and defines the base flex column layout.
 */
export const Wrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
<div className={`${montserrat.variable} min-h-screen overflow-hidden overflow-x-hidden`}>
      {children}
    </div>
  );
};
