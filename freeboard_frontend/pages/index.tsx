import React, { useEffect, useState } from "react";
import * as s from "../styles/randing.styles";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { SwapRightOutlined } from "@ant-design/icons";

export default function Home() {
  const BgVideo = "/video/bgWave.mp4";

  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const [isHover, setIsHover] = useState(true);
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);

  const onHover = () => {
    setIsHover(!isHover);
  };

  const onClickGoHome = () => {
    router.push("/main");
  };

  return (
    <>
      {isPc && (
        <s.Wrapper>
          <s.Video autoPlay muted loop src={BgVideo}></s.Video>
          {isHover ? (
            <s.VideoText
              fontsize={`32px`}
              onMouseOver={onHover}
              width={`150px`}
              height={`150px`}
            >
              Hello
            </s.VideoText>
          ) : (
            <s.GoHome
              onMouseLeave={onHover}
              fontsize={`25px`}
              onClick={onClickGoHome}
              width={`150px`}
              height={`150px`}
            >
              Go Home
              <SwapRightOutlined />
            </s.GoHome>
          )}
        </s.Wrapper>
      )}
      {isTablet && (
        <s.Wrapper>
          <s.Video autoPlay muted loop src={BgVideo}></s.Video>

          {isHover ? (
            <s.VideoText
              fontsize={`16px`}
              onMouseOver={onHover}
              width={`100px`}
              height={`100px`}
            >
              Hello
            </s.VideoText>
          ) : (
            <s.GoHome
              onMouseLeave={onHover}
              fontsize={`16px`}
              onClick={onClickGoHome}
              width={`100px`}
              height={`100px`}
            >
              Go Home
              <SwapRightOutlined />
            </s.GoHome>
          )}
        </s.Wrapper>
      )}
      {isMobile && (
        <s.Wrapper>
          
          {isHover ? (
            <s.VideoText
              fontsize={`10px`}
              onMouseOver={onHover}
              width={`60px`}
              height={`60px`}
            >
              Hello
            </s.VideoText>
          ) : (
            <s.GoHome
              onMouseLeave={onHover}
              fontsize={`8px`}
              onClick={onClickGoHome}
              width={`60px`}
              height={`60px`}
            >
              Go Home
              <SwapRightOutlined />
            </s.GoHome>
          )}
        </s.Wrapper>
      )}
   
    </>
  );
}
