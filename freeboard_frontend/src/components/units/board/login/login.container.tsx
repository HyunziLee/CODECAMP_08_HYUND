import { useApolloClient, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { userInfoState } from "../../../../commons/store";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "../queries";
import LoginUI from "./login.presenter";
import { schema } from "../../../commons/yup/login/index";
import { FormValue } from "./login.types";
import { Modal } from "antd";

export default function LoginContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState); // eslint-disable-line no-unused-vars

  const client = useApolloClient();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { register, handleSubmit, formState } = useForm<FormValue>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickLogin = async (data: FormValue) => {
    try {
      const result = await loginUser({
        variables: {
          email: String(data.email),
          password: String(data.password),
        },
      });

      if (!result) return;

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
        location.replace(`/myaccount`);
      } else {
        Modal.warning({ content: "로그인이 필요합니다." });
      }
    } catch (error) {
      if (error instanceof Error) Modal.warning({ content: error.message });
    }
  };

  return (
    <LoginUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  );
}
