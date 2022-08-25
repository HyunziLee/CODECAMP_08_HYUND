import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../store";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용가능 합니다.");
  //     router.push(`/Login`);
  //   }
  // }, []);

  useEffect(() => {
    aaa.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        alert("로그인을 먼저 해주세요");
        router.push("/Login");
      }
    });
  }, []);

  return <Component {...props} />;
};
