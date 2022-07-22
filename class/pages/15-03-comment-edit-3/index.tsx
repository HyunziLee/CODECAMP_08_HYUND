import { useQuery, gql } from "@apollo/client";

import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import BoardCommentItem from "../../src/components/units/15-board-comment-item";

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

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  // useState 화면이 렌더 될 때는 useState의 state값이 변경되야함.

  /* */
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </>
  );
}
