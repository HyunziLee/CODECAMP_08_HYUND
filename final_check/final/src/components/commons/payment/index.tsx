import { useMutation } from "@apollo/client";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "../../../commons/gql";
import { accessTokenState, userInfoState } from "../../../commons/store";
declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage(props) {
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp01040085"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        merchant_uid: `ORD20180131-00000${uuidv4()}`,
        name: "포인트충전",
        amount: props.price,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp.imp_uid);

          const result = createPointTransactionOfLoading({
            variables: {
              impUid: String(rsp.imp_uid),
            },
          });

          console.log(result);

          // 결제 성공 시 로직,
          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          // ex, createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해주삼");
        }
      }
    );
  };

  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
          async
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
          async
        ></script>
      </Head>
      <button style={{ border: "none" }} onClick={onClickPayment}>
        결제하기
      </button>
    </div>
  );
}
