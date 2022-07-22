import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // useState 화면이 렌더 될 때는 useState의 state값이 변경되야함.

  const onClickEdit = (e: MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    const aaa = [...myIndex];
    aaa[e.target.id] = true;
    setMyIndex(aaa);
  };

  return (
    <>
      {data?.fetchBoards.map((el, i) => (
        <div key={el._id}>
          {myIndex[i] === false && (
            <Row key={el._id}>
              <Column>{el.writer}</Column>
              <Column>{el.contents}</Column>
              <button id={String(i)} onClick={onClickEdit}>
                수정하기
              </button>
            </Row>
          )}
          {myIndex[i] === true && (
            <div>
              수정할 내용: <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
