import * as s from "../../../../../styles/create.styles";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
import "react-quill/dist/quill.snow.css";
import KakaoMapPage from "../../../commons/kakaoMap/kakaoMap";
import { useRecoilState } from "recoil";
import { KakaoMapAddress, UploadImgState } from "../../../../commons/store";
import Input03 from "../../../commons/input/03";
import Warning from "../../../commons/div/01-warning";
import { v4 as uuidv4 } from "uuid";
import UploadImg from "../../../commons/upload/01/uploadImg.container";
import Button02 from "../../../commons/button/02";
import { withAuth } from "../../../commons/hoc/withAuth";
import { useState } from "react";
export default function CreateUI(props) {
  const [uploadUrl] = useRecoilState(UploadImgState);
  const [mapAddress, setMapAddress] = useRecoilState(KakaoMapAddress);

  return (
    <s.Wrapper>
      {console.log(props.data)}
      <s.Title>{!props.isEdit ? "상품등록" : "상품수정"}</s.Title>

      <s.WrapperMain>
        {/* <form onSubmit= {props.handleSubmit(props.onClickCreateItem)}> */}
        <form
          onSubmit={
            !props.isEdit
              ? props.handleSubmit(props.onClickCreateItem)
              : props.handleSubmit(props.onClickUpdate)
          }
        >
          <s.InputWrapper>
            <s.InputTitle>상품명</s.InputTitle>
            <s.Input>
              {!props.isEdit ? (
                <Input03 type="text" register={props.register} name={"name"} />
              ) : (
                <Input03
                  type="text"
                  register={props.register}
                  name={"name"}
                  default={props.data?.fetchUseditem.name}
                />
              )}

              <Warning errormsg={props.formState.errors.name?.message} />
            </s.Input>
          </s.InputWrapper>
          <s.InputWrapper>
            <s.InputTitle>상품요약</s.InputTitle>
            <s.Input>
              <Input03
                type="text"
                register={props.register}
                name={"remarks"}
                default={!props.isEdit ? "" : props.data?.fetchUseditem.remarks}
              />
            </s.Input>
          </s.InputWrapper>
          <s.InputWrapper>
            <s.InputTitle>상품내용</s.InputTitle>
            <s.Input>
              <ReactQuill
                onChange={props.onChangeContents}
                style={{ height: "431px" }}
                defaultValue={
                  !props.isEdit ? "" : props.data?.fetchUseditem.contents
                }
              />
            </s.Input>
          </s.InputWrapper>
          <s.InputWrapper>
            <s.InputTitle>판매가격</s.InputTitle>
            <s.Input>
              <Input03
                type="number"
                register={props.register}
                name={"price"}
                default={!props.isEdit ? "" : props.data?.fetchUseditem.price}
              />
              <Warning errormsg={props.formState.errors.price?.message} />
            </s.Input>
          </s.InputWrapper>
          <s.InputWrapper>
            <s.InputTitle>태그입력</s.InputTitle>
            <s.Input>
              <s.InputInput
                defaultValue={
                  !props.isEdit ? "" : props.data?.fetchUseditem.tags
                }
              />
            </s.Input>
          </s.InputWrapper>
          <s.ButtonWrapper>
            <Button02
              title="취소"
              type="button"
              isValid={props.formState.isValid}
              color="#FFE004"
              fontColor="#000"
              onClick={props.onClickMovetoPage("/")}
            />

            <Button02
              title={!props.isEdit ? "등록" : "수정"}
              type="submit"
              isValid={props.formState.isValid}
              color="#000"
              fontColor="#fff"
            />
          </s.ButtonWrapper>
        </form>
        <s.InputTitle>거래위치</s.InputTitle>
        <s.MapWrapper>
          <KakaoMapPage />

          <s.AddressWrapper>
            {console.log(mapAddress)}

            <s.PostCodeWrapper>
              <s.PostCode
                defaultValue={mapAddress.road_address?.zone_no}
                disabled
              />
              {/* <s.PostCodeBtn>우편번호 검색</s.PostCodeBtn> */}
            </s.PostCodeWrapper>
            <s.AddDetailWrapper>
              <s.AddInput
                defaultValue={mapAddress.road_address?.address_name}
              />
              <s.AddInput
                defaultValue={mapAddress.road_address?.building_name}
              />
            </s.AddDetailWrapper>
          </s.AddressWrapper>
        </s.MapWrapper>
        <s.InputTitle>사진첨부</s.InputTitle>
        {!props.isEdit ? (
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
        ) : (
          <s.PhotoWrapper>
            {console.log(props.data?.fetchUseditem.images)}
            {props.data?.fetchUseditem.images.map((el, index) => (
              <UploadImg
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </s.PhotoWrapper>
        )}
      </s.WrapperMain>
    </s.Wrapper>
  );
}
