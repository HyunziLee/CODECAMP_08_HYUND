import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserArgs,
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";
import { accessTokenState } from "../../src/components/commons/store";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER_EXAMPLE);

  const router = useRouter();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUserExample({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data?.loginUserExample.accessToken;
    if (!accessToken) {
      alert("로그인에 실패했다. 튜라이 어게인");
      return;
    }
    setAccessToken(accessToken);
    alert("로그인 성공");
    router.push("30-02-login-refreshtoken-success");
  };
  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비번: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}> 로그인</button>
    </>
  );
}
