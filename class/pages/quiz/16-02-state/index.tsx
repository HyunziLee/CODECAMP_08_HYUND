import Router, { useRouter } from "next/router";
import { Component, createRef, useEffect, useState } from "react";

export default function Quiz() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");
    return () => {
      alert("컴포넌트가 제거됩니다~");
    };
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  });

  const onClickButton = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <input type="password" />
      <div>카운트: {count}</div>
      <button onClick={onClickButton}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
