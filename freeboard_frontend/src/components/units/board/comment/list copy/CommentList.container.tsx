import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "../../queries";
import CommentScroll from "./CommentList.presenter";

export default function CommentEdit(props) {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      // router.query.변수명=> 하위 폴더 [변수명]
      boardId: String(router.query.name),
    },
  });
  console.log(data);

  return (
    <>
      {/* {console.log(console.log(data?.fetchBoardComments))} */}
      {data?.fetchBoardComments.map((e) => (
        <CommentScroll
          key={e._id}
          e={e}
          commentInputFunc={props.commentInputFunc}
          contents={props.contents}
        ></CommentScroll>
      ))}
    </>
  );
}
