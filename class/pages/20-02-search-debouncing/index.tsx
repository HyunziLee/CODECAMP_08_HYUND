import { useQuery, gql } from "@apollo/client";

import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
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
  // const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((value) => {
    refetch({ search: value, page: 1 });
  }, 1000);
  // 1초 이내에 입력이 들어오면 debounce안에 함수 무시됨

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // setSearch(e.target.value);
    getDebounce(e.target.value);
  };
  // 디바운싱(디바운스): 마지막 입력이 일어난 후, 특정 시간내에 다음 입력이 일어나지 않을 때 한번 실행
  // 쓰로틀링(쓰로틀): 입력이 일어난 후, 먼저 한번 실행하고, 특정 시간 동안 재실행 방지

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof HTMLSpanElement)) return;
    // refetch({ search, page: Number(event.target.id) });
    refetch({ page: Number(event.target.id) }); // 해당결과를 리페치하므로, 입력되지 않은 인자는 굳이 입력안해도, 그대로 재사용됨
  };

  return (
    <>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
