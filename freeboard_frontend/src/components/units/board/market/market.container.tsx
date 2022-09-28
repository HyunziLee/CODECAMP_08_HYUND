import { useMutation, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
} from "../queries";
import MarketUI from "./market.presener";
import { v4 as uuidv4 } from "uuid";
import * as s from "../../../../../styles/market.styles";
import { useRouter } from "next/router";

export default function MarketContainer() {
  const router = useRouter();
  const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const { data: IPick } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_I_PICKED, {
    variables: { search: "" },
  });
  console.log(IPick);

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

  const onClickPick = (parm: string) => () => {
    toggleUsedItemPick({
      variables: {
        useditemId: parm,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEMS,
        },
      ],
      // optimisticResponse:{
      //   toggleUsedItemPick: (fetchBD?.fetchUseditem.pickedCount || 0)+1
      // },
      // update(cache,{data}){
      //   cache.writeQuery({
      //     query: FETCH_USED_ITEM,
      //     variables:{useditemId:parm},
      //     data:{
      //       fetchUseditem:{
      //         _id : parm,
      //         _typename: "Useditem",

      //       }
      //     }
      //   })
      // }
    });
  };

  const onClickDetail = (id: string, img: string) => () => {
    router.push(`/CreateItemSuccess/${id}`);

    const recentImages = JSON.parse(
      sessionStorage.getItem("recentImages") || "[]"
    );

    if (recentImages) {
      const temp = recentImages.filter((el: string) => el === img); // temp는 임시로 저장할 때 주로 작명함
      if (temp.length === 1) {
        return;
      }
    }

    recentImages.unshift(img);

    sessionStorage.setItem("recentImages", JSON.stringify(recentImages));
    router.push(`/CreateItemSuccess/${id}`);
  };
  // console.log(IPick);

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
            <MarketUI
              key={uuidv4()}
              item={el}
              onClickDetail={onClickDetail}
              onClickPick={onClickPick}
              IPick={IPick}
            />
          ))}
        </InfiniteScroll>
      </s.WrapperScroll>
    </>
  );
}
