import { useRecoilState } from "recoil";
import { withAuth } from "../../../commons/hoc/withAuth";
import { userInfoState } from "../../../../commons/store";
import Head from "next/head";

import { useState } from "react";
import ChargePointUI from "./chargePoint.presenter";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@apollo/client";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "../queries";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/types/generated/types";

declare const window: typeof globalThis & {
  IMP: any;
};

function ChargePointContainer() {
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);
  const [userInfo] = useRecoilState(userInfoState);
  // const client = useApolloClient();
  const priceList = [500, 1000, 2000, 5000, 0, 0, 0, 0];
  const [selectPrice, setSelectPrice] = useState(0);

  const [isClick, setIsClick] = useState(Array(8).fill(false));

  const onSelect =
    (index: number) => (event: { target: { value: number } }) => {
      setIsClick(isClick.fill(false));
      const copy = [...isClick];
      copy[index] = true;
      setIsClick(copy);
      setSelectPrice(event.target.value);
    };

  const onClickPrice = async () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    await IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        merchant_uid: `ORD20180131-00000${uuidv4()}`,
        name: "노르웨이 회전 의자",
        amount: selectPrice,
        buyer_email: userInfo.email,
        buyer_name: userInfo.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/",
      },
      async (rsp: any) => {
        if (rsp.success) {
          const impUid = rsp.imp_uid;
          await createPointTransactionOfLoading({
            variables: {
              impUid,
            },
          });

          // const resultUserInfo = await client.mutate({
          //   mutation: CREATE_POINT_TRANSACTION_OF_LOADING,
          //   variables: {
          //     impUid,
          //   },
          // });
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해주삼");
        }
      }
    );
  };

  return (
    <>
      <div>
        <Head>
          {/* <!-- jQuery --> */}
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
          {/* <!-- iamport.payment.js --> */}
          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
          ></script>
        </Head>
      </div>

      <ChargePointUI
        data={userInfo}
        onClickPrice={onClickPrice}
        priceList={priceList}
        onSelect={onSelect}
        selectPrice={selectPrice}
        isClick={isClick}
      />
    </>
  );
}

export default withAuth(ChargePointContainer);
