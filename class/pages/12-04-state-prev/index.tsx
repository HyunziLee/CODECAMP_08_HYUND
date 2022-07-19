import { useState } from "react";


export default function CounterStatePage(){

  const [count, setCount] = useState(0);

  function counterUp(){
    // prev는 임시 저장공간의 state 값을 의미 / prev값이 없으면 원래 state값을 가져옴
    setCount(prev=>prev +1)
   
  }
  function counterDown(){
    setCount(count-1);
  }
  
  return(
    <div>
      <div>{count}</div>
      <button onClick={counterUp}>카운트 올리기</button>
      <button onClick={counterDown}>카운트 내리기</button>
    </div>

  )
}