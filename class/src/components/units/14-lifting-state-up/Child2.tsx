export default function Child2(props: any) {
  // const onClickCountUp = () => {
  //   props.setCount((prev: any) => prev + 1);
  // };
  return (
    <div>
      <div>자식2의 카운트:{props.count}</div>
      <button onClick={props.onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
