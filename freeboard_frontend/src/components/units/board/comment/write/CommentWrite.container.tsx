import CommentUI from "./CommentWrite.presenter";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "../../queries";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import ModalContainer from "../../../../commons/Modal/modal.container";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import CommentEdit from "../list/CommentList.container";

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
  const [isNull, setIsNull] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const commentModal = "이름, 비밀번호, 내용을 입력하세요";

  const commentInputFunc = {
    writer: (e: ChangeEvent<HTMLInputElement>) => {
      setWriter(e.target.value);
      console.log(contents);
    },
    password: (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    contents: (e: ChangeEvent<HTMLInputElement>) => {
      setContents(e.target.value);
    },
    rating: setRating,
  };

  const onClickCommentBtn = async () => {
    // 입력창이 하나라도 빈칸인 경우, 댓글이 등록되지 않으며, 모달창 발생

    if (!writer || !password || !contents) {
      setIsNull(true);
      return;
    }
    try {
      const result = await createBoardComment({
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
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
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

      <CommentEdit />

      {/* 댓글 입력창에 공란이 있을 경우, 모달창 발생 */}
      <ModalContainer
        isNull={isNull}
        commentModal={commentModal}
        isModal={isModal}
      />
    </>
  );
}
