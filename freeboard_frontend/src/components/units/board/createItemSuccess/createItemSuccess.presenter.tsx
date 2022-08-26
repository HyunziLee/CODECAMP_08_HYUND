import { Container } from "@mui/material";
import * as s from "../../../../../styles/createItemSuccess.styles";
import { WrapperBox } from "../../../commons/box/01";
import { v4 as uuidv4 } from "uuid";
import { detailImgState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import Dompurify from "dompurify";
export default function CreateItemSuccessUI(props) {
  const [bigImg, setBigImg] = useRecoilState(detailImgState);
  return (
    <Container maxWidth="xl">
      <WrapperBox>
        <s.Wrapper>
          <s.ImageWrapper>
            {!bigImg ? (
              <s.ImageBig
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
              />
            ) : (
              <s.ImageBig src={`https://storage.googleapis.com/${bigImg}`} />
            )}

            <s.ImageSmallWrapper>
              {props.data?.fetchUseditem.images.map((el) =>
                el ? (
                  <s.ImageSmall
                    key={uuidv4()}
                    src={`https://storage.googleapis.com/${el}`}
                    onClick={props.onClickImg(el)}
                  />
                ) : (
                  <s.ImageSmall key={uuidv4()} />
                )
              )}
            </s.ImageSmallWrapper>
          </s.ImageWrapper>

          <s.ContentsWrapper>
            <s.ContentsDiv>
              <s.TitleH4>상품명</s.TitleH4>
              <s.ContentsH3>{props.data?.fetchUseditem.name}</s.ContentsH3>
            </s.ContentsDiv>
            <s.ContentsDiv>
              <s.TitleH4>가격</s.TitleH4>
              <s.ContentsH3>{props.data?.fetchUseditem.price}</s.ContentsH3>
            </s.ContentsDiv>

            <s.ContentsDiv>
              <s.TitleH4>상품 설명</s.TitleH4>
              {typeof window !== "undefined" && (
                <s.ContentsH3
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(
                      props.data?.fetchUseditem.contents
                    ),
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

              <s.ContentsH3>{props.data?.fetchUseditem.remarks}</s.ContentsH3>
            </s.ContentsDiv>
            <s.ContentsDiv>
              <s.TitleH4>태그</s.TitleH4>
              <s.TagWrapper>
                {props.data?.fetchUseditem.tags.map((el) => (
                  <s.ContentsH3 key={uuidv4()}>{el}</s.ContentsH3>
                ))}
              </s.TagWrapper>
            </s.ContentsDiv>
            <s.ButtonWrapper>
              <s.BuyButton color="#bbd0ff" onClick={props.onClickBuying}>
                구매하기
              </s.BuyButton>
              <s.BuyButton color="#e9ecef">장바구니</s.BuyButton>
            </s.ButtonWrapper>
          </s.ContentsWrapper>
        </s.Wrapper>
        <s.DetailWrapper>
          <s.TitleH4>상세 보기</s.TitleH4>
          <s.DetailImgWrapper>
            {props.data?.fetchUseditem.images.map((el) =>
              el ? (
                <s.DetailImg
                  key={uuidv4()}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ) : (
                ""
              )
            )}
          </s.DetailImgWrapper>
        </s.DetailWrapper>
      </WrapperBox>
    </Container>
  );
}
