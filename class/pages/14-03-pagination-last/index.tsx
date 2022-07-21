import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
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

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10)
    : 1;
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
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: Number(startPage - 10) });
  };
  // 마지막 페이지 이후, 페이지 번호는 출력되면 안됨
  // 1. 마지막 페이지 계산하기 =>(총개수 / 10)올림 하면 됨 => Math.ceil(fechBoardsCount / 10)
  // 2. 마지막 페이지가 포함된 상태일 때, 다음페이지 클릭 제한
  // 3. 마지막 페이지까지만 보이기
  const onClickNextPage = () => {
    // lastPage가 페이지 배열에 포함되어 있으면, 다음페이지 버튼 클릭 안되게

    // startPage + 10한 값이 lastPage를 넘으면 안됨 =>startPage를 누른다는 건 다음 10개의 목록을 보여주는건데, lastPage보다 크면 안됨
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      refetch({ page: Number(startPage + 10) });
    }

    // early-exit 패턴 🔻
    //  if(startPage + 10 > lastPage) return
    //  setStartPage((prev) => prev + 10);
    //  refetch({ page: Number(startPage + 10) });
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
      {new Array(10).fill(1).map((_, i) =>
        i + startPage <= lastPage ? (
          <span key={i + 1} id={String(i + startPage)} onClick={onClickPage}>
            {i + startPage}
          </span>
        ) : (
          <span></span>
        )
      )}
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
