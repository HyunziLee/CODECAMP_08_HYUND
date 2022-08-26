import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
  userInfoState,
} from "../store";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용가능 합니다.");
  //     router.push(`/Login`);
  //   }
  // }, []);

  useEffect(() => {
    if (userInfo) return;
    else {
      aaa.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인을 먼저 해주세요");
          router.push("/Login");
        }
      });
    }
  }, []);

  return <Component {...props} />;
};
