import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const BackImage = styled.div`
  width: 640px;
  height: 1138px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;

 
  
  
`
export const LogoWrapper = styled.div`
  width: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 351px;
  
`

export const LogoIcon = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid yellow;
`
export const LogoName = styled.div`

  font-weight: 700;
  color: #fff;
  font-size: 30px;
`

export const InputWrapper = styled.div`
  width: 100%;
 
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputContentWrapper = styled.div`
  width: 85%;
  height: 70px;
  margin-top: 10px;
  & div {
    color: red;
    font-size: 10px;
  }
  
`

export const InputEmail = styled.input`
  width: 100%;
  height: 40px;
  background: none;
  border: none;
  border-bottom: 1px solid gray;
  
`

export const InputPassword = styled.input`
  width: 100%;
  height: 40px;
  background: none;
  border: none;
  border-bottom: 1px solid gray;
  
`

export const SignupBtn = styled.button`
  width: 540px;
  height: 76px;
  background: #FF1B6D;
  border-radius: 38px;
  border: none;
  opacity: 0.6;
  font-size: 25px;
  color: white;

  margin: 30px 0px;
`

export const FindWrapper = styled.div`
  width: 70%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  & div {
    color: white;
  }
  
  
`

export const Line = styled.div`
  width: 2px;
  height: 10px;
  border: 1px solid white;
`
export const KakaoBtn = styled.button`
  width: 540px;
  height: 76px;
  background: none;
  border-radius: 38px;
  border: 1px solid yellow;
  
  font-size: 25px;
  color: yellow;

  margin: 30px 0px;
`