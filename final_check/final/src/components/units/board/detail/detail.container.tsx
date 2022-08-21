import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { FETCH_USED_ITEM } from "../../../../commons/gql";
import {
  KakaoMapAddress,
  KakaoMapLa,
  KakaoMapMa,
  userInfoState,
} from "../../../../commons/store";
import { withAuth } from "../../../commons/hoc";
import DetailUI from "./detail.presenter";

export default function DetailContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [la, setLa] = useRecoilState(KakaoMapLa);
  const [ma, setMa] = useRecoilState(KakaoMapMa);

  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.id,
    },
  });
  console.log(data);
  if (!data?.fetchUseditem.useditemAddress) {
    setLa(0);
    setMa(0);
  } else {
    setLa(data?.fetchUseditem.useditemAddress.lat);
    setMa(data?.fetchUseditem.useditemAddress.lng);
  }

  const onClickBasket = (basket) => () => {
    console.log(basket);

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

  return <DetailUI data={data} onClickBasket={onClickBasket} />;
}

// export default withAuth(DetailContainer);
