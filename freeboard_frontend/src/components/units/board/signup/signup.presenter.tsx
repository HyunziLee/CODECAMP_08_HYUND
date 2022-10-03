import * as s from "./signup.styles";
import Button01 from "../../../commons/button/01";
import Warning from "../../../commons/div/01-warning";

import Input02 from "../../../commons/input/02";
import { ISignupProps } from "./signup.types";

export default function SignUpUI(props: ISignupProps) {
  return (
    <s.Wrapper>
      <s.Main>
        <s.WrapperForm>
          <form
            onSubmit={props.handleSubmit(props.onClickSignUp)}
            style={{ width: "90%" }}
          >
            <s.Title>회원가입</s.Title>
            <s.InfoWrapper>
              <s.InfoText>이름</s.InfoText>
              <s.InputWrapper>
                <Input02
                  type="text"
                  register={props.register}
                  name="name"
                  width="100%"
                  defaultValue=""
                />
                <Warning errormsg={props.formState.errors.name?.message} />
              </s.InputWrapper>
            </s.InfoWrapper>

            <s.InfoWrapper>
              <s.InfoText>이메일</s.InfoText>
              <s.InputWrapper>
                <Input02
                  type="text"
                  register={props.register}
                  name="email"
                  width="100%"
                  defaultValue=""
                />
                <Warning errormsg={props.formState.errors.email?.message} />
              </s.InputWrapper>
            </s.InfoWrapper>

            <s.InfoWrapper>
              <s.InfoText>비밀번호</s.InfoText>
              <s.InputWrapper>
                <Input02
                  type="password"
                  register={props.register}
                  name="password"
                  width="100%"
                  defaultValue=""
                />
                <Warning errormsg={props.formState.errors.password?.message} />
              </s.InputWrapper>
            </s.InfoWrapper>

            <Button01
              title="회원가입"
              type="submit"
              isValid={props.formState.isValid}
              bgColor="#111"
              fontColor="#fff"
              width="100%"
              onClick={props.onClickSignUp}
            />
          </form>
        </s.WrapperForm>

        <s.ServiceCheck></s.ServiceCheck>
      </s.Main>
    </s.Wrapper>
  );
}
