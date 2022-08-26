import { useApolloClient, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { userInfoState } from "../../../commons/store";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "../queries";
import LoginUI from "./login.presenter";
import { schema } from "../../../commons/yup/login/index";

export default function LoginContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const router = useRouter();
  const client = useApolloClient();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickButton = async (data) => {
    const result = await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });

    const accessToken = result.data?.loginUser.accessToken;

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });

    const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

    setUserInfo(userInfo);
    if (userInfo) {
      router.push(`/MyAccount`);
    } else {
      alert("다시 로그인해주세요");
    }
  };

  return (
    <>
      <LoginUI
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onClickButton={onClickButton}
      />
    </>
  );
}
