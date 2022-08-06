import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "../queries";
import LoginUI from "./login.presenter";

export default function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const client = useApolloClient();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });

    const accessToken = result.data?.loginUser.accessToken;
    console.log(accessToken);
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      return;
    }

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });

    const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // stringify: 객체를 json으로

    router.push(`/MyAccount`);
  };

  return (
    <>
      <LoginUI
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onClickLogin={onClickLogin}
      />
    </>
  );
}
