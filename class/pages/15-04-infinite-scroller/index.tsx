import InfiniteScroll from "react-infinite-scroller";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
  
} from "../../src/commons/types/generated/types";

// const FETCH_BOARDS = gql`
//   query fetchBoards($page: Int) {
//     fetchBoards(page: $page) {
//       _id
//       writer
//       title
//       contents
//     }
//   }
// `;

const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments( $boardId: ID!, $page:Int) {
    fetchBoardComments( page:$page, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;
// 





const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  // const { data, fetchMore } = useQuery<
  //   Pick<IQuery, "fetchBoards">,
  //   IQueryFetchBoardsArgs
  // >(FETCH_BOARDS);


//   const { data, fetchMore } = useQuery<
//   Pick<IQuery, "fetchBoardComments">,
//   IQueryFetchBoardCommentsArgs
// >(FETCH_BOARD_COMMENTS);

const { data, fetchMore} = useQuery<
  Pick<IQuery, "fetchBoardComments">,
  IQueryFetchBoardCommentsArgs
>(FETCH_BOARD_COMMENTS,{
  variables:{
    boardId:"62dce435bc5ba3002a70e072",
    
  }
});

console.log(data?.fetchBoardComments)

const onFetchMore = () => {
  if (!data) {
    return;
  }
  fetchMore({
    variables: { page: Math.ceil(data?.fetchBoardComments.length /10) + 1,}, 
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult.fetchBoardComments)
        return { fetchBoardComments: [...prev.fetchBoardComments] };

      return {
        fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
      };
    },
  });
};

  // variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },

  return (
    <InfiniteScroll pageStart={0} loadMore={onFetchMore} hasMore={true}>
      {data?.fetchBoardComments.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
        </Row>
      )) || <div></div>}
      {/*  🔺 data가 없을 때 빈 <div > 보여줘 뜻 */}
    </InfiniteScroll>
    
  );
}
