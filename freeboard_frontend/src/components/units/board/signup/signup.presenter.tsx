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

            {/* <s.Info_division>
              <s.Info_title>비밀번호 확인</s.Info_title>
              <InfoInput />
            </s.Info_division>

            <s.Info_division>
              <s.Info_title>휴대폰</s.Info_title>
              <s.Info_phone>
                <s.Wrapper_phone>
                  <s.Info_phone_number />
                  <s.Info_phone_number />
                  <s.Info_phone_number />
                  <Button02 title="인증번호 받기" />
                </s.Wrapper_phone>
                <s.Info_phone_certification>
                  <s.Certification_input />
                  <Button02 title="확인" />
                </s.Info_phone_certification>
              </s.Info_phone>
            </s.Info_division>
            <s.Info_division>
              <s.Info_title>주소</s.Info_title>
              <s.Info_address>
                <s.Info_address_find>
                  <s.Info_address_find_title />
                  <Button02 title="주소검색" />
                </s.Info_address_find>
                <s.Info_address_input />
                <s.Info_address_input />
              </s.Info_address>
            </s.Info_division> */}

            <Button01
              title="회원가입"
              type="submit"
              isValid={props.formState.isValid}
              color="#e9ecef"
              width="100%"
              onClick={""}
            />
          </form>
        </s.WrapperForm>

        <s.Extra_info></s.Extra_info>
        <s.ServiceCheck></s.ServiceCheck>
      </s.Main>
    </s.Wrapper>
  );
}
