import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import { useRecoilState } from "recoil";
import { FETCH_USER_LOGGED_IN } from "../gql";
import { accessTokenState } from "../store";

export async function getUserInfo(parm) {
  console.log(parm);
  try {
    const graphQlClient = new GraphQLClient(
      "https://backend08.codebootcamp.co.kr/graphql/graphql04",
      { credentials: "include", headers: { Authorization: `Bearer ${parm}` } }
    );
    const result = await graphQlClient.request(FETCH_USER_LOGGED_IN);

    const newUserInfo = result.fetchUserLoggedIn;

    return newUserInfo;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
