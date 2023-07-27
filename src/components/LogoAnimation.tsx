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
          alt="Richmond West Dental"
          width={150}
          height={150}
          priority={true}
          className=""
        />
      ) : null}
    </div>
  );
};

export default LogoAnimation;
