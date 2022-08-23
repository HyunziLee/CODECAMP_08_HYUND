import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    // if (!accessToken) {
    //   alert("로그인을 먼저 해주세요");
    //   router.push("/Login");
    // }
    aaa.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        alert("로그인을 먼저 해주세요");
        router.push("/Login");
      }
    });
  }, []);

  return <Component {...props} />;
};
