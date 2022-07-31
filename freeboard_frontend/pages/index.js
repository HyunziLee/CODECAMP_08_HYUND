import React, { useEffect, useState } from "react";
import * as s from "../styles/home.styles";
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
  });

  const onHover = () => {
    setIsHover(!isHover);
  };

  const onClickGoHome = () => {
    router.push("/PostList/p");
  };

  return (
    <>
      {isPc && (
        <s.Wrapper>
          <s.Video autoPlay muted loop src={BgVideo} width={`2560px`}></s.Video>
          {isHover ? (
            <s.Video_text
              fontsize={`32px`}
              onMouseOver={onHover}
              width={`150px`}
              height={`150px`}
            >
              Hello
            </s.Video_text>
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
        <s.Wrapper className="container">
          <s.Video autoPlay muted loop src={BgVideo} width={`2560px`}></s.Video>

          {isHover ? (
            <s.Video_text
              fontsize={`32px`}
              onMouseOver={onHover}
              width={`150px`}
              height={`150px`}
            >
              Hello
            </s.Video_text>
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
      {isMobile && (
        <s.Wrapper>
          <s.Video autoPlay muted loop src={BgVideo} width={`390px`}></s.Video>
          {isHover ? (
            <s.Video_text
              fontsize={`10px`}
              onMouseOver={onHover}
              width={`60px`}
              height={`60px`}
            >
              Hello
            </s.Video_text>
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
      <s.Main_intro>
        <s.Intro_contents data-aos="fade-up" />
      </s.Main_intro>
    </>
  );
}
