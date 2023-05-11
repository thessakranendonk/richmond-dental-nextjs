import Image from "next/image";
import React, { useState, useEffect } from "react";
import "../styles/logoAnimations.module.css";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0%);
  }
  to {
    opacity: 0;
    transform: translateX(-50%);
  }
`;

const FadeInSvg = styled.svg`
  animation: ${fadeIn} 2s ease-in-out;
`;

const FadeOutSvg = styled.svg`
  animation: ${fadeOut} 2s ease-in-out;
`;

const LogoAnimation: React.FC = () => {
  const [isFadeIn, setIsFadeIn] = useState(false);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFadeIn(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleAnimationEnd = () => {
    setHasPlayedAnimation(true);
  };

  return (
    <div>
      <FadeInSvg>
        <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
      </FadeInSvg>
      <FadeOutSvg>
        <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
      </FadeOutSvg>
    </div>
  );
};

export default LogoAnimation;
