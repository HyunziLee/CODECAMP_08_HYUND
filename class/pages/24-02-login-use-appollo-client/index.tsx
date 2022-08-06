import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import {
  accessTokenState,
  userInfoState,
} from "../../src/components/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const router = useRouter();
  const client = useApolloClient();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    // 1.로그인해서 토큰 받아오기
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

    // 2. 로그인 토큰으로 유저 정보 받아오기
    // localStroage에 저장할 때, 정보가 올 때까지 기다려야하는데, 걍 유즈~써있는거는 await 안됨
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

    // 3. 글로벌 스테이트에 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken); // 임시사용 - 나중에 지울 예정
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); 

    // 4. 로그인 성공페이지로 이동하기

    alert("로그인 성공");
    router.push("/24-03-login-use-appollo-client-success");
  };
  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비번: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}> 로그인</button>
    </>
  );
}
