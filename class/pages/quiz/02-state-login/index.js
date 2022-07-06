import { useState } from 'react';
import {

  Wrapper,
  BackImage,
  LogoIcon,
  LogoName,
  LogoWrapper,
  InputWrapper,
  InputEmail,
  InputPassword,
  InputContentWrapper,
  SignupBtn,
  FindWrapper,
  Line,
  KakaoBtn,

} from '../../../styles/quiz0205';



export default function Quiz(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState('');
  const [emailFail, setEmailFail] = useState('');
  const [pwdFail, setPwdFail] = useState('');

  function Email(e){
    setEmail(e.target.value);
  }

  function Pwd(e){
    setPassword(e.target.value);
  }

  function SignupChk(){
    if(email.includes('@') === true && password.length>8 ){
      alert('가입 완료');
    }
    if(email.includes('@') === false){
      setEmailFail('잘못된 형식이다.')
    }
    if(password.length<8){
      setPwdFail('8자 이상 입력하시오')
    }

  }



  return(
    <div>
      <Wrapper>
        <BackImage>
          <LogoWrapper>
            <LogoIcon></LogoIcon>
            <LogoName>잇츠로드</LogoName>
          </LogoWrapper>

          <InputWrapper>
            <InputContentWrapper>
              <InputEmail type="text" onChange={Email}></InputEmail>
              <div>{emailFail}</div>
            </InputContentWrapper>
            <InputContentWrapper>
              <InputPassword type="password" onChange={Pwd}></InputPassword>
              <div>{pwdFail}</div>
            </InputContentWrapper>
          </InputWrapper>
          <SignupBtn onClick={SignupChk}>로그인</SignupBtn>
          <FindWrapper>
            <div>이메일찾기</div>
            <Line></Line>
            <div>비밀번호찾기</div>
            <Line></Line>
            <div>회원가입</div>
            
          </FindWrapper>
          <KakaoBtn>카카오톡으로 로그인</KakaoBtn>


          
        </BackImage>
      </Wrapper>
      
    </div>
  )
}

