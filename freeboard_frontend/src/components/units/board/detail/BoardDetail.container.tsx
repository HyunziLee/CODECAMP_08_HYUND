import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD, FETCH_BOARDS } from "../queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { IBoardDetailProps } from "./IBoardDetail.types";

export default function BoardDetail(props: IBoardDetailProps) {
  const router = useRouter();

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

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
      console.log("삭제완료");
      router.push(`/PostList/p`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const MoveToListPageBtn = () => {
    router.push(`/PostList/p/`); // 나중에 페이저번호 번수로 저장해서 바꿔야함 /p/아님
  };

  const MoveToEditPageBtn = () => {
    router.push(`/PostDetail/Edit/${router.query.name}`); // 나중에 페이저번호 번수로 저장해서 바꿔야함 /p/아님
  };

  return (
    <BoardDetailUI
      data={data}
      MoveToListPageBtn={MoveToListPageBtn}
      MoveToEditPageBtn={MoveToEditPageBtn}
      DeleteBoardBtn={DeleteBoardBtn}
    />
  );
}
