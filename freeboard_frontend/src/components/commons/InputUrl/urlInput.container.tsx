import React, { ChangeEvent } from "react";
import { YoutubeInput } from "./urlInput.styles";

interface IUrlInputContainerProps {
  InputFunction: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    title: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLInputElement>) => void;
    youtubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}

export default function UrlInputContainer(props: IUrlInputContainerProps) {
  return (
    <YoutubeInput
      placeholder="URL 입력"
      onChange={props.InputFunction.youtubeUrl}
    />
  );
}
