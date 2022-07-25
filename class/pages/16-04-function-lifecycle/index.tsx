import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionCounterPage() {
  const router = useRouter();
  const [count, setCount] = useState(5);

  // componentDidMount() {
  //   console.log("그려지고나서 실행");
  // }

  // componentDidUpdate() {
  //   console.log("변경되고 나서 실행");
  // }

  // componentWillUnmount() {
  //   console.log("사라질 때 실행");
  // }

  // useEffect함수는 무조건 처음 1회는 실행됨, 의존성 배열 유무에 따라 또 실행될 수 있음
  // useEffect는 가장 마지막에 실행됨
  useEffect(() => {
    console.log("그려지고나서 실행");
  }, []);
  // 🔺 의존성 배열(dependencyArray) ,[]안에 값이 없으면 처음만 1회 실행되고 그 이후 실행 안됨, []안에 값이 있으면 안의 값이 변경될 때마다 useEffect가 실행됨

  useEffect(() => {
    console.log("변경되고나서 실행");
  });

  useEffect(() => {
    return console.log("변경되고나서 실행");
  }, []);

  /*
  // 1. 하나로 합치기 가능
  useEffect(() => {
    console.log("그려지고나서 실행");

    return console.log("변경되고나서 실행");
  }, []);

  // 2. useEffect 잘못된 사용 예제 (1. 추가 rendering 발생, 2. 무한루프 발생)
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [count]);

*/

  const counterUp = () => {
    setCount(1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={counterUp}>카운트올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
