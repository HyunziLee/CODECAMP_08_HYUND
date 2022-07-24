import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../../queries";
import CommentScroll from "./CommentList.presenter";
import { Wrapper_scroll } from "./CommentList.styles";

export default function CommentEdit(props) {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      // router.query.변수명=> 하위 폴더 [변수명]
      boardId: String(router.query.name),
    },
  });

  console.log(data?.fetchBoardComments);

  const onFetchMore = () => {
    if (!data) {
      return;
    }
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 }, // <= 다음페이지 계산하는 거임
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <InfiniteScroll pageStart={0} loadMore={onFetchMore} hasMore={true}>
      {/* {console.log(console.log(data?.fetchBoardComments))} */}
      <Wrapper_scroll>
        {data?.fetchBoardComments.map((e) => (
          <CommentScroll
            key={e._id}
            e={e}
            commentInputFunc={props.commentInputFunc}
            contents={props.contents}
          ></CommentScroll>
        ))}
      </Wrapper_scroll>
    </InfiniteScroll>
  );
}
