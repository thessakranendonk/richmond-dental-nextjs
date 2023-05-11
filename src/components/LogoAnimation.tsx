import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Image from "next/image";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%)
  }
  to {
    opacity: 1;
    transform: translateX(0%)
  }
`;

const FadeInImage = styled(Image)`
  animation: ${fadeIn} 1s ease-in-out;
`;

const LogoAnimation = () => {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    setIsFadeIn(true);
  }, []);

  return (
    <div>
      {isFadeIn ? (
        <FadeInImage
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      ) : null}
    </div>
  );
};

export default LogoAnimation;
