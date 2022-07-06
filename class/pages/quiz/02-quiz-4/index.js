import { useState } from 'react';
import { styled } from '@emotion/styled';

export default function Quiz(){


  const [email, setEmail] = useState('');;
  const [emailError, setEmailError] = useState('');
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [pwError, setPwError] = useState('');
  
  //조건 1. 이메일에 @가 없으면 에러
  //조건 2. 비밀번호와 비밀번호 확인이 다르면 에러
  //조건 3. 에러가 없는 입력에 해당하는 state는 빈값으로 반환
  //조건 4. 발생한 에러를 빨간색으로 하단에 표시

  /*
    조건 1. 
    input에 입력되는 값에 @ 유무를 확인=> onChange 사용
  */
 
  function emailInput(e){
    setEmail(e.target.value);

  };

  

  /*
    조건 2.
    pw 입력 1,2 state 저장,
    pw 입력 2 입력 시, onChange 실행,
    check 함수로 입력 1,2 비교
  */

  function PW1(e){
    setPw1(e.target.value);
    console.log(pw1)
  }
  function PW2(e){
    setPw2(e.target.value);
    console.log(pw2)
  }

  // 최종 확인
  function signupChk(){
    if(email.includes('@') === true && pw1 === pw2 ){
      alert('가입을 축하합니다.');
    } 
    if(email.includes('@') === false) {
      setEmailError('올바른 이메일 형식이 아닙니다.');

    } 
    if(pw1 !== pw2){
      setPwError('비밀번호가 일치하지 않습니다.')
    }
    
  }

 

  
  return(
    <div>
      <div>이메일</div>
      <input type="text" onChange={emailInput}/>
      <div style={{color: 'red', fontSize : '10px'}}>{emailError}</div>

      <div>비밀번호</div>
      <input type="password" onChange={PW1}/>
      <input type="password" onChange={PW2}/>
      <div style={{color: 'red', fontSize : '10px'}}>{pwError}</div>

      <button onClick={signupChk}>가입하기</button>
    </div>
  )
}