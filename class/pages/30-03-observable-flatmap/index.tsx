import { Observable } from "@apollo/client";
import { from } from "zen-observable";

export default function ObservablePage() {
  const onClickButton = () => {
    // new Promise(()=>{

    // })
    // new Observable(()=>{

    // })
    from(["1 번 useQuery", "2 번 useQuery", "3번 useQuery"])
      .flatMap((el) => from([`${el} 결과에 q 적용`, `${el} 결과에 a 적용`]))
      .subscribe((el) => console.log(el));
  };
  return <button onClick={onClickButton}> 클릭</button>;
}
