import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
  const router = useRouter();
  const onClickMoveToMap = () => {
    router.push(`/29-03-kakao-map-routed`);
  };
  return (
    <>
      {/* <button onClick={onClickMoveToMap}>Map으로 이동하기</button> */}
      {/* <button>
        <a href="/29-03-kakao-map-routed">맵으로 이동하기</a>
      </button> */}
      <Link href="/29-03-kakao-map-routed">
        <a>맵으로 이동하기</a>
      </Link>
    </>
  );
}

// 리액트, next는 html과 다르게 모든 페이지를 미리 다 다운받아놓은 후,
// 해당페이지를 보여주기 때문에, Head태그가 다운받아 지기 전에 페이지가 로드가 되어 에러 뜨는거임
// buton 사용했을 때, 카카오맵 에러 뜨는 거 해결 책
// 1. _app.tsx에서 미리 다운로드 받기
// 2. 스크립트 로드 기다려서 처리하기
