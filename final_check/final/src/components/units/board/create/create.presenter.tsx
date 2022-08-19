import * as s from "../../../../../styles/create.styles";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
import "react-quill/dist/quill.snow.css";
import KakaoMapPage from "../../../commons/kakaoMap/kakaoMap";
import { useRecoilState } from "recoil";
import { UploadImgState } from "../../../../commons/store";
import Input03 from "../../../commons/input/03";
import Warning from "../../../commons/div/01-warning";
import { v4 as uuidv4 } from "uuid";
import UploadImg from "../../../commons/upload/01/uploadImg.container";
export default function CreateUI(props) {
  const [uploadUrl] = useRecoilState(UploadImgState);
  return (
    <s.Wrapper>
      <s.Title>상품등록</s.Title>

      <s.WrapperMain>
        <form onSubmit={props.handleSubmit(props.onClickCreateItem)}>
          <s.InputWrapper>
            <s.InputTitle>상품명</s.InputTitle>
            <s.Input>
              <Input03 type="text" register={props.register} name={"name"} />
              <Warning errormsg={props.formState.errors.name?.message} />
            </s.Input>
          </s.InputWrapper>
          <s.InputWrapper>
            <s.InputTitle>상품요약</s.InputTitle>
            <s.Input>
              <Input03 type="text" register={props.register} name={"remarks"} />
            </s.Input>
          </s.InputWrapper>
          <s.InputWrapper>
            <s.InputTitle>상품내용</s.InputTitle>
            <s.Input>
              <ReactQuill
                onChange={props.onChangeContents}
                style={{ height: "431px" }}
              />
            </s.Input>
          </s.InputWrapper>
          <s.InputWrapper>
            <s.InputTitle>판매가격</s.InputTitle>
            <s.Input>
              <Input03 type="number" register={props.register} name={"price"} />
              <Warning errormsg={props.formState.errors.price?.message} />
            </s.Input>
          </s.InputWrapper>
          <s.InputWrapper>
            <s.InputTitle>태그입력</s.InputTitle>
            <s.Input>
              <s.InputInput />
            </s.Input>
          </s.InputWrapper>
        </form>
        <s.InputTitle>거래위치</s.InputTitle>
        <s.MapWrapper>
          <KakaoMapPage />

          <s.AddressWrapper>
            <s.PostCodeWrapper>
              <s.PostCode />
              <s.PostCodeBtn>우편번호 검색</s.PostCodeBtn>
            </s.PostCodeWrapper>
            <s.AddDetailWrapper>
              <s.AddInput />
              <s.AddInput />
            </s.AddDetailWrapper>
          </s.AddressWrapper>
        </s.MapWrapper>
        <s.InputTitle>사진첨부</s.InputTitle>
        <s.PhotoWrapper>
          {props.fileUrls.map((el, index) => (
            <UploadImg
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </s.PhotoWrapper>
      </s.WrapperMain>
    </s.Wrapper>
  );
}
