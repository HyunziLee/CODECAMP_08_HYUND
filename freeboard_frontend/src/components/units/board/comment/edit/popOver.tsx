import { useMutation } from "@apollo/client";
import { Button, Popover, InputNumber } from "antd";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import {
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "../../queries";
import { IPopoverProps } from "../IBoardComment.types";
import * as s from "./popOver.styles";

export default function PopoverPage(props: IPopoverProps) {
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [pwdState, setPwdState] = useState(false);
  const [completeState, setcompleteState] = useState(false);
  const [commentContents, setCommentContents] = useState("");
  const [commentPwd, setCommentPwd] = useState("");
  const [commentRating, setCommentRating] = useState(props.data.rating);
  const [pwdMsg, setPwdMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const [deletePwd, setDeletePWd] = useState("");
  const [deletePwdMsg, setDeletePwdMsg] = useState("");
  const router = useRouter();

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDeleteComment = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: deletePwd,
          boardCommentId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.name },
          },
        ],
      });
      // props.isEditBtn();
    } catch (error) {
      if (error instanceof Error) {
        setDeletePwdMsg(error.message);
      }
    }
  };

  const contentDelete = (
    <s.Wrapper>
      <p>비밀번호를 입력하세요</p>
      <s.PasswordInput
        type="password"
        onChange={(e) => {
          setDeletePWd(e.target.value);
        }}
      />
      {deletePwdMsg ? <s.ErrorMsg>{deletePwdMsg}</s.ErrorMsg> : ""}
      <s.SubmitBtn onClick={onClickDeleteComment}>확인</s.SubmitBtn>
    </s.Wrapper>
  );

  const hide = () => {
    setVisible(false);
    setCommentPwd("");
    setCommentContents("");
  };

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  const onChange = (value: number) => {
    setCommentRating(value);
  };
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    props.setPassword(event.target.value);
    setCommentPwd(event.target.value);
  };

  const content = (
    <s.Wrapper>
      <s.WrapperContents>
        <div>수정할 내용을 입력하세요</div>
        <s.ContentsInput
          onChange={(e) => {
            setCommentContents(e.target.value);
          }}
        ></s.ContentsInput>
      </s.WrapperContents>

      <s.WrapperRating>
        <div>수정할 평점을 입력하세요</div>
        <InputNumber
          min={1}
          max={5}
          defaultValue={props.data.rating}
          onChange={onChange}
        />
      </s.WrapperRating>

      <s.WrapperPassword>
        <div>비밀번호를 입력하세요</div>
        <s.PasswordInput
          type="password"
          onChange={(e) => {
            onChangeInput(e);
          }}
        ></s.PasswordInput>
      </s.WrapperPassword>

      {!!commentContents && !!commentPwd ? (
        <s.SubmitBtn
          onClick={async () => {
            setPwdState(false);
            setcompleteState(false);
            setPwdMsg("");
            try {
              await updateBoardComment({
                variables: {
                  boardCommentId: props.data._id,
                  password: props.password,
                  updateBoardCommentInput: {
                    contents: commentContents,
                    rating: commentRating,
                  },
                },
                refetchQueries: [
                  {
                    query: FETCH_BOARD_COMMENTS,
                    variables: { boardId: router.query.name },
                  },
                ],
              });
              setcompleteState(true);
              hide();
            } catch (error) {
              if (error instanceof Error) {
                setPwdState(true);
                setPwdMsg(error.message);
              }
            }
          }}
        >
          확인
        </s.SubmitBtn>
      ) : (
        ""
      )}
      {pwdState ? <s.ErrorMsg>{pwdMsg}</s.ErrorMsg> : ""}
      {completeState ? (
        <s.CompleteMsg>수정이 완료되었습니다.</s.CompleteMsg>
      ) : (
        ""
      )}
    </s.Wrapper>
  );

  return (
    <>
      <Popover
        content={content}
        title="댓글수정"
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <Button>수정하기</Button>
      </Popover>

      <Popover content={contentDelete} title="댓글 삭제" trigger="click">
        <Button>x</Button>
      </Popover>
    </>
  );
}
