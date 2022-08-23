import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "../../../../commons/gql";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { schema } from "../../../commons/yup/login";
import LoginUI from "./login.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function LoginContainer() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { onClickMovetoPage } = useMoveToPage();

  const router = useRouter();
  const client = useApolloClient();
  const [loginUser] = useMutation(LOGIN_USER);

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

    // if (!accessToken) {
    //   alert("로그인이 필요합니다.");
    //   return;
    // }

    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });

    const userInfo = resultUserInfo.data?.fetchUserLoggedIn;
    // console.log(userInfo);

    if (accessToken) setAccessToken(accessToken || "");
    // if (userInfo) setUserInfo(userInfo || {});
    setUserInfo(userInfo);

    router.push(`/`);
  };

  return (
    <>
      <LoginUI
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onClickButton={onClickButton}
        onClickMovetoPage={onClickMovetoPage}
      />
    </>
  );
}
