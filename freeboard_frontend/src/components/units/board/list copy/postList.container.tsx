import PostListUI from "./postList.presenter";

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

import { FETCH_BOARDS, FETCH_BOARD } from "../queries";

export default function PostListContainer() {
  const router = useRouter();

  let a = 1;

  // useQuery  결과값 담는 변수명은 data 밖에 못씀, 만약에 useQuery가 여러개 있다면 이런식으로 써야함=> const {data :작명 }  = useQuery() 데이터는 작명에 담김 => ex console.log(작명)
  const { data } = useQuery(FETCH_BOARDS, {
    variables: {
      page: Number(a),
    },
  });

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

  return (
    <>
      <PostListUI
        data={data}
        ListDetail={ListDetail}
        MoveToWritePageBtn={MoveToWritePageBtn}
      ></PostListUI>
    </>
  );
}
