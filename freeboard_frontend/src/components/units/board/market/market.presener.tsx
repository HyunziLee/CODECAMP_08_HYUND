import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import { useRecoilState } from "recoil";
import * as s from "./market.styles";
import { onClickBasket } from "../../../commons/Function/onClickAddBaskets";

import { basketLength } from "../../../../commons/store";

import { IMarketUIProps } from "./market.types";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketUI(props: IMarketUIProps) {
  const [basketTemp, setBasketTemp] = useRecoilState(basketLength);

  return (
    <s.Wrapper>
      <s.SubWrapper>
        <s.Main>
          <s.WrapperScroll
            pageStart={0}
            loadMore={props.onFetchMore}
            hasMore={true}
            useWindow={false}
          >
            <s.WrapperItems>
              {!props.item?.images[0] ? (
                <s.NoImg />
              ) : (
                <s.ItemImage
                  src={`https://storage.googleapis.com/${props.item?.images[0]}`}
                  onClick={props.onClickDetail(
                    props.item?._id,
                    props.item?.images[0]
                  )}
                />
              )}

              <s.ItemContents>
                <s.ItemName
                  onClick={props.onClickDetail(
                    props.item?._id,
                    props?.item?.images[0] ? props.item?.images[0] : ""
                  )}
                >
                  {props.item?.name}
                </s.ItemName>
                <s.ItemPrice>{props.item?.price}</s.ItemPrice>
              </s.ItemContents>
              <s.ItemWrapper2>
                <s.ItemSeller>{props.item?.seller?.name}</s.ItemSeller>
                <s.IconWrapper>
                  <AddShoppingCart
                    onClick={() => {
                      const result = onClickBasket(props.item);
                      setBasketTemp(Number(result));
                    }}
                  />
                  <FavoriteBorder
                    onClick={props.onClickPick(props.item?._id)}
                  />
                  {props.item?.pickedCount}
                </s.IconWrapper>
              </s.ItemWrapper2>
            </s.WrapperItems>
          </s.WrapperScroll>
        </s.Main>
      </s.SubWrapper>
    </s.Wrapper>
  );
}
