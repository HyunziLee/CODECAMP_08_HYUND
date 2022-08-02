import { gql, useQuery } from "@apollo/client";

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

export default function FetchPolicyTest() {
  // const {data} = useQuery(FETCH_BOARDS,{
  //   fetchPolicy:"cache-first"  // 아폴로 캐시에 먼저가서 있으면 그걸 쓰고 없으면, 백엔드 요청

  // })

  const { data } = useQuery(FETCH_BOARDS);
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>{el.title}</div>
      ))}
    </div>
  );
}
