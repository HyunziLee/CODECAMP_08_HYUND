import { gql, useApolloClient, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const client = useApolloClient();

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickButton}>클릭하슈</button>
      {/* <div>{data?.fetchUserLoggedIn.name} 환영</div>{" "} */}
    </>
  );
}
