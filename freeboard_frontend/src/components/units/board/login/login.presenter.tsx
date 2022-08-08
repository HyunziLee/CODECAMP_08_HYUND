import { useForm } from "react-hook-form";
import * as s from "../../../../../styles/login.styles";
import Button01 from "../../../commons/button/01";
import Input01 from "../../../commons/input/01";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 아닙니다.")
    .required("이메일을 입력하세요"),
  password: yup
    .string()
    .min(1, "최소 1자리 이상 입력하세요")
    .max(8, "8자리 이하로 입력하세요")
    .required("비밀번호를 입력하세요")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "영문, 숫자, 특수문자는 필수 입력 값입니다."
    ),
});
export default function LoginUI(props) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickButton = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onClickButton)}>
        <s.Wrapper>
          <s.WrapperForm>
            <s.Login_text>로그인</s.Login_text>
            <s.Wrapper_login>
              <s.Login__text>EMAIL</s.Login__text>
              <Input01 type="text" register={register} />

              {/* <input type="text" {...register("email")} /> */}
              <div>{formState.errors.email?.message}</div>
              <s.Login__text>PASSWORD</s.Login__text>
              {/* <Input01 type="password" {...register("password")} /> */}
              <input type="text" {...register("password")} />
              <div>{formState.errors.password?.message}</div>

              <s.Login_info>
                <s.Login_remember_id>아이디 기억하기</s.Login_remember_id>
                <s.Login_find>
                  <s.Login_find_id>아이디 찾기 /</s.Login_find_id>
                  <s.Login_find_pw>비밀번호 찾기</s.Login_find_pw>
                </s.Login_find>
              </s.Login_info>
            </s.Wrapper_login>
            {/* <button onClick={props.onClickLogin}>로그인</button> */}
            <button>로그인</button>
            <Button01 title="로그인" />
            {/* <Button01 title="회원가입" /> */}
          </s.WrapperForm>
        </s.Wrapper>
      </form>
    </>
  );
}
