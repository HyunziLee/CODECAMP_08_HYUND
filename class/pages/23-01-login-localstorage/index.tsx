import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { accessTokenState } from "../../src/components/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const router = useRouter();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;
    if (!accessToken) {
      alert("로그인에 실패했다. 튜라이 어게인");
      return;
    }
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken); // 임시사용 - 나중에 지울 예정

    alert("로그인 성공");
    router.push("/23-02-login-localstorage-success");
  };
  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비번: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}> 로그인</button>
    </>
  );
}
