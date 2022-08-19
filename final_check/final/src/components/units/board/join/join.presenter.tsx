import * as s from "../../../../../styles/join.styles";
import Button01 from "../../../commons/button/01";
import Button02 from "../../../commons/button/02";
import Warning from "../../../commons/div/01-warning";
import Input02 from "../../../commons/input/02";
export default function JoinUI(props) {
  return (
    <>
      <s.Wrapper>
        <s.WrapperMain>
          <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
            <s.Basic_info>
              <s.Title>
                회원가입{" "}
                <span style={{ fontWeight: "400", fontSize: "32px" }}>
                  Sign Up
                </span>
              </s.Title>

              <s.Line />

              <s.Info_division>
                <s.Info_title>아이디</s.Info_title>
                <s.InputWrapper>
                  <Input02
                    type="text"
                    register={props.register}
                    name={"email"}
                  />
                  <Warning errormsg={props.formState.errors.email?.message} />
                </s.InputWrapper>
              </s.Info_division>

              <s.Info_division>
                <s.Info_title>비밀번호</s.Info_title>
                <s.InputWrapper>
                  <Input02
                    type="text"
                    register={props.register}
                    name={"password"}
                  />
                  <Warning
                    errormsg={props.formState.errors.password?.message}
                  />
                </s.InputWrapper>
              </s.Info_division>
              <s.Info_division>
                <s.Info_title>비밀번호 확인</s.Info_title>
                <s.InputWrapper>
                  <Input02
                    type="text"
                    register={props.register}
                    name={"passwordConfirm"}
                  />
                  <Warning
                    errormsg={props.formState.errors.passwordConfirm?.message}
                  />
                </s.InputWrapper>
              </s.Info_division>
              <s.Info_division>
                <s.Info_title>이름</s.Info_title>
                <s.InputWrapper>
                  <Input02
                    type="text"
                    register={props.register}
                    name={"name"}
                  />
                  <Warning errormsg={props.formState.errors.name?.message} />
                </s.InputWrapper>
              </s.Info_division>
              <s.ButtonWrapper>
                <Button02
                  title="회원가입"
                  type="submit"
                  isValid={props.formState.isValid}
                  color="#FFE004"
                  fontColor="#000"
                />
                <Button02
                  title="취소"
                  type="button"
                  isValid={props.formState.isValid}
                  color="#000"
                  fontColor="#fff"
                  onClick={props.onClickMovetoPage("/")}
                />
              </s.ButtonWrapper>
              <s.ExtraWrapper>
                <s.ExtraDiv>이미 아이디가 있으신가요?</s.ExtraDiv>
                <s.LinkLogin onClick={props.onClickMovetoPage("/Login")}>
                  로그인
                </s.LinkLogin>
              </s.ExtraWrapper>
            </s.Basic_info>
          </form>
        </s.WrapperMain>
      </s.Wrapper>
    </>
  );
}
