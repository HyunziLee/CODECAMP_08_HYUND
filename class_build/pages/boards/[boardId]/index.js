import { useRouter } from "next/router";
import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
export default function BoardsDetailPage(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        {/* <meta property="og:title" content={props?.fetchBoard.title} />
        <meta property="og:description" content={props?.fetchBoard.contents} />
        <meta property="og:image" content={props?.fetchBoard.images?.[0]} /> */}
      </Head>
      <div>
        안녕하세요 게시글 상세페이지입니다. 게시글 Id는 {router.query.boardId}
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;
// 서버에서만 실행됨
export const getSeverSideProps = async (context) => {
  // 여기서 fetchBoard 요청하기

  const graphQLClient = new GraphQLClient(
    "https://backend08.codebootcamp.co.kr/graphql04"
  );
  const result = await graphQLClient.request(FETCH_BOARD, {
    boardId: context.query.boardId,
  });
  console.log(result);

  // 아래 구조 + props이름으로 props 넘겨줘야함
  return {
    props: {
      fetchBoard: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };

  // useQuery는 안됨 => 아폴로 세팅을 해야하기때문
};
