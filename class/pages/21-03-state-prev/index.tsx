import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);
  const onClickCount = () => {
    // // 1. 화살표함수
    // setCount((prev)=>prev+1)

    // // 2. 함수선언식
    // setCount(function (prev) {
    //   // 로직 추가 가능
    //   // if() 등
    //   // for() 등
    //   return prev + 1;
    // });

    // 3. 매개변수 바꿔보기
    setCount((asdf) => asdf + 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCount}>카운트올리기</button>
    </>
  );
}
