import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  try {
    const graphQlClient = new GraphQLClient(
      "https://backend08.codebootcamp.co.kr/graphql/graphql04",
      { credentials: "include" }
    );

    const result = await graphQlClient.request(RESTORE_ACCESS_TOKEN);

    const newAccessToken = result.restoreAccessToken.accessToken;

    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
