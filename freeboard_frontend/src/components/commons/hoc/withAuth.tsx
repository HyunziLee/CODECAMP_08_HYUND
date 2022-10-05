import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  restoreAccessTokenLoadable,
  userInfoState,
} from "../../../commons/store";

export const withAuth = (Component: ComponentType) => <P extends {}>(props: P) => {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoState);

  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용가능 합니다.");
  //     router.push(`/Login`);
  //   }
  // }, []);

  useEffect(() => {
    if (!userInfo) {
      aaa.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인을 먼저 해주세요");
          router.push("/login");
        }
      });
    }
  }, []);

  return <Component {...props} />;
};
