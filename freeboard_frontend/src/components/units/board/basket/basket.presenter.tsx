// import { IUseditem } from "../../../../commons/types/generated/types";
import * as s from "./basket.styles";
import { v4 as uuidv4 } from "uuid";
import { IBasketProps } from "./basket.types";
import { useEffect } from "react";
export default function BasketUI(props: IBasketProps) {
  let baskets: string[] = []
  useEffect(()=>{
     baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
  },[])

  return (
    <s.Wrapper>
      <s.Main>
        <s.Title>장바구니</s.Title>
        {baskets.length === 0 ? (
          <s.Nodata>
            <s.Text>장바구니가 비었습니다.</s.Text>
          </s.Nodata>
        ) : (
          baskets.map((el: any) => (
            <s.Basket
              key={uuidv4()}
              onClick={() => props.onClickDetail(el._id)}
            >
              {el?.images[0] !== undefined ? (
                <s.ItemImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              ) : (
                <s.NodataImg>
                  <s.CustomError />
                </s.NodataImg>
              )}

              <s.Text>{el.name}</s.Text>
              <s.Text>{el.price}</s.Text>
            </s.Basket>
          ))
        )}
      </s.Main>
    </s.Wrapper>
  );
}
