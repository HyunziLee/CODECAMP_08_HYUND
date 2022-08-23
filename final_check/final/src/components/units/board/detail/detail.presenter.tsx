import { Container } from "@material-ui/core";
import * as s from "../../../../../styles/detail.styles";
import { v4 as uuidv4 } from "uuid";
import Dompurify from "dompurify";
import {
  FavoriteBorder,
  LocalActivityOutlined,
  LocationCityOutlined,
  LocationOn,
} from "@mui/icons-material";
import { KakaoMapAddress, userInfoState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import KakaoMapPageDetail from "../../../commons/kakaoMapDetail/kakaoMap";
import Button02 from "../../../commons/button/02";
export default function DetailUI(props) {
  const [mapAddress, setMapAddress] = useRecoilState(KakaoMapAddress);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return (
    <s.Wrapper>
      {console.log(props.data?.fetchUseditem)}
      {/* {console.log(mapAddress)} */}
      <s.WrapperMain>
        <s.ItemWrapper>
          <s.ItemImage
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
          />
          <s.ItemDetail>
            <s.ItemName>{props.data?.fetchUseditem.name}</s.ItemName>
            <s.ItemPrice>
              {props.data?.fetchUseditem.price}
              <span style={{ fontSize: "20px" }}>원</span>
            </s.ItemPrice>
            <s.Line color="#555" />
            <s.ItemRemarks>
              {props.data?.fetchUseditem.remarks ||
                "등록된 상품 설명이 없습니다."}{" "}
            </s.ItemRemarks>
            <s.ItemHashTags>
              {props.data?.fetchUseditem.tags
                ? props.data?.fetchUseditem.tags.map((el) => (
                    <s.ItemHashTag key={uuidv4()}> {el}</s.ItemHashTag>
                  ))
                : ""}
            </s.ItemHashTags>
            <s.Line color="#C0C0C0" />
            <s.ItemButtons>
              <s.ItemButton width="152px" color="#C9C9C9">
                <FavoriteBorder />
                {`찜 ${props.data?.fetchUseditem.pickedCount}`}
              </s.ItemButton>
              <s.ItemButton
                width="312px"
                color="#A0A0A0"
                onClick={props.onClickBasket(props.data?.fetchUseditem)}
              >
                장바구니
              </s.ItemButton>
              <s.ItemButton width="312px" color="#000000">
                바로구매
              </s.ItemButton>
            </s.ItemButtons>
          </s.ItemDetail>
        </s.ItemWrapper>
        <s.ItemInfoWrapper>
          <s.ItemInfoDetail>
            <s.Title>상품정보</s.Title>
            <s.Line color="#555" />
            <s.Contents>
              {process.browser && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(
                      String(props.data?.fetchUseditem.contents)
                    ),
                  }}
                />
              )}
            </s.Contents>

            <s.TitleText>
              <LocationOn />

              <span>거래지역</span>
            </s.TitleText>

            {props.data?.fetchUseditem.useditemAddress ? (
              <s.Map>
                <KakaoMapPageDetail />
                <s.AddressWrapper>
                  <s.PostCodeWrapper>
                    <s.PostCode>
                      {props.data?.fetchUseditem.useditemAddress.zipcode}
                    </s.PostCode>
                  </s.PostCodeWrapper>
                  <s.AddDetailWrapper>
                    <s.AddInput>
                      {props.data?.fetchUseditem.useditemAddress.address}
                    </s.AddInput>
                    {props.data?.fetchUseditem.useditemAddress.addressDetail ? (
                      <s.AddInput>
                        {
                          props.data?.fetchUseditem.useditemAddress
                            .addressDetail
                        }
                      </s.AddInput>
                    ) : (
                      <s.AddInput></s.AddInput>
                    )}
                  </s.AddDetailWrapper>
                </s.AddressWrapper>
              </s.Map>
            ) : (
              <div>등록된 거래지역이 없습니다. 판매자에게 문의하세요</div>
            )}
          </s.ItemInfoDetail>
          <s.ItemInfoQnA>
            <s.Title>상점정보</s.Title>
            <s.Line color="#555" />
            <s.SellerWrapper>
              {props.data?.fetchUseditem.seller.picture ? (
                <s.SellerAvatar
                  src={`https://storage.googleapis.com/${props.data?.fetchUseditem.seller.picture}`}
                />
              ) : (
                <s.SellerAvatar />
              )}

              <s.SellerName>
                {props.data?.fetchUseditem.seller.name}
              </s.SellerName>
            </s.SellerWrapper>
            <s.Line color="#C0C0C0" />
            <s.CommentsWrapper>
              <s.Title>댓글</s.Title>
              <s.Line color="#555" />
              <s.CommentsInput />
              <s.CommentsButton>작성하기</s.CommentsButton>
              <s.CommentsResult>
                <s.SellerWrapper>
                  <s.SellerAvatar />
                  <s.SellerName>dddd</s.SellerName>
                </s.SellerWrapper>
                <s.Comments></s.Comments>
              </s.CommentsResult>
            </s.CommentsWrapper>
          </s.ItemInfoQnA>
        </s.ItemInfoWrapper>

        {userInfo?.email === props.data?.fetchUseditem.seller.email ? (
          <Button02
            title="수정하기"
            type="button"
            color="#FFE004"
            fontColor="#000"
            onClick={props.onClickMovetoPage(
              `/Edit/${props.data?.fetchUseditem._id}`
            )}
          />
        ) : (
          <></>
        )}
      </s.WrapperMain>
    </s.Wrapper>
  );
}
