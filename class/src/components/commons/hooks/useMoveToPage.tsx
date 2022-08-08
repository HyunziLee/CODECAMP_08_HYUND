import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const onClickMoveToPage =
    (path: string) => (event: MouseEvent<HTMLElement>) => {
      setVisitedPage(path);
      router.push(path);
    };
  return {
    visitedPage,
    onClickMoveToPage,
  };
}
