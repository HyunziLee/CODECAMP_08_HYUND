import { Container } from "@mui/material";

import * as s from "../../../../../styles/myAccount.styles";

export default function MyAccountUI(props) {
  return (
    <Container maxWidth="xl">
      <s.Wrapper>
        <s.PriceUl>
          <s.Div>{props.data?.name}님 지갑 충전하기</s.Div>
          {props.priceList.map((el, i) => (
            <s.PriceLi key={el}>
              <s.PriceBtn
                value={el}
                onClick={props.onSelect(i)}
                color={props.isClick[i] ? "#e9ecef" : "#fff"}
              >
                {el}
              </s.PriceBtn>
            </s.PriceLi>
          ))}
        </s.PriceUl>
        <s.ChargeBtn onClick={props.onClickPrice}>충전하기</s.ChargeBtn>
      </s.Wrapper>
    </Container>
  );
}
