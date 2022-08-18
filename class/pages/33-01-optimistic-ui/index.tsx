import { gql, useMutation, useQuery } from "@apollo/client";

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

export default function OptimisticUiPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "62fd212103562900296b2e2b",
    },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: "62fd212103562900296b2e2b" },
      // refetchQueries:[
      //   {query:FETCH_BOARD, variables:{boardId:""}}
      // ]
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardID: "62fd212103562900296b2e2b" },
          data: {
            fetchBoard: {
              _id: "62fd212103562900296b2e2b",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>현재카운트(좋아요){data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기</button>
    </>
  );
}
