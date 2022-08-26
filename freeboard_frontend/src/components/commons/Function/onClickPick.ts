import { useMutation } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import {
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "../../units/board/queries";

export const onClickPick = async (parm) => {
  console.log(parm);
  try {
    const graphQlClient = new GraphQLClient(
      "https://backend08.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQlClient.request(TOGGLE_USED_ITEM_PICK);

    const newUserInfo = result.fetchUserLoggedIn;

    return newUserInfo;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};

// export const onClickPick = (parm) => {
//   const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
//   const result = toggleUsedItemPick({
//     variables: {
//       useditemId: String(parm),
//     },
//     refetchQueries: [
//       {
//         query: FETCH_USED_ITEM,
//         variables: {
//           useditemId: parm,
//         },
//       },
//     ],
//   });
//   return result;
// };
