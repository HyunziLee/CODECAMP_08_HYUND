import * as s from "./login.styles";
import Button01 from "../../../commons/button/01";
import Warning from "../../../commons/div/01-warning";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import Input01 from "../../../commons/input/01";
import { ILoginUIProps } from "./login.types";

export default function LoginUI(props: ILoginUIProps) {
  const { onClickMovetoPage } = useMoveToPage();

  return (
    <s.Wrapper>
      <s.Main>
        <s.WrapperForm>
          <form
            onSubmit={props.handleSubmit(props.onClickLogin)}
            style={{ width: "90%" }}
          >
            <s.Text size="2rem" weight="800" align="center">
              로그인
            </s.Text>
            <s.InputWrapper>
              <s.Text size="1rem" weight="500" align="left">
                EMAIL
              </s.Text>
              <Input01
                type="text"
                register={props.register}
                name="email"
                width="100%"
              />

              <Warning errormsg={props.formState.errors.email?.message} />

              <s.Text size="1rem" weight="500" align="left">
                PASSWORD
              </s.Text>
              <Input01
                type="password"
                register={props.register}
                name="password"
                width="100%"
              />
              <Warning errormsg={props.formState.errors.password?.message} />
            </s.InputWrapper>

            <Button01
              title="로그인"
              type="submit"
              isValid={props.formState.isValid}
              onClick={props.onClickLogin}
              bgColor="#111"
              fontColor="#fff"
              width="100%"
            />
          </form>
          <Button01
            title="회원가입"
            type="button"
            onClick={onClickMovetoPage("/signup")}
            isValid={props.formState.isValid}
            bgColor="#f5f5f5"
            fontColor="#111"
            width="90%"
          />
        </s.WrapperForm>
      </s.Main>
    </s.Wrapper>
  );
}
