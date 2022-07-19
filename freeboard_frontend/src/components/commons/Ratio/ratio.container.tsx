import type { RadioChangeEvent } from "antd";
import React, { useState } from "react";
import RatioUI from "./ratio.presenter";

export default function RatioContainer(props) {
  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <RatioUI value={value} onChange={onChange}></RatioUI>
    </>
  );
}
