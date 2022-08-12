import { Container } from "@mui/material";
import { WrapperBox } from "../../../commons/box/01";
import * as s from "../../../../../styles/createItem.styles";
import Input02 from "../../../commons/input/02";

export default function CreateItemUI() {
  return (
    <Container maxWidth="xl">
      <WrapperBox>
        <s.Wrapper>
          <s.ImageWrapper>
            <s.ImageBig />
            <s.ImageSmallWrapper>
              {/* 무한스크롤 */}
              <s.ImageSmall />
              <s.ImageSmall />
              <s.ImageSmall />
            </s.ImageSmallWrapper>
          </s.ImageWrapper>
          <s.InputWrapper>
            <s.InputName>
              <s.InputDiv>상품명</s.InputDiv>
              {/* <Input02 /> */}
            </s.InputName>
            <s.InputDiv>상품명</s.InputDiv>

            <s.InputPrice>
              <s.InputDiv>가격</s.InputDiv>
              {/* <Input02 /> */}
            </s.InputPrice>

            <s.InputContents>
              <s.InputDiv>상품 설명</s.InputDiv>
            </s.InputContents>

            <s.InputAddress>
              <s.InputDiv>주소</s.InputDiv>
            </s.InputAddress>
            <s.InputRemarks>
              <s.InputDiv>비고</s.InputDiv>
            </s.InputRemarks>
            <s.InputTag>
              <s.InputDiv>태그</s.InputDiv>
            </s.InputTag>
          </s.InputWrapper>
        </s.Wrapper>
      </WrapperBox>
    </Container>
  );
}
