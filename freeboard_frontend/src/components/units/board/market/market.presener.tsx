import { AddShoppingCart, FavoriteBorder } from "@mui/icons-material";
import { useRecoilState } from "recoil";
import * as s from "./market.styles";
import { onClickBasket } from "../../../commons/Function/onClickAddBaskets";

import { basketLength } from "../../../../commons/store";

import { IMarketUIProps } from "./market.types";

export default function MarketUI(props: IMarketUIProps) {
  const [basketTemp, setBasketTemp] = useRecoilState(basketLength); // eslint-disable-line no-unused-vars

  return (
    <s.WrapperItems>
      {props.item?.images[0] === undefined ? (
        <s.NodataImg onClick={props.onClickDetail(props.item?._id, "")}>
          <s.CustomError />
        </s.NodataImg>
      ) : (
        <s.ItemImage
          src={`https://storage.googleapis.com/${props.item?.images[0]}`}
          onClick={props.onClickDetail(props.item?._id, props.item?.images[0])}
        />
      )}

      <s.ItemContents>
        <s.Item
          color="#333"
          size="1rem"
          weight="400"
          onClick={props.onClickDetail(
            props.item?._id,
            props.item?.images[0] !== undefined ? props.item?.images[0] : ""
          )}
        >
          {props.item?.name}
        </s.Item>
        <s.Item color="red" size="1.2rem" weight="700">
          {props.item?.price}
        </s.Item>
      </s.ItemContents>
      <s.ItemWrapper>
        <s.Item color="#333" size="1rem" weight="400">
          {props.item?.seller?.name}
        </s.Item>
        <s.IconWrapper>
          <AddShoppingCart
            onClick={() => {
              const result = onClickBasket(props.item);
              setBasketTemp(Number(result));
            }}
          />
          <FavoriteBorder onClick={props.onClickPick(props.item?._id)} />
          {props.item?.pickedCount}
        </s.IconWrapper>
      </s.ItemWrapper>
    </s.WrapperItems>
  );
}
