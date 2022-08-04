import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginSuccessQuiz() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  console.log(data?.fetchUserLoggedIn.name);
  const fetchName = data?.fetchUserLoggedIn.name;

  return (
    <>
      <div>로그인 정보: 나는야{fetchName}</div>
    </>
  );
}
