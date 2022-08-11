export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("시작");
    setTimeout(() => {
      console.log("1초뒤에 실행됨");
    }, 0);

    let sum = 0;
    for (let i = 0; i <= 9000000000; i++) {
      sum = sum + 1;
    }

    console.log("종료");
  };

  return <button onClick={onClickTimer}>setTimeOut 실행 시키기</button>;
}
