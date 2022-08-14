import { Container } from "@mui/material";
import { WrapperBox } from "../../../commons/box/01";
import * as s from "../../../../../styles/createItem.styles";
import Input02 from "../../../commons/input/02";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Tags from "../../../commons/tags/tags";
import KakaoMapPage from "../../../commons/kakaoMap/kakaoMap";
import Warning from "../../../commons/div/01-warning";
import { v4 as uuidv4 } from "uuid";
import UploadImg from "../../../commons/upload/01/uploadImg.container";
import { UploadImgState } from "../../../commons/store";
import { useRecoilState } from "recoil";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function CreateItemUI(props) {
  const [uploadUrl] = useRecoilState(UploadImgState);
  return (
    <Container maxWidth="xl">
      <WrapperBox>
        <s.Wrapper>
          <s.ImageWrapper>
            {uploadUrl ? (
              <s.ImageBig src={`https://storage.googleapis.com/${uploadUrl}`} />
            ) : (
              <s.ImageBig />
            )}

            <s.ImageSmallWrapper>
              {props.fileUrls.map((el, index) => (
                <UploadImg
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </s.ImageSmallWrapper>
          </s.ImageWrapper>
          <form onSubmit={props.handleSubmit(props.onClickCreateItem)}>
            <s.InputWrapper>
              <s.InputDiv>
                <s.InputH3>상품명</s.InputH3>
                <Input02 type="text" register={props.register} name={"name"} />
                <Warning errormsg={props.formState.errors.name?.message} />
              </s.InputDiv>
              <s.InputDiv>
                <s.InputH3>가격</s.InputH3>
                <Input02
                  type="number"
                  register={props.register}
                  name={"price"}
                />
                <Warning errormsg={props.formState.errors.price?.message} />
              </s.InputDiv>

              <s.InputDiv>
                <s.InputH3>상품 설명</s.InputH3>
                <ReactQuill
                  onChange={props.onChangeContents}
                  style={{ width: "600px", height: "400px" }}
                />
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
            <button type="submit">등록하기</button>
          </form>
        </s.Wrapper>
      </WrapperBox>
    </Container>
  );
}
