import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Write from "../../../../src/components/units/board/21-quiz-recoil-edit/write";
import { isEditQuiz } from "../../store";

export default function Edit() {
  const [isEDit, setIsEDit] = useRecoilState(isEditQuiz);

  useEffect(() => {
    setIsEDit(false);
  }, []);
  // console.log(isEDit);
  return <Write />;
}
