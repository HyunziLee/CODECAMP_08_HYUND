import { useState } from "react";
import Quiz from "./presenter";

export default function Container() {
  // quiz2-1
  // return <div>{Quiz({ child: "철수" })}</div>;

  // quiz2-2
  // return <>{Quiz({ child: "철수", age: 13 })}</>;

  // quiz2-3
  // ["철수", "영희", "훈이", "맹구"].map((index, i) => {
  //   console.log(`${index} ${i}번째 칸에 들어있습니다.`);
  // });

  // quiz2-4
  const [state, setState] = useState(0);

  setState((qwer) => qwer + 1);

  return <></>;
}
