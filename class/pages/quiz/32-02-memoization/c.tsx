import { memo, useState } from "react";
function Child() {
  console.log("자식");
  const [state, setState] = useState(0);
  const onClickState = () => {
    setState(state + 1);
    console.log(state);
  };
  return (
    <>
      <div>====================</div>
      <h1>자식컴포넌트</h1>

      <button onClick={onClickState}>자식</button>
    </>
  );
}
export default memo(Child);
