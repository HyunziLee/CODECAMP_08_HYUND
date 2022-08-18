import { memo, useCallback, useMemo, useState } from "react";
import Child from "./c";

function Parent() {
  console.log("부모");
  let count = 0;
  const [state, setState] = useState(0);

  // useMemo(() => {
  //   return count;
  // }, []);

  const onClickLet = useCallback(() => {
    count += 1;
  }, []);

  const onClickState = useCallback(() => {
    setState((prev) => prev + 1);
  }, []);

  // const onClickState = useMemo(
  //   () => () => {
  //     setState((prev) => prev + 1);
  //     console.log(count);
  //     // console.log(state);
  //   },
  //   []
  // );

  return (
    <>
      <div>부모</div>
      <div>let 카운트{count}</div>
      <button onClick={onClickLet}>let 카운트 올리기</button>
      =============================
      <div>부모</div>
      <div>state 카운트{state}</div>
      {/* <button onClick={onClickState}>state 카운트 올리기</button> */}
      <button
        onClick={() => {
          setState(state + 1);
          console.log(state);
        }}
      >
        state 카운트 올리기
      </button>
      <Child state={state} />
    </>
  );
}
export default memo(Parent);
