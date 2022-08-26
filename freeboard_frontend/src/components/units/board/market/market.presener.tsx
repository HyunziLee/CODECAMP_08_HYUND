import { AddShoppingCart, Favorite, FavoriteBorder } from "@mui/icons-material";
import { useRecoilState } from "recoil";
import * as s from "../../../../../styles/market.styles";
import { onClickBasket } from "../../../commons/Function/onClickAddBaskets";
import { onClickPick } from "../../../commons/Function/onClickPick";
import { basketLength } from "../../../commons/store";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function MarketUI(props) {
  const [basketTemp, setBasketTemp] = useRecoilState(basketLength);
  // const [pick, setPick] = useState(true);
  const pick = true;
  return (
    <>
      <s.Wrapper>
        <s.WrapperItems>
          {props.item.images[0] ? (
            <s.ItemImage
              src={`https://storage.googleapis.com/${props.item.images[0]}`}
              onClick={props.onClickDetail(
                props.item._id,
                props.item.images[0]
              )}
            />
          ) : (
            <s.ItemImage
              onClick={props.onClickDetail(
                props.item._id,
                props.item.images[0]
              )}
            />
          )}

          <s.ItemContents>
            <s.ItemName
              onClick={props.onClickDetail(
                props.item._id,
                props.item.images[0]
              )}
            >
              {props.item.name}
            </s.ItemName>
            <s.ItemPrice>{props.item.price}</s.ItemPrice>
          </s.ItemContents>
          <s.ItemWrapper2>
            <s.ItemSeller>{props.item.seller.name}</s.ItemSeller>
            <s.IconWrapper>
              <AddShoppingCart
                onClick={() => {
                  const result = onClickBasket(props?.item);
                  setBasketTemp(result);
                }}
              />
              <FavoriteBorder onClick={props.onClickPick(props.item._id)} />
              {props.item.pickedCount}

              {/* {props.IPick?.fetchUseditemsIPicked.map((el) =>
                console.log(el._id, props.item._id)
              )} */}
              {/* {props.IPick?.fetchUseditemsIPicked.map((el) =>
                el._id === props.item._id ? (
                  <Favorite onClick={props.onClickPick(props.item._id)} />
                ) : (
                  <FavoriteBorder onClick={props.onClickPick(props.item._id)} />
                )
              )} */}

              {/* {pick ? (
                <Favorite onClick={props.onClickPick(props.item._id)} />
              ) : (
                <FavoriteBorder onClick={props.onClickPick(props.item._id)} />
              )}  */}
            </s.IconWrapper>
          </s.ItemWrapper2>
        </s.WrapperItems>
      </s.Wrapper>
    </>
  );
}
