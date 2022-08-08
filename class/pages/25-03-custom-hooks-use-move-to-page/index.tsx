import { RecoilState, useRecoilState } from "recoil";
import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";
import { visitedPageState } from "../../src/components/commons/store";

export default function CustomHookUseAuthPage() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <button onClick={onClickMoveToPage("/board")}>게시판이동</button>
      <button>마켓이동</button>
      <button>마이페이지</button>
    </>
  );
}
