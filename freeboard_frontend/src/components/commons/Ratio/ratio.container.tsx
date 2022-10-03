import type { RadioChangeEvent } from "antd";
import React, { useState } from "react";
import RatioUI from "./ratio.presenter";
import { IRatioProps } from "./ratio.types";

export default function RatioContainer(props: IRatioProps) {
  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <RatioUI
      value={value}
      onChange={onChange}
      InputFunction={props.InputFunction}
      onChangeFileUrls={props.onChangeFileUrls}
      fileUrls={props.fileUrls}
    />
  );
}
