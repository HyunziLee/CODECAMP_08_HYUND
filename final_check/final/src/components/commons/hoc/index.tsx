import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인을 먼저 해주세요");
      router.push("/Login");
    }
  }, []);

  return <Component {...props} />;
};
