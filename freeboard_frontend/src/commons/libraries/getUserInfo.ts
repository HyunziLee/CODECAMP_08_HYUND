import { GraphQLClient } from "graphql-request";
import { FETCH_USER_LOGGED_IN } from "../../components/units/board/queries";

export async function getUserInfo(parm) {
  console.log(parm);
  try {
    const graphQlClient = new GraphQLClient(
      "https://backend08.codebootcamp.co.kr/graphql",
      { credentials: "include", headers: { Authorization: `Bearer ${parm}` } }
    );
    const result = await graphQlClient.request(FETCH_USER_LOGGED_IN);

    const newUserInfo = result.fetchUserLoggedIn;
    console.log(newUserInfo);

    return newUserInfo;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
