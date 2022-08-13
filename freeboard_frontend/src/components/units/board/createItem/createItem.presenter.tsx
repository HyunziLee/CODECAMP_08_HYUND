import { Container } from "@mui/material";
import { WrapperBox } from "../../../commons/box/01";
import * as s from "../../../../../styles/createItem.styles";
import Input02 from "../../../commons/input/02";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Tags from "../../../commons/tags/tags";
import KakaoMapPage from "../../../commons/kakaoMap/kakaoMap";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function CreateItemUI(props) {
  return (
    <Container maxWidth="xl">
      <WrapperBox>
        <form onSubmit={props.handleSubmit(props.onClickCreateItem)}>
          <s.Wrapper>
            <s.ImageWrapper>
              <s.ImageBig />
              <s.ImageSmallWrapper>
                <s.ImageSmall />
                <s.ImageSmall />
                <s.ImageSmall />
                <s.ImageSmall />
                <s.ImageSmall />
              </s.ImageSmallWrapper>
            </s.ImageWrapper>
            <s.InputWrapper>
              <s.InputDiv>
                <s.InputH3>상품명</s.InputH3>
                <Input02 type="text" register={props.register} name={"name"} />
              </s.InputDiv>
              <s.InputDiv>
                <s.InputH3>가격</s.InputH3>
                <Input02
                  type="number"
                  register={props.register}
                  name={"price"}
                />
              </s.InputDiv>

              <s.InputDiv>
                <s.InputH3>상품 설명</s.InputH3>
                <ReactQuill onChange={props.onChangeContents} />
              </s.InputDiv>

              <s.InputDiv>
                <s.InputH3>주소</s.InputH3>

                <KakaoMapPage />
              </s.InputDiv>
              <s.InputDiv>
                <s.InputH3>비고</s.InputH3>
                <Input02
                  type="text"
                  register={props.register}
                  name={"remarks"}
                />
              </s.InputDiv>
              <s.InputTag>
                <s.InputH3>태그</s.InputH3>
                <Tags />
              </s.InputTag>
            </s.InputWrapper>
          </s.Wrapper>
          <button type="submit">등록하기</button>
        </form>
      </WrapperBox>
    </Container>
  );
}
