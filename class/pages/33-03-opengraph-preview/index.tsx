// 내가 만약 카카오톡 개발자 일 때 (미리보기 사용자)

import axios from "axios";

export default function OpengraphPreviewPage() {
  const onClickOpengraph = async () => {
    const result = await axios.get("https://www.naver.com/"); //  네이버는 CORS 문제로 안됨
    console.log(result.data);
    console.log(result.data.split("<meta").filter((el) => el.includes("og:")));
  };
  return (
    <>
      <div>
        <h1>사이트 미리보기 구현하는 연습</h1>
        <button onClick={onClickOpengraph}>미리보기 실행</button>
      </div>
    </>
  );
}
