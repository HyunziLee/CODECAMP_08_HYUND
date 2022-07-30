import UploadImgUI from "./upload.presenter";

import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import React, { useState } from "react";

export default function UploadImgContainer() {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "",
    },
  ]);
  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <>
      <UploadImgUI
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      />
    </>
  );
}
