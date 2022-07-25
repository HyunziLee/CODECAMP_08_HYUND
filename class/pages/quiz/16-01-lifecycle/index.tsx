import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Lifecycle() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  const [aa, setAA] = useState("");

  // useEffect(() => {
  //   console.log("rerendered");
  // }, []);

  useEffect(() => {
    console.log("Changed");
  });

  useEffect(() => {
    console.log("rerendered");
    return () => {
      console.log("bye");
    };
  }, []);

  const onClickChange = () => {
    setIsChange(!isChange);
    console.log(isChange);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <button onClick={onClickChange}>변경</button>

      <button onClick={onClickMove}>이동</button>
    </>
  );
}
