import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  FETCH_BOARDS,
  LIKE_BOARD,
} from "../queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { IBoardDetailProps } from "./IBoardDetail.types";
import { Modal } from "antd";

export default function BoardDetail(props: IBoardDetailProps) {
  //
  const router = useRouter();

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        // router.query.변수명=> 하위 폴더 [변수명]
        boardId: String(router.query.name),
      },
    }
  );

  const DeleteBoardBtn = async () => {
    try {
      deleteBoard({
        variables: {
          boardId: String(router.query.name),
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      Modal.success({
        content: "게시물이 삭제되었습니다.",
        onOk: () => location.replace(`/postlist`),
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  const MoveToListPageBtn = () => {
    router.push(`/postlist`); // 나중에 페이저번호 번수로 저장해서 바꿔야함 /p/아님
  };

  const MoveToEditPageBtn = () => {
    router.push(`/PostDetail/Edit/${router.query.name}/`); // 나중에 페이저번호 번수로 저장해서 바꿔야함 /p/아님
  };

  const likeBtn = () => {
    console.log(data?.fetchBoard.likeCount);
    if (typeof router.query.name !== "string") return;
    likeBoard({
      variables: {
        boardId: String(router.query.name),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: String(router.query.name),
          },
        },
      ],
    });
  };
  const dislikeBtn = () => {
    if (typeof router.query.name !== "string") return;
    dislikeBoard({
      variables: {
        boardId: String(router.query.name),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: String(router.query.name),
          },
        },
      ],
    });
  };

  return (
    <>
      <BoardDetailUI
        data={data?.fetchBoard}
        MoveToListPageBtn={MoveToListPageBtn}
        MoveToEditPageBtn={MoveToEditPageBtn}
        DeleteBoardBtn={DeleteBoardBtn}
        dislikeBtn={dislikeBtn}
        likeBtn={likeBtn}
      />
    </>
  );
}
