import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "../../queries";

export default function DeleteComment() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDeleteComment = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: "",
          boardCommentId: "",
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.name },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
  return <div></div>;
}
