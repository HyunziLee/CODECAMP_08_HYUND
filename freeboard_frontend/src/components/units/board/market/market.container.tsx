import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM, FETCH_USED_ITEMS } from "../queries";
import MarketUI from "./market.presener";
import { v4 as uuidv4 } from "uuid";
import * as s from "../../../../../styles/market.styles";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { basketLength } from "../../../commons/store";

export default function MarketContainer() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  console.log(data);

  const { data: useItemDetail } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.id),
    },
  });

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  // const onClickBasket = (basket) => () => {
  //   // 1. 기존 장바구니 가져오기

  //   const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

  //   // 2. 이미 담겼는지 확인하기
  //   const temp = baskets.filter((el) => el._id === basket._id); // temp는 임시로 저장할 때 주로 작명함
  //   if (temp.length === 1) {
  //     alert("장바구니에 동일한 상품이 있습니다.");
  //     return;
  //   }

  //   // 3. 해당 장바구니에 담기
  //   const { __typename, ...newBasket } = basket;
  //   baskets.push(newBasket);
  //   localStorage.setItem("baskets", JSON.stringify(baskets)); // localStorage는 항상 문자열만 저장 가능
  //   console.log(baskets.length);
  //   setBasketTemp(baskets.length);
  // };

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

  const onClickDetail = (id) => () => {
    router.push(`/CreateItemSuccess/${id}`);
  };

  return (
    <>
      <s.WrapperScroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={onFetchMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchUseditems.map((el, index) => (
            <MarketUI key={uuidv4()} item={el} onClickDetail={onClickDetail} />
          ))}
        </InfiniteScroll>
      </s.WrapperScroll>
    </>
  );
}
