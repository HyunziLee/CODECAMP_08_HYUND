import * as s from "./createItem.styles";
import Input02 from "../../../commons/input/02";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Tags from "../../../commons/tags/tags";
import KakaoMapPage from "../../../commons/kakaoMap/kakaoMap";
import Warning from "../../../commons/div/01-warning";
import { v4 as uuidv4 } from "uuid";
import UploadImg from "../../../commons/upload/01/uploadImg.container";
import { isEditState, UploadImgState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import Button01 from "../../../commons/button/01";
import { ICreateItemUIProps } from "./createItem.types";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function CreateItemUI(props: ICreateItemUIProps) {
  const [uploadUrl] = useRecoilState(UploadImgState);
  const [isEdit] = useRecoilState(isEditState);

  return (
    <s.Wrapper>
      <s.Main>
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
        <s.InputWrapper>
          <form
            onSubmit={
              isEdit
                ? props.handleSubmit(props.onClickUpdate)
                : props.handleSubmit(props.onClickCreateItem)
            }
          >
            <s.InputDiv>
              <s.InputH3>상품명</s.InputH3>
              <Input02
                type="text"
                register={props.register}
                name="name"
                defaultValue={isEdit ? props.data?.name : ""}
                width="100%"
              />

              <Warning errormsg={props.formState.errors.name?.message} />
            </s.InputDiv>
            <s.InputDiv>
              <s.InputH3>가격</s.InputH3>
              <Input02
                type="text"
                register={props.register}
                name="price"
                defaultValue={isEdit ? props.data?.price : 0}
                width="100%"
              />
              <Warning errormsg={props.formState.errors.price?.message} />
            </s.InputDiv>

            <s.InputDiv>
              <s.InputH3>상품 설명</s.InputH3>
              <ReactQuill
                onChange={props.onChangeContents}
                style={{
                  width: "100%",
                  height: "300px",
                  marginBottom: "80px",
                }}
                defaultValue={isEdit ? props.data?.contents : ""}
              />
            </s.InputDiv>

            <s.InputDiv>
              <s.InputH3>주소</s.InputH3>
              <KakaoMapPage />
            </s.InputDiv>
            <s.InputDiv>
              <s.InputH3>상품 요약</s.InputH3>
              <Input02
                type="text"
                register={props.register}
                name="remarks"
                defaultValue={isEdit ? props.data?.remarks : ""}
                width="100%"
              />
            </s.InputDiv>
            <s.InputTag>
              <s.InputH3>태그</s.InputH3>

              <Tags />
            </s.InputTag>

            <s.SubmitBtnWrapper>
              {!isEdit ? (
                <Button01
                  title="상품 등록하기"
                  type="submit"
                  isValid={props.formState.isValid}
                  bgColor="#111"
                  fontColor="#fff"
                  width="20%"
                  onClick={props.onClickCreateItem}
                />
              ) : (
                <Button01
                  title="상품 수정하기"
                  type="submit"
                  isValid={props.formState.isValid}
                  bgColor="#111"
                  fontColor="#fff"
                  width="20%"
                  onClick={props.onClickUpdate}
                />
              )}
            </s.SubmitBtnWrapper>
          </form>
        </s.InputWrapper>
      </s.Main>
    </s.Wrapper>
  );
}
