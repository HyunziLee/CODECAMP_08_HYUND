import {
  AccountCircle,
  Payment,
  SentimentDissatisfied,
  Storefront,
} from "@mui/icons-material";
import { Container } from "@mui/material";

import * as s from "../../../../../styles/myAccount.styles";
import Link from "next/link";

export default function MyAccountUI(props) {
  return (
    <>
      <s.Wrapper>
        <s.WrapperButton>
          <Link href={"/ChargePoint"}>
            <s.Button>
              <Payment style={{ fontSize: "50px", color: "#ABC2E8" }} />
              <p>충전하기</p>
            </s.Button>
          </Link>

          <Link href={"/CreateItem"}>
            <s.Button>
              <Storefront style={{ fontSize: "50px", color: "#ABC2E8" }} />
              <p>내 상점</p>
            </s.Button>
          </Link>
          <s.Button>
            <AccountCircle style={{ fontSize: "50px", color: "#ABC2E8" }} />
            <p>내 정보 수정</p>
          </s.Button>
          <s.Button>
            <SentimentDissatisfied
              style={{ fontSize: "50px", color: "#ABC2E8" }}
            />
            <p>XXXXX</p>
          </s.Button>
        </s.WrapperButton>
      </s.Wrapper>
    </>
    // <Container maxWidth="xl">
    //   <s.Wrapper>
    //     <s.PriceUl>
    //       <s.Div>{props.data?.name}님 지갑 충전하기</s.Div>
    //       {props.priceList.map((el, i) => (
    //         <s.PriceLi key={el}>
    //           <s.PriceBtn
    //             value={el}
    //             onClick={props.onSelect(i)}
    //             color={props.isClick[i] ? "#e9ecef" : "#fff"}
    //           >
    //             {el}
    //           </s.PriceBtn>
    //         </s.PriceLi>
    //       ))}
    //     </s.PriceUl>
    //     <s.ChargeBtn onClick={props.onClickPrice}>충전하기</s.ChargeBtn>
    //   </s.Wrapper>
    // </Container>
  );
}
