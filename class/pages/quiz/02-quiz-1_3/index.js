import { useState } from 'react';

export default function Quiz(){
  const [hi, setHi] = useState('안녕하세요');
  const [countNum, setCount] = useState(0);
  const [randomState, setRandomNum] = useState(0);


  // q2-1-1 안녕하세요-> 반갑습니다. let, getElementById 사용
  function hello(){
    document.getElementById('hi').innerText = '반갑습니다.'
  }

  // q2-1-2 안녕하세요-> 반갑습니다. state 사용
  function helloState(){
    setHi('반갑습니다.');

  }

  // q2-2-1 카운트 증가 let, getElementById 사용
  function count(){
    let count = parseInt(document.getElementById('number').innerText)+1;
    document.getElementById('number').innerText = count;
    
  }

  // q2-2-2 카운트 증가 useState 사용
  function countState(){
    setCount(countNum + 1);
  }

  // q2-3-1 random let, getElementById 사용
  function randomNum(){
    let random = String(Math.floor(Math.random()*1000000)).padStart(6,'0');
    console.log(random);

    document.getElementById('random').innerText = random;


  }

  function randomStateF(){
    setRandomNum(String(Math.floor(Math.random()*1000000)).padStart(6,'0'))

  }



  return(
    <div>
      <div id='hi'>안녕하세요</div>
      <button onClick={hello}>안녕하세요</button>

      <div>{hi}</div>
      <button onClick={helloState}>안녕하세요2</button>

      <div id='number'>0</div>
      <button onClick={count}>카운트 증가</button>

      <div>{countNum}</div>
      <button onClick={countState}>카운트 증가2</button>

      <div id='random'>00000</div>
      <button onClick={randomNum}>인증번호 전송</button>

      <div>{randomState}</div>
      <button onClick={randomStateF}>인증번호 전송 2</button>


    </div>
  )
}