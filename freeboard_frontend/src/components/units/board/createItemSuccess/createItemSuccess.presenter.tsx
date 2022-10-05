import * as s from "./createItemSuccess.styles";
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
    <s.Wrapper>
      <s.Main>
        <s.ItemWrapper>
          <s.ImageWrapper>
            {!bigImg ? (
              <s.ImageBigWrapper>
                {props.data?.images[0] === undefined ? (
                  <s.NodataImg>
                    <s.CustomError />
                  </s.NodataImg>
                ) : (
                  <s.ImageBig
                    src={`https://storage.googleapis.com/${props.data?.images[0]}`}
                  />
                )}
              </s.ImageBigWrapper>
            ) : (
              <s.ImageBig src={`https://storage.googleapis.com/${bigImg}`} />
            )}

            <s.ImageSmallWrapper>
              {props.data?.images?.map(
                (el: string) =>
                  el && (
                    <s.ImageSmall
                      key={uuidv4()}
                      src={`https://storage.googleapis.com/${el}`}
                      onClick={props.onClickImg(el)}
                    />
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
              <s.TitleH4>주소</s.TitleH4>
              <s.ContentsH3>{`${props.data?.useditemAddress?.address} ${props.data?.useditemAddress?.addressDetail}`}</s.ContentsH3>

              {/* <KakaoMapPage /> */}
            </s.ContentsDiv>
            <s.ContentsDiv>
              <s.TitleH4>상품요약</s.TitleH4>
              <s.ContentsH3>
                {props.data?.remarks
                  ? props.data?.remarks
                  : "등록된 상품 설명 요약이 없습니다."}
              </s.ContentsH3>
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
            {userInfo?.email !== props.data?.seller?.email && (
              <s.ButtonWrapper width="100%">
                <s.Button
                  bgColor="#111"
                  fontColor="#fff"
                  onClick={props.onClickBuying}
                >
                  구매하기
                </s.Button>
                <s.Button
                  bgColor="#f5f5f5"
                  fontColor="#111"
                  onClick={() => {
                    const result = onClickBasket(props.data);
                    setBasketTemp(Number(result));
                  }}
                >
                  장바구니
                </s.Button>
              </s.ButtonWrapper>
            )}
          </s.ContentsWrapper>
        </s.ItemWrapper>

        <s.DetailWrapper>
          <s.TitleH4>상세 보기</s.TitleH4>
          <s.ContentsDiv>
            {typeof window !== "undefined" && (
              <s.ContentsH3
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(props.data?.contents),
                }}
              ></s.ContentsH3>
            )}
          </s.ContentsDiv>
        </s.DetailWrapper>
        <s.DetailImgWrapper>
          {props.data?.images &&
            props.data?.images.map(
              (el: string) =>
                el && (
                  <s.DetailImg
                    key={uuidv4()}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                )
            )}
        </s.DetailImgWrapper>
        {userInfo?.email === props.data?.seller?.email && (
          <s.ButtonWrapper width="30%">
            <s.Button
              bgColor="#f5f5f5"
              fontColor="#111"
              onClick={props.onClickEdit(props.data?._id)}
            >
              수정하기
            </s.Button>
            <s.Button
              bgColor="#f5f5f5"
              fontColor="#111"
              onClick={props.onClickDelete(props.data?._id)}
            >
              삭제하기
            </s.Button>
          </s.ButtonWrapper>
        )}
      </s.Main>
    </s.Wrapper>
  );
}
