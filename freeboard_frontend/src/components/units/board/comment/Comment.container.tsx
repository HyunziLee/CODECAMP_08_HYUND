import CommentUI from "./Comment.presenter";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "../queries";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import ModalContainer from "../../../commons/modal.container";

export default function CommentContainer() {
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);
  const [isNull, setIsNull] = useState(false);

  const commentInputFunc = {
    writer: (e) => {
      setWriter(e.target.value);
      console.log(writer);
    },
    password: (e) => {
      setPassword(e.target.value);
      console.log(password);
    },
    contents: (e) => {
      setContents(e.target.value);
      console.log(contents);
    },
    rating: setRating,
  };

  const onClickCommentBtn = async () => {
    //입력창에 하나라도 빈칸인 경우, 댓글이 등록되지 않으며, 모달창 발생
    if (!writer || !password || !contents) {
      setIsNull(true);
      return;
    }
    try {
      const result = await createBoardComment({
        variables: {
          boardId: router.query.name,
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: rating,
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
      alert(error.message);
    }
  };
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      // router.query.변수명=> 하위 폴더 [변수명]
      boardId: router.query.name,
    },
  });
  console.log(data);

  return (
    <>
      <CommentUI
        onClickCommentBtn={onClickCommentBtn}
        commentInputFunc={commentInputFunc}
        data={data}
        rating={rating}
      ></CommentUI>
      {/* 댓글 입력창에 공란이 있을 경우, 모달창 발생 */}
      <ModalContainer isNull={isNull}></ModalContainer>
    </>
  );
}
