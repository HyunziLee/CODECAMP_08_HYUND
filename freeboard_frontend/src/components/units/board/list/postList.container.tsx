import PostListUI from "./postList.presenter";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { FETCH_BOARDS, FETCH_BOARD, FETCH_BOARDS_COUNT } from "../queries";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

import _ from "lodash";
export default function PostListContainer() {
  const [startPage, setStartPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [keyword, setKeyword] = useState("");

  const router = useRouter();

  // useQuery  결과값 담는 변수명은 data 밖에 못씀, 만약에 useQuery가 여러개 있다면 이런식으로 써야함=> const {data :작명 }  = useQuery() 데이터는 작명에 담김 => ex console.log(작명)
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: lastPageNum } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPageStandard = lastPageNum
    ? Math.ceil(lastPageNum?.fetchBoardsCount / 10)
    : 1;

  // 이거는 리스트에서 제목 눌렀을 때, 디테일 페이지로 넘어가는 부분
  const { data: ListDetail } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: {
      // router.query.변수명=> 하위 폴더 [변수명]
      boardId: String(router.query.name),
    },
  });

  const MoveToWritePageBtn = () => {
    router.push(`/PostForm/`);
  };

  const onClickRefetch = (e: MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    refetch({ page: Number(e.target.id) });
  };

  const onClickPrev = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
  };

  const onClickNext = () => {
    if (startPage + 10 > lastPageStandard) return;
    setStartPage((prev) => prev + 10);
  };

  const getDebounce = _.debounce((value) => {
    refetch({ search: value, page: 1 });

    setKeyword(value);
  }, 200);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounce(e.target.value);
  };

  const onMovetoPageForSearch = (e: MouseEvent<HTMLSpanElement>) => {
    if (!(e.target instanceof HTMLSpanElement)) return;

    refetch({ page: Number(e.target.id) });
  };

  return (
    <>
      <PostListUI
        MoveToWritePageBtn={MoveToWritePageBtn}
        onClickRefetch={onClickRefetch}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        setIsLastPage={setIsLastPage}
        setIsClicked={setIsClicked}
        onChangeSearch={onChangeSearch}
        onMovetoPageForSearch={onMovetoPageForSearch}
        data={data}
        ListDetail={ListDetail}
        startPage={startPage}
        lastPageStandard={lastPageStandard}
        isLastPage={isLastPage}
        isClicked={isClicked}
        keyword={keyword}
      ></PostListUI>
    </>
  );
}
