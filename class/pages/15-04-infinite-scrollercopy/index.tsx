import InfiniteScroll from "react-infinite-scroller";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
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
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  
console.log(data)
  const onFetchMore = () => {
    if (!data) {
      return;
    }
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length /10) + 1 }, // <= 다음페이지 계산하는 거임
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

 
  

  return (
    <InfiniteScroll pageStart={0} loadMore={onFetchMore} hasMore={true}>
      {data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
        </Row>
      )) || <div></div>}
      {/*  🔺 data가 없을 때 빈 <div > 보여줘 뜻 */}
    </InfiniteScroll>
  );
}
