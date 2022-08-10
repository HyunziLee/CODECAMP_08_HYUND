import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function Quiz() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  });
  return (
    <div>
      <div>작성자: {data ? data.fetchBoard.writer : "받아오는 중 입니다"}</div>
      <div>제목: {data && data.fetchBoard.title}</div>
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      )}
    </div>
  );
}
