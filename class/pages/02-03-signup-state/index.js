import { useState } from 'react';
export default function SignupStatePage(){

  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [emailError, setEmailError] = useState('');

  function onChangeEmail(event){
    //event.target은 이벤트 발생한 해당 태그를 뜻함
    setEmail(event.target.value);
  }

  function onChangePassword(event){
    setPassword(event.target.value)
  }

  function onClickSignup(event){
    //포장이 잘 되었는지 확인해보기
    console.log(email, password);

    // 검증하기
    if(email.includes('@')===false){
      //alert('이메일 형식이 올바르지 않습니다.');
      setEmailError('이메일 형식이 아닙니다.')

    } else {
      // 백엔드 컴퓨터에 api함수 요청하기
      alert('회원가입을 축하합니다.');
    }
  }

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail}/><br />
      <div>{emailError}</div>
      비번: <input type="password" onChange={onChangePassword}/><br />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  )
}