import * as s from "../../../../../styles/login.styles";
import Button01 from "../../../commons/button/01";
import Warning from "../../../commons/div/01-warning";
import Input01 from "../../../commons/input/01";
export default function LoginUI(props) {
  return (
    <>
      <s.Wrapper>
        <s.WrapperForm>
          <form onSubmit={props.handleSubmit(props.onClickButton)}>
            <s.Login_text>로그인</s.Login_text>
            <s.Wrapper_login>
              <Input01
                type="text"
                register={props.register}
                name={"email"}
                ph="아이디"
              />
              <Warning errormsg={props.formState.errors.email?.message} />

              <Input01
                type="password"
                register={props.register}
                name={"password"}
                ph="비밀번호"
              />

              <Warning errormsg={props.formState.errors.password?.message} />
            </s.Wrapper_login>

            <Button01
              title="로그인"
              type="submit"
              isValid={props.formState.isValid}
              color="#FFE004"
            />
          </form>
          <s.ExtraWrapper>
            <s.ExtraDiv>아직 계정이 없으신가요?</s.ExtraDiv>
            <s.LinkLogin onClick={props.onClickMovetoPage("/Join")}>
              회원가입
            </s.LinkLogin>
          </s.ExtraWrapper>
        </s.WrapperForm>
      </s.Wrapper>
    </>
  );
}
