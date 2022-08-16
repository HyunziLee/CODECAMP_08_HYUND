import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgTag, setImageTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg";
    img.onload = () => {
      setImageTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  const onClickLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>image preload</button>
      =========================================================
      {isLoaded && (
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg"></img>
      )}
      <button onClick={onClickLoad}>image load</button>
    </>
  );
}
