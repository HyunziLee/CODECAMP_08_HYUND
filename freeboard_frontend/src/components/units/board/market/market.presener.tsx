import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import * as s from "../../../../../styles/market.styles";
import { onClickBasket } from "../../../commons/Function/onClickAddBaskets";

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
            <s.ItemSeller>{props.item.seller.name}</s.ItemSeller>
            <s.IconWrapper>
              {/* <div onClick={onClickBasket(props.item)}>
                <AddShoppingCart />
              </div>
              {console.log(props.item)} */}

              <FavoriteBorder />
            </s.IconWrapper>
          </s.ItemWrapper2>
        </s.WrapperItems>
      </s.Wrapper>
    </>
  );
}
