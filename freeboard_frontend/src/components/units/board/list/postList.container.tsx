import PostListUI from "./postList.presenter";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { FETCH_BOARDS, FETCH_BOARD, FETCH_BOARDS_COUNT } from "../queries";
import { useState } from "react";

export default function PostListContainer() {
  const [startPage, setStartPage] = useState(1);
  const [isLastPage, setIsLastPate] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const router = useRouter();

  // useQuery  결과값 담는 변수명은 data 밖에 못씀, 만약에 useQuery가 여러개 있다면 이런식으로 써야함=> const {data :작명 }  = useQuery() 데이터는 작명에 담김 => ex console.log(작명)
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const { data: lastPageNum } = useQuery(FETCH_BOARDS_COUNT);

  const lastPageStandard = Math.ceil(lastPageNum?.fetchBoardsCount / 10);

  // 이거는 리스트에서 제목 눌렀을 때, 디테일 페이지로 넘어가는 부분
  const { data: ListDetail } = useQuery(FETCH_BOARD, {
    variables: {
      // router.query.변수명=> 하위 폴더 [변수명]
      boardId: router.query.name,
    },
  });

  const MoveToWritePageBtn = () => {
    router.push(`/PostForm/`);
  };

  const onClickRefetch = (e) => {
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

  return (
    <>
      <PostListUI
        data={data}
        ListDetail={ListDetail}
        MoveToWritePageBtn={MoveToWritePageBtn}
        onClickRefetch={onClickRefetch}
        startPage={startPage}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        lastPageStandard={lastPageStandard}
        isLastPage={isLastPage}
        setIsLastPate={setIsLastPate}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      ></PostListUI>
    </>
  );
}
