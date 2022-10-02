import * as s from "./chargePoint.styles";
import { IChargePointProps } from "./chargePoint.types";
import { v4 as uuidv4 } from "uuid";

export default function ChargePointUI(props: IChargePointProps) {
  return (
    <s.Wrapper>
      <s.Main>
        <s.PriceUl>
          <s.Div>{props.data?.name}님 지갑 충전하기</s.Div>
          <s.PriceLi>
            {props.priceList.map((el, index: number) => (
              <s.PriceBtn
                key={uuidv4()}
                value={el}
                onClick={props.onSelect(index)}
                color={props.isClick[index] ? "#e9ecef" : "#fff"}
              >
                {el}
              </s.PriceBtn>
            ))}
          </s.PriceLi>
        </s.PriceUl>
        <s.ChargeBtn
          color={props.isSelect ? "#111" : "#f5f5f5"}
          fontColor={props.isSelect ? "#fff" : "#111"}
          onClick={props.onClickPrice}
          disabled={!props.isSelect}
        >
          충전하기
        </s.ChargeBtn>
      </s.Main>
    </s.Wrapper>
  );
}
