import { useEffect, useRef, useState } from "react";

export default function Quiz() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg";

    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickImg = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };
  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickImg}>이미지 보여주기</button>
    </>
  );
}
