import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USED_ITEM,
  FETCH_USED_ITEMS,
  TOGGLE_USED_ITEM_PICK,
} from "../../../../commons/gql";
import {
  KakaoMapAddress,
  KakaoMapLa,
  KakaoMapMa,
  recentImg,
  userInfoState,
} from "../../../../commons/store";
import { withAuth } from "../../../commons/hoc/withAuth";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import DetailUI from "./detail.presenter";

export default function DetailContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const [la, setLa] = useRecoilState(KakaoMapLa);
  const [ma, setMa] = useRecoilState(KakaoMapMa);
  const { onClickMovetoPage } = useMoveToPage();
  const [temp, setTemp] = useState(0);
  const [basketTemp, setBasketTemp] = useState(true);

  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.id,
    },
  });
  // console.log(data);

  const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  if (!data?.fetchUseditem.useditemAddress) {
    setLa(0);
    setMa(0);
  } else {
    setLa(data?.fetchUseditem.useditemAddress.lat);
    setMa(data?.fetchUseditem.useditemAddress.lng);
  }

  const onClickBasket = (basket) => () => {
    // 1. 기존 장바구니 가져오기

    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === basket._id); // temp는 임시로 저장할 때 주로 작명함
    if (temp.length === 1) {
      alert("장바구니에 동일한 상품이 있습니다.");
      return;
    }

    // 3. 해당 장바구니에 담기
    const { __typename, ...newBasket } = basket;
    baskets.push(newBasket);
    localStorage.setItem("baskets", JSON.stringify(baskets)); // localStorage는 항상 문자열만 저장 가능
  };

  const onClickPick = (parm) => () => {
    const result = toggleUsedItemPick({
      variables: {
        useditemId: String(parm),
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {
            useditemId: router.query.id,
          },
        },
      ],
    });
  };

  const onClickBuying = () => {
    try {
      createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.id,
        },
        refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      router.push("/");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <DetailUI
      data={data}
      onClickBasket={onClickBasket}
      onClickMovetoPage={onClickMovetoPage}
      onClickPick={onClickPick}
      onClickBuying={onClickBuying}
    />
  );
}

// export default withAuth(DetailContainer);
