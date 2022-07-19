import { Input } from "antd";
import React, { useState } from "react";
import { YoutubeInput } from "./urlInput.styles";

export default function UrlInputContainer(props) {
  // const [youtubeInput, setYoutubeInput] = useState("");
  // const onChangeInput = (e) => {
  //   setYoutubeInput(e.target.value);
  // };
  // console.log(youtubeInput);
  return (
    <YoutubeInput
      placeholder="URL 입력"
      onChange={props.InputFunction.youtubeUrl}
    />
  );
}
