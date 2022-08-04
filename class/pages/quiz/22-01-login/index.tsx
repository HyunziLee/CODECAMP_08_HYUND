import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { accessTokenQuiz } from "../store";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reg, setReg] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenQuiz);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const router = useRouter();

  const onChangeEmail = (e) => {
    setReg(/^\w+@\w+\.\w+$/.test(e.target.value));
    console.log(reg);
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickLogin = async () => {
    if (!reg) {
      alert("올바른 메일형식을 입력하세요");
      return;
    }
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    console.log(result.data?.loginUser.accessToken);
    const accessToken = result.data?.loginUser.accessToken;
    if (!accessToken) {
      alert("로그인 실패 튜라이 어게인");
      return;
    }
    setAccessToken(accessToken);
    alert("로그인 성공");
    router.push(`/quiz/22-02-login-success`);
  };

  return (
    <>
      이메일 <input type="text" onChange={onChangeEmail} />
      {!reg ? <div style={{ color: "red" }}>메일 형식을 확인하세요</div> : ""}
      비밀번호 <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
