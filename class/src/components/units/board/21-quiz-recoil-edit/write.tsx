import { useRecoilState } from "recoil";
import { isEditQuiz } from "../../../../../pages/quiz/store";

export default function Write() {
  const [isEDit, setIsEDit] = useRecoilState(isEditQuiz);
  return <>{isEDit ? <h4>등록</h4> : <h4>수정</h4>}</>;
}
