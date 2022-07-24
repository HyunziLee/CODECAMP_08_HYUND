import { useMutation } from "@apollo/client";
import { Button, Popover } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CommentUpdate from "../list/CommentUpdate";
import { FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from "../../queries";

export default function PopoverPage(props) {
  //props.data = fetchBoardComment임

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [pwdState, setPwdState] = useState(false);
  const [inputState, setInputState] = useState(false);
  const [commentContents, setCommentContents] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const router = useRouter();

  const content = (
    <div>
      <div>비밀번호를 입력하세요</div>
      <input
        type="text"
        onChange={(e) => {
          onChangeInput(e);
        }}
      ></input>

      <button
        onClick={async () => {
          setPwdState(false);
          setPwdMsg("");
          // console.log(props.data._id);
          console.log(props.password);
          try {
            const result = await updateBoardComment({
              variables: {
                boardCommentId: props.data._id,
                password: props.password,
                updateBoardCommentInput: {
                  contents: commentContents,
                  rating: 3.0,
                },
              },
              refetchQueries: [
                {
                  query: FETCH_BOARD_COMMENTS,
                  variables: { boardId: router.query.name },
                },
              ],
            });
            // console.log(props.data._id);
            setInputState(true);
            console.log(result.data);
          } catch (error) {
            if (error instanceof Error) {
              setPwdState(true);
              setPwdMsg(error.message);
              setInputState(false);
            }
          }
        }}
      >
        확인
      </button>
      {pwdState ? <div>{pwdMsg}</div> : ""}
      {inputState ? (
        <>
          <div>수정할 내용을 입력하세요</div>
          <input
            onChange={(e) => {
              setCommentContents(e.target.value);
            }}
            type="text"
          ></input>
        </>
      ) : (
        ""
      )}
    </div>
  );

  const onChangeInput = (e) => {
    props.setPassword(e.target.value);
  };

  return (
    <>
      <Popover content={content} title="댓글수정" trigger="click">
        <Button>수정하기</Button>
      </Popover>
      <CommentUpdate data={props.data}></CommentUpdate>
    </>
  );
}
