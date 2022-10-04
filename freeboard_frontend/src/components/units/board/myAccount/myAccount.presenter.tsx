import * as s from "./myAccount.styles";
import Link from "next/link";

export default function MyAccountUI() {
  return (
    <s.Wrapper>
      <s.Main>
        <s.WrapperButton>
          <Link href={"/ChargePoint"}>
            <s.Button>
              <s.CustomPaid />
              <p>충전하기</p>
            </s.Button>
          </Link>
          <Link href={"/sellHistory"}>
            <s.Button>
              <s.CustomStorefront />
              <p>내 상점</p>
            </s.Button>
          </Link>
          <Link href={"/purchaseHistory"}>
            <s.Button>
              <s.CustomCreditCard />
              <p>구매내역</p>
            </s.Button>
          </Link>
          <s.Button>
            <s.CustomAccountCircle />
            <p>내 정보 수정</p>
          </s.Button>
        </s.WrapperButton>
      </s.Main>
    </s.Wrapper>
  );
}
