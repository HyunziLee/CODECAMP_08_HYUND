import * as s from "../../../../../styles/login.styles";
export default function LoginUI() {
  return (
    <>
      <s.Wrapper>
        <s.Login_text>로그인</s.Login_text>
        <s.Wrapper_login>
          <s.Login__text>ID</s.Login__text>
          <s.Login_input />
          <s.Login__text>PASSWORD</s.Login__text>
          <s.Login_input />
          <s.Login_info>
            <s.Login_remember_id>아이디 기억하기</s.Login_remember_id>
            <s.Login_find>
              <s.Login_find_id>아이디 찾기 /</s.Login_find_id>
              <s.Login_find_pw>비밀번호 찾기</s.Login_find_pw>
            </s.Login_find>
          </s.Login_info>
        </s.Wrapper_login>
        <s.Login_button>로그인</s.Login_button>
        <s.Login_button>회원가입</s.Login_button>
      </s.Wrapper>
    </>
  );
}
