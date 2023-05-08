import logo from "../../public/images/logo.svg";
import Image from "next/image";
import React from "react";
import styles from "../styles/logoAnimations.module.css";

interface SvgProps {
  width: string;
  height: string;
  fill: string;
}

const LogoAnimation: React.FC<SvgProps> = ({ width, height, fill }) => {
  return (
    <div className={styles.container}>
      <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        className={`${styles.logo} ${styles.outline}`}
      >
        <path
          fill={fill}
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.7 14.3c-.2.2-.4.2-.6 0L12 13.4l-4.1 3.9c-.2.2-.4.2-.6 0l-.7-.7c-.2-.2-.2-.4 0-.6l4.8-4.8c.2-.2.4-.2.6 0l4.8 4.8c.2.2.2.4 0 .6l-.7.7z"
        />
      </svg>
    </div>
  );
};

export default LogoAnimation;
