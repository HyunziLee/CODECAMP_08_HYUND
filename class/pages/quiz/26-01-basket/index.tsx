import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard, IQuery } from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
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

export default function Quiz() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);
  const [baskets, setBaskets] = useState<IBoard[]>([]);
  const [isClicked, setIsClicked] = useState(true);

  const [tt, setTt] = useState("게시물조회");

  const onClickBasket = (basket) => () => {
    const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
      JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter((el) => el._id === basket._id);

    if (temp.length === 1) {
      alert("장바구니에 동일한 상품이 있습니다.");
      return;
    }

    const { __typename, ...newBasket } = basket;
    baskets.push(newBasket);
    localStorage.setItem("baskets", JSON.stringify(baskets));

    setIsClicked(!isClicked);
  };
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(result);
  }, [isClicked]);

  const onClickDelete = (el) => () => {
    setIsClicked(!isClicked);
    const index = 0;
    console.log(baskets);

    baskets.forEach((e, i) => {
      console.log(e);
      console.log(el);
      if (e._id !== el._id) return;
      if (e._id === el._id) {
        index = i;
      }
    });
    console.log(index);

    baskets.splice(index, 1);
    setBaskets(baskets);
    console.log(baskets);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          {console.log(baskets[index]?._id)}
          {console.log(el._id === baskets[index]?._id)}
          {/* {baskets.length === 0 ? (
            <button onClick={onClickBasket(el)}>게시물 담기</button>
          ) : (
            <button onClick={onClickDelete(el)}>담기 취소</button>
          )} */}

          {!(el._id === baskets[index]?._id) ? (
            <button onClick={onClickBasket(el)}>게시물 담기</button>
          ) : (
            <button onClick={onClickDelete(el)}>담기 취소</button>
          )}

          {/* // <button onClick={onClickBasket(el)}>
          //   {isClicked ? "게시물담기" : "담기 취소"}
          // </button> */}

          {/* {el._id ===
        JSON.parse(localStorage.getItem("baskets"))[index]?._id ? (
          <button onClick={onClickBasket(el)}>게시물담기</button>
        ) : (
          <button onClick={onClickDelete(el)}>담기취소</button>
        )} */}

          {/* {!(el._id === baskets[index]?._id) ? (
          <button onClick={onClickBasket(el)}>게시물 담기</button>
        ) : (
          <button onClick={onClickDelete(el)}>담기 취소</button>
        )} */}
        </Row>
      ))}
    </>
  );
}
