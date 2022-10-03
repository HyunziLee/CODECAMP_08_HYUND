import { useMutation, useQuery } from "@apollo/client";

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
import * as s from "./market.styles";
import { useRouter } from "next/router";
import { Modal } from "antd";

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

  const onClickPick = (useditemId: string) => async () => {
    try {
      await toggleUsedItemPick({
        variables: {
          useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "로그인 후 이용가능합니다." });
    }
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
    <s.Wrapper>
      <s.Main>
        <s.WrapperScroll>
          <s.Scroll
            pageStart={0}
            loadMore={onFetchMore}
            hasMore={true}
            useWindow={false}
          >
            {data?.fetchUseditems &&
              data?.fetchUseditems.map((el, index) => (
                <MarketUI
                  key={uuidv4()}
                  item={el}
                  onClickDetail={onClickDetail}
                  onClickPick={onClickPick}
                  IPick={IPick}
                />
              ))}
          </s.Scroll>
        </s.WrapperScroll>
      </s.Main>
    </s.Wrapper>
  );
}
