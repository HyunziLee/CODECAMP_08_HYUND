import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $endDate: DateTime
    $startDate: DateTime
    $search: String
    $page: Int
  ) {
    fetchBoards(
      endDate: $endDate
      startDate: $startDate
      search: $search
      page: $page
    ) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function Quiz() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit, getValues } = useForm();

  const onClickDelete = (boardId: string) => () => {
    deleteBoard({
      variables: {
        boardId,
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard;
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickButton = (d) => {
    // console.log(data)
    createBoard({
      variables: {
        createBoardInput: {
          writer: d.writer,
          password: d.password,
          title: d.title,
          contents: d.contents,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  console.log(getValues());

  // const onClickCreate = () => {
  //   creareBoard({
  //     variables: {
  //       createBoardInput: {
  //         writer: getValues().name,
  //         password: getValues().password,
  //         title: getValues().title,
  //         contents: getValues().contents,
  //       },
  //     },
  //     update(cache, { data }) {
  //       cache.modify({
  //         fields: {
  //           fetchBoards: (prev) => {
  //             return [data.createBoar, ...prev];
  //           },
  //         },
  //       });
  //     },
  //   });
  // };

  return (
    <>
      <form onSubmit={handleSubmit(onClickButton)}>
        작성자: <input {...register("writer")} />
        비밀번호: <input {...register("password")} />
        제목: <input {...register("title")} />
        내용: <input {...register("contents")} />
        <button>등록하기</button>
      </form>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>{el.contents}</Column>
          <Column onClick={onClickDelete(el._id)}>x</Column>
        </Row>
      ))}
      <div></div>
    </>
  );
}
