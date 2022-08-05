import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { userInfoState } from "../../src/components/commons/store";
// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//     }
//   }
// `;

function LoginSuccessPage() {
  const router = useRouter();

  const [userInfo] = useRecoilState(userInfoState);
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용 가능합니다.");
  //     router.push("/23-03-login-check");
  //   }
  // }, []);

  return (
    <>
      <div>{userInfo.name}</div>{" "}
    </>
  );
}
export default withAuth(LoginSuccessPage);
