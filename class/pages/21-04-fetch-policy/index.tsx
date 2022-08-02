import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import FetchPolicyTest from "../../src/components/units/21-fetch-policy";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
    # 아폴로 캐시 이용하려면 반드시 id값 있어야함
  }
`;

export default function GlobalStatePage() {
  // const {data} = useQuery(FETCH_BOARDS,{
  //   fetchPolicy:"cache-first"  // 아폴로 캐시에 먼저가서 있으면 그걸 쓰고 없으면, 백엔드 요청

  // })

  const { data } = useQuery(FETCH_BOARDS, { fetchPolicy: "network-only" });
  const [aaa, setAaa] = useState(false);
  const onClickAaa = () => {
    setAaa(true);
  };
  return (
    <div>
      <button onClick={onClickAaa}>클릭 시, 새로운 컴포넌트 나타남</button>
      {aaa && <FetchPolicyTest />}
    </div>
  );
}
