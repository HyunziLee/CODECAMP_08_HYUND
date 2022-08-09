import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const [baskets, setBaskets] = useState<IBoard[]>([]);
  // const baskets =  JSON.parse(localStorage.getItem("baskets")|| "[]")
  // ▲localStorage.getItem() 안됨 => 프리렌더링 단계에서 localStorage가 없기 때문 (프리렌더링: 프론트엔드 서버에서 먼저 그려주는 작업 / 하이드레이션: 프리렌더링 후, 브라우저에 그려주는 작업)

  // 해결책
  // 1. process.browser
  // 2. typeof window !== "undefined"
  // 3. useEffect

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(result);
  }, []);

  return (
    <>
      {baskets.map((el) => (
        <Row key={el._id}>
          <Column>{el._id}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
    </>
  );
}
