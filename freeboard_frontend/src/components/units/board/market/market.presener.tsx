import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import * as s from "../../../../../styles/market.styles";

export default function MarketUI(props) {
  return (
    <>
      {console.log(props.item)}
      <s.Wrapper>
        <s.WrapperItems>
          {props.item.images[0] ? (
            <s.ItemImage
              src={`https://storage.googleapis.com/${props.item.images[0]}`}
              onClick={props.onClickDetail(props.item._id)}
            />
          ) : (
            <s.ItemImage onClick={props.onClickDetail(props.item._id)} />
          )}

          <s.ItemContents>
            <s.ItemName onClick={props.onClickDetail(props.item._id)}>
              {props.item.name}
            </s.ItemName>
            <s.ItemPrice>{props.item.price}</s.ItemPrice>
          </s.ItemContents>
          <s.ItemWrapper2>
            <s.ItemSeller>철수</s.ItemSeller>
            <s.IconWrapper>
              <AddShoppingCart />

              <FavoriteBorder />
            </s.IconWrapper>
          </s.ItemWrapper2>
        </s.WrapperItems>
      </s.Wrapper>
    </>
  );
}
