import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IQuery } from "../../../src/commons/types/generated/types";
import { withAuthQuiz } from "../../../src/components/commons/hocs/withAuthQuiz";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
function LoginSuccessQuiz() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <>
      <div>로그인 정보: 나는야{data?.fetchUserLoggedIn.name}</div>
    </>
  );
}

export default withAuthQuiz(LoginSuccessQuiz);
