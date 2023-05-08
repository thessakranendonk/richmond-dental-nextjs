import logo from "../../public/images/logo.svg";
import Image from "next/image";
import React from "react";

interface SvgProps {
  width: string;
  height: string;
  fill: string;
}

const LogoAnimation: React.FC<SvgProps> = ({ width, height, fill }) => {
  return (
    <div>
      <Image src={logo} alt="logo" width={100} height={100} />
    </div>
  );
};

export default LogoAnimation;
