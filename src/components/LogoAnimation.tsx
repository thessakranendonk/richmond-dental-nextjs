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
    <div className="container">
      {/* <img src="/images/logo.svg" alt="logo" /> */}
    </div>
  );
};

export default LogoAnimation;
