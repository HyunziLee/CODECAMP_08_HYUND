import * as s from "../../../../../styles/login.styles";
import Button01 from "../../../commons/button/01";
import Input01 from "../../../commons/input/01";
export default function LoginUI(props) {
  return (
    <>
      <s.Wrapper>
        <s.Login_text>로그인</s.Login_text>
        <s.Wrapper_login>
          <s.Login__text>EMAIL</s.Login__text>
          {/* <Input01 /> */}
          <input type="text" onChange={props.onChangeEmail} />
          <s.Login__text>PASSWORD</s.Login__text>
          {/* <Input01 /> */}
          <input type="text" onChange={props.onChangePassword} />

          <s.Login_info>
            <s.Login_remember_id>아이디 기억하기</s.Login_remember_id>
            <s.Login_find>
              <s.Login_find_id>아이디 찾기 /</s.Login_find_id>
              <s.Login_find_pw>비밀번호 찾기</s.Login_find_pw>
            </s.Login_find>
          </s.Login_info>
        </s.Wrapper_login>
        <button onClick={props.onClickLogin}>로그인</button>
        {/* <Button01 title="로그인" />
        <Button01 title="회원가입" /> */}
      </s.Wrapper>
    </>
  );
}
