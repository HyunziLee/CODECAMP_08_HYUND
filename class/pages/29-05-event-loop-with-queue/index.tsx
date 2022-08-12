export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("시작");
    // 비동기 작업(매크로큐에 들어감)
    setTimeout(() => {
      console.log("setTimeout 매크로큐 0초뒤에 실행됨");
    }, 0);

    // 비동기 작업(마이크로큐에 들어감)
    new Promise((resolve, reject) => {
      resolve("철수");
    }).then((res) => {
      console.log("promise 마이크로큐 0초뒤에 실행됨");
    });

    // 비동기 작업(매크로큐에 들어감)
    setInterval(() => {
      console.log("setInterval 매크로 0초 마다 실행됨");
    }, 0);

    // 비동기 작업(마이크로큐에 들어감)
    new Promise((resolve, reject) => {
      resolve("철수");
    }).then((res) => {
      console.log("promise 마이크로큐 0초뒤에 실행됨");
    });

    // 마이크로큐가 우선순위 더 높음

    let sum = 0;
    for (let i = 0; i <= 9000000000; i++) {
      sum = sum + 1;
    }

    console.log("종료");
  };

  return <button onClick={onClickTimer}>setTimeOut 실행 시키기</button>;
}
