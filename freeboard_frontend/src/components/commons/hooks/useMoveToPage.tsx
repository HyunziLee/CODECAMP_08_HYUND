import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const onClickMovetoPage = (path: string) => () => {
    setVisitedPage(path);
    router.push(path);
  };
  return {
    visitedPage,
    onClickMovetoPage,
  };
}
