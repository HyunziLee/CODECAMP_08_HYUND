import PostEdit from "../../../../src/components/units/board/edit/BoardEdit.container";
import { FETCH_BOARD } from "../../../../src/components/units/board/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

export default function EditForm() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        // router.query.변수명=> 하위 폴더 [변수명]
        boardId: String(router.query.name),
      },
    }
  );

  return <PostEdit data={data} />;
}
