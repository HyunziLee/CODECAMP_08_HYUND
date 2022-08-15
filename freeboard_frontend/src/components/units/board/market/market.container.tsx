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
