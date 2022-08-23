import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  isLoadedState,
  restoreAccessTokenLoadable,
} from "../store";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  useEffect(() => {
    // if (!localStorage.getItem("accessToken")) {
    //   alert("로그인 후 이용 가능합니다.");
    //   router.push("/23-06-login-check-hoc");
    // }
    //
    //
    //
    //refreshToken이용할 때, 새로고침한 경우 withAuth안됨
    // 해결방법 1 -restoreAccessToken을 두번 요청하기
    // 같은 요청이 두번 가기때문에 비효율적임
    // if(!accessToken){
    //   getAccessToken().then((newAccessToken) => {
    //     if(newAccessToken){
    //       setAccessToken(newAccessToken);
    //     } else{
    //       alert("로그인 후 이용 가능합니다.");
    //       router.push("/23-06-login-check-hoc");
    //     }
    //   });
    // }
  }, []);

  // 해결방법2 - 나만의 로딩 활용하기
  // useEffect(() => {
  //   if (isLoaded && !accessToken) {
  //     alert("로그인 후 이용 가능합니다.");
  //     router.push("/23-06-login-check-hoc");
  //   }
  // }, [isLoaded]);
  //
  //
  //
  //
  // 해결방법3 - RecoilSelector 활용하기

  useEffect(() => {
    aaa.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        alert("로그인 후 이용 가능합니다.");
        router.push("/23-06-login-check-hoc");
      }
    });
  }, []);

  return <Component {...props} />;
};
