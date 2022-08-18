import Head from "next/head";
// 내가 만약 네이버 개발자 일 때 (미리보기 제공자)
export default function OpengraphHeadPage() {
  return (
    <>
      <div>
        <Head>
          <meta property="og:title" content="중고마켓" />
          <meta property="og:description" content="와따시 중고마켓" />
          <meta property="og:image" content="http://" />
        </Head>
        <h1>사이트 미리보기 제공 연습 페이지</h1>
      </div>
    </>
  );
}
