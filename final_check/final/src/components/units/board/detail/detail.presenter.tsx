import { Container } from "@material-ui/core";
import * as s from "../../../../../styles/detail.styles";
import { v4 as uuidv4 } from "uuid";
import { FavoriteBorder } from "@mui/icons-material";
export default function DetailUI(props) {
  return (
    <s.Wrapper>
      {console.log(props.data)}
      <s.WrapperMain>
        <s.ItemWrapper>
          <s.ItemImage
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
          />
          <s.ItemDetail>
            <s.ItemName>{props.data?.fetchUseditem.name}</s.ItemName>
            <s.ItemPrice>
              {props.data?.fetchUseditem.name}
              <span style={{ fontSize: "20px" }}>원</span>
            </s.ItemPrice>
            <s.Line color="#555" />
            <s.ItemRemarks>{props.data?.fetchUseditem.remarks} </s.ItemRemarks>
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
              <s.ItemButton width="312px" color="#A0A0A0">
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
            <s.Contents>{props.data?.fetchUseditem.contents}</s.Contents>

            <s.Map>
              <p> 거래지역</p>
              <div></div>
            </s.Map>
          </s.ItemInfoDetail>
          <s.ItemInfoQnA>
            <s.Title>상점정보</s.Title>
            <s.Line color="#555" />
            <s.SellerWrapper>
              <s.SellerAvatar />
              <s.SellerName>셀러네임</s.SellerName>
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
      </s.WrapperMain>
    </s.Wrapper>
  );
}
