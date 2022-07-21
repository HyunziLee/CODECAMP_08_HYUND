import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
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

export default function StaticRoutedPage() {
  // 이전페이지 다음 페이지를 위한 기준 값임
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  /*
  
  refetch  방식
  1. 그냥 refetch
  2. mutation => refetch
  refetch에서는 variables없어도 됨
  
  */

  const onClickPage = (e: MouseEvent<HTMLSpanElement>) => {
    if (!(e.target instanceof HTMLSpanElement)) return;
    refetch({ page: Number(e.target.id) });
  };

  // 기준페이지를 잡고,
  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 10);
    refetch({ page: Number(startPage - 10) });
  };

  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10);
    refetch({ page: Number(startPage + 10) });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}

      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, i) => (
        <span key={i + 1} id={String(i + startPage)} onClick={onClickPage}>
          {i + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>

      {/* 안쓰이는 변수는 언더바 처리 하면됨 _
      {[1, 1,1,1,1,1,1,1,1,1].map((_, i) => (
        <span key={i + 1} id={String(i + 1)} onClick={onClickPage}>
          {i + 1}
        </span>
      ))} */}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}
      {/* <span id="1" onClick={onClickPage}>
        1{" "}
      </span>
      <span id="2" onClick={onClickPage}>
        2{" "}
      </span>
      <span id="3" onClick={onClickPage}>
        3{" "}
      </span> */}
    </>
  );
}
