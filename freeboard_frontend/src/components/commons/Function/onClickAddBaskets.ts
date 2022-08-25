import { useRecoilState } from "recoil";
import { basketLength } from "../store";

export const onClickBasket = (fetchUsedItem: {}) => {
  const [basketTemp, setBasketTemp] = useRecoilState(basketLength);
  console.log(fetchUsedItem);
  // 1. 기존 장바구니 가져오기

  const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

  // 2. 이미 담겼는지 확인하기
  // const temp = baskets.filter((el) => el._id === fetchUsedItem._id); // temp는 임시로 저장할 때 주로 작명함
  // if (temp.length === 1) {
  //   alert("장바구니에 동일한 상품이 있습니다.");
  //   return;
  // }

  // 3. 해당 장바구니에 담기
  const { __typename, ...newBasket } = fetchUsedItem;
  baskets.push(newBasket);
  localStorage.setItem("baskets", JSON.stringify(baskets)); // localStorage는 항상 문자열만 저장 가능

  setBasketTemp(baskets.length);
};
