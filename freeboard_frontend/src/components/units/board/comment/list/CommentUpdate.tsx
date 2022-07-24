import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { UPDATE_BOARD_COMMENT } from "../../queries";

export default function CommentUpdate(props) {
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const router = useRouter();

  const SubmitPassword = async () => {
    try {
      const result = await updateBoardComment({
        variables: {
          updateBoardInput: {
            contents: "ㅇㅇ",
            raiting: "3",
          },
          boardId: props.data._id,
          password: "111",
        },
      });
    } catch (error) {}
  };

  return <></>;
}
