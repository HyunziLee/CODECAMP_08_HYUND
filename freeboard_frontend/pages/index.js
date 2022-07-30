import React from "react";
import * as s from "../styles/home.styles";

export default function Home() {
  const BgVideo = "/video/bgWave.mp4";
  return (
    <>
      <s.Wrapper>
        <s.Video autoPlay muted loop src={BgVideo}></s.Video>
        <s.Video_text>hello</s.Video_text>
      </s.Wrapper>
    </>
  );
}
