import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

export function useMoveToPage() {
  const router = useRouter();

  const onClickMovetoPage = (path) => (event) => {
    router.push(path);
  };
  return {
    onClickMovetoPage,
  };
}
