import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../../queries";
import { ICommentEditProps } from "../IBoardComment.types";
import CommentScroll from "./CommentList.presenter";
import { WrapperScroll } from "./CommentList.styles";

export default function CommentEdit(props: ICommentEditProps) {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.name),
    },
  });

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
    <WrapperScroll>
      <InfiniteScroll
        pageStart={0}
        loadMore={onFetchMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchBoardComments.map((el) => (
          <CommentScroll
            key={el._id}
            el={el}
            commentInputFunc={props.commentInputFunc}
            contents={props.contents}
          ></CommentScroll>
        ))}
      </InfiniteScroll>
    </WrapperScroll>
  );
}
