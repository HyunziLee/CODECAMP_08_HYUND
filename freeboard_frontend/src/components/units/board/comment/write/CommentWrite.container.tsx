import CommentUI from "./CommentWrite.presenter";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "../../queries";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";

import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import CommentEdit from "../list/CommentList.container";
import { Modal } from "antd";

export default function CommentContainer() {
  const router = useRouter();

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const commentInputFunc = {
    writer: (e: ChangeEvent<HTMLInputElement>) => {
      setWriter(e.target.value);
    },
    password: (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    contents: (e: ChangeEvent<HTMLTextAreaElement>) => {
      setContents(e.target.value);
    },
    rating: setRating,
  };

  const onClickCommentBtn = async () => {
    // 입력창이 하나라도 빈칸인 경우, 댓글이 등록되지 않으며, 모달창 발생

    if (!writer || !password || !contents) {
      Modal.error({ content: "모든 항목을 입력하십시오." });
      return;
    }
    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.name),
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
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
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <>
      <CommentUI
        onClickCommentBtn={onClickCommentBtn}
        commentInputFunc={commentInputFunc}
        rating={rating}
        contents={contents}
      ></CommentUI>

      <CommentEdit commentInputFunc={commentInputFunc} contents={contents} />
    </>
  );
}
