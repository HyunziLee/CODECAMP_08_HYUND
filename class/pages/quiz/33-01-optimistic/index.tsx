import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function Quiz() {
  const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">>(LIKE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: "62fc34ac03562900296b2d82",
      },
    }
  );

  const onClickCount = () => {
    likeBoard({
      variables: {
        boardId: "62fc34ac03562900296b2d82",
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: "62fc34ac03562900296b2d82" },
        },
      ],
      // optimisticResponse: {
      //   likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      // },
      // update(cache, { data }) {
      //   cache.writeQuery({
      //     query: FETCH_BOARD,
      //     variables: { boardId: "62fc34ac03562900296b2d82" },
      //     data: {
      //       fetchBoard: {
      //         _id: "62fc34ac03562900296b2d82",
      //         __type: "Board",
      //         likeCount: data?.likeBoard,
      //       },
      //     },
      //   });
      // },
    });
  };

  return (
    <>
      <div>카운트{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickCount}>버튼</button>
    </>
  );
}
