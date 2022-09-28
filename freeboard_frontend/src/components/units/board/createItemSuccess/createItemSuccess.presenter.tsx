import { Container } from "@mui/material";
import * as s from "../../../../../styles/createItemSuccess.styles";
import { WrapperBox } from "../../../commons/box/01";
import { v4 as uuidv4 } from "uuid";
import {
  basketLength,
  detailImgState,
  userInfoState,
} from "../../../../commons/store";
import { useRecoilState } from "recoil";
import Dompurify from "dompurify";
import { onClickBasket } from "../../../commons/Function/onClickAddBaskets";
import { ICreateItemSuccessUIProps } from "./createItemSuccess.types";
export default function CreateItemSuccessUI(props: ICreateItemSuccessUIProps) {
  const [bigImg] = useRecoilState(detailImgState);
  const [basketTemp, setBasketTemp] = useRecoilState(basketLength); // eslint-disable-line no-unused-vars
  const [userInfo] = useRecoilState(userInfoState);
  return (
    <Container maxWidth="xl">
      <WrapperBox>
        <s.Wrapper>
          <s.ImageWrapper>
            <s.ImageBigWrapper>
              {props.data?.images[0] === "" ? (
                <s.NodataWrapper>등록된 사진이 없습니다.</s.NodataWrapper>
              ) : (
                <s.ImageBig
                  src={`https://storage.googleapis.com/${props.data?.images[0]}`}
                />
              )}
            </s.ImageBigWrapper>

            {/* {!bigImg ? (
              <s.ImageBigWrapper>
                {props.data?.images[0] === "" ? (
                  <s.NodataWrapper>등록된 사진이 없습니다.</s.NodataWrapper>
                ) : (
                  <s.ImageBig
                    src={`https://storage.googleapis.com/${props.data?.images[0]}`}
                  />
                )}
              </s.ImageBigWrapper>
            ) : (
              <s.ImageBig src={`https://storage.googleapis.com/${bigImg}`} />
            )} */}

            <s.ImageSmallWrapper>
              {props.data?.images?.map((el: string) =>
                el ? (
                  <s.ImageSmall
                    key={uuidv4()}
                    src={`https://storage.googleapis.com/${el}`}
                    onClick={props.onClickImg(el)}
                  />
                ) : (
                  ""
                )
              )}
            </s.ImageSmallWrapper>
          </s.ImageWrapper>

          <s.ContentsWrapper>
            <s.ContentsDiv>
              <s.TitleH4>상품명</s.TitleH4>
              <s.ContentsH3>{props.data?.name}</s.ContentsH3>
            </s.ContentsDiv>
            <s.ContentsDiv>
              <s.TitleH4>가격</s.TitleH4>
              <s.ContentsH3>{props.data?.price}</s.ContentsH3>
            </s.ContentsDiv>

            <s.ContentsDiv>
              <s.TitleH4>상품 설명</s.TitleH4>
              {typeof window !== "undefined" && (
                <s.ContentsH3
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(props.data?.contents),
                  }}
                ></s.ContentsH3>
              )}
            </s.ContentsDiv>

            <s.ContentsDiv>
              <s.TitleH4>주소</s.TitleH4>

              {/* <KakaoMapPage /> */}
            </s.ContentsDiv>
            <s.ContentsDiv>
              <s.TitleH4>상품요약</s.TitleH4>
              {props.data?.remarks ? (
                <s.ContentsH3>{props.data?.remarks}</s.ContentsH3>
              ) : (
                <s.ContentsH3>등록된 상품 설명 요약이 없습니다.</s.ContentsH3>
              )}
            </s.ContentsDiv>
            <s.ContentsDiv>
              <s.TitleH4>태그</s.TitleH4>
              <s.TagWrapper>
                {props.data?.tags?.length !== 0 ? (
                  props.data?.tags?.map((el: string) => (
                    <s.ContentsH3 key={uuidv4()}>{el}</s.ContentsH3>
                  ))
                ) : (
                  <div>태그가 없습니다.</div>
                )}
              </s.TagWrapper>
            </s.ContentsDiv>
            <s.ButtonWrapper>
              <s.BuyButton color="#bbd0ff" onClick={props.onClickBuying}>
                구매하기
              </s.BuyButton>
              <s.BuyButton
                color="#e9ecef"
                onClick={() => {
                  const result = onClickBasket(props.data?._id);
                  setBasketTemp(result);
                }}
              >
                장바구니
              </s.BuyButton>
            </s.ButtonWrapper>
          </s.ContentsWrapper>
        </s.Wrapper>
        <s.DetailWrapper>
          <s.TitleH4>상세 보기</s.TitleH4>
          <s.DetailImgWrapper>
            {props.data?.images
              ? props.data?.images.map((el) => (
                  <s.DetailImg
                    key={uuidv4()}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))
              : ""}
          </s.DetailImgWrapper>
          {userInfo?.email === props.data?.seller?.email ? (
            <s.ButtonWrapper>
              <s.BuyButton
                color="#bbd0ff"
                onClick={props.onClickEdit(props.data?._id)}
              >
                수정하기
              </s.BuyButton>
              <s.BuyButton
                color="#e9ecef"
                onClick={props.onClickDelete(props.data?._id)}
              >
                삭제하기
              </s.BuyButton>
            </s.ButtonWrapper>
          ) : (
            <></>
          )}
        </s.DetailWrapper>
      </WrapperBox>
    </Container>
  );
}
