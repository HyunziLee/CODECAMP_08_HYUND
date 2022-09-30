import { QuestionAnswer } from "@mui/icons-material";
import * as s from "./usedItemCommentWrite.styles";
export default function UsedItemCommentsWriteUI() {
  return (
    <s.Wrapper>
      <s.Main>
        <s.QuestionTitle>
          <QuestionAnswer />
          상품 문의 하기
        </s.QuestionTitle>
        <s.QuestionWrapper>
          <s.QuestionInput />
          <s.QuestionButton>문의하기</s.QuestionButton>
        </s.QuestionWrapper>
      </s.Main>
    </s.Wrapper>
  );
}
