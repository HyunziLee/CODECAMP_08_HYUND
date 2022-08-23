import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM, FETCH_USED_ITEMS } from "../../../../commons/gql";
import MainUI from "./main.presenter";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

import * as s from "../../../../../styles/main.styles";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { useRecoilState } from "recoil";

export default function MainContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data: useItemDetail } = useQuery(FETCH_USED_ITEM, {
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
    router.push(`/Detail/${id}`);
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
          <s.Wrapper>
            {data?.fetchUseditems.map((el, index) => (
              <MainUI key={uuidv4()} item={el} onClickDetail={onClickDetail} />

              // <MarketUI key={uuidv4()} item={el} onClickDetail={onClickDetail} />
            ))}
          </s.Wrapper>
        </InfiniteScroll>
      </s.WrapperScroll>
    </>
  );
}
