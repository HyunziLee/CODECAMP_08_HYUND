import { GraphQLClient } from "graphql-request";
import { FETCH_USER_LOGGED_IN } from "../../components/units/board/queries";

export async function getUserInfo(accessToken: string) {
  if (!accessToken) return;
  try {
    const graphQlClient = new GraphQLClient(
      "https://backend08.codebootcamp.co.kr/graphql/graphql04",
      {
        credentials: "include",
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const result = await graphQlClient.request(FETCH_USER_LOGGED_IN);

    const newUserInfo = result.fetchUserLoggedIn;

    return newUserInfo;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
