import { useEffect, useRef } from "react";

export default function Quiz() {
  const pwdRef = useRef(null);

  useEffect(() => {
    pwdRef.current?.focus();
  }, []);

  return (
    <>
      <input type="password" ref={pwdRef} />
    </>
  );
}
