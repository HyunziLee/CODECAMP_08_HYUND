import { useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM, FETCH_USED_ITEMS } from "../../../../commons/gql";
import MainUI from "./main.presenter";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

import * as s from "../../../../../styles/main.styles";
import {
  accessTokenState,
  recentImg,
  userInfoState,
} from "../../../../commons/store";
import { useRecoilState } from "recoil";

export default function MainContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const [recent, setRecent] = useRecoilState(recentImg);
  const client = useApolloClient();

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

  const onClickDetail = (id) => async () => {
    const result = await client.query({
      query: FETCH_USED_ITEM,

      variables: {
        useditemId: id,
      },
    });
    console.log(result.data?.fetchUseditem.images[0]);

    // const tempImg = [...recent];
    // tempImg.unshift(result.data?.fetchUseditem.images[0]);
    // setRecent(tempImg);

    // const recentImages = JSON.parse(sessionStorage.getItem("recentImages" || "[]"))

    // if (

    //   sessionStorage.getItem("recentImages").length > 3
    // ) {
    //   sessionStorage.clear();
    // }

    const recentImages = JSON.parse(
      sessionStorage.getItem("recentImages") || "[]"
    );

    if (recentImages.length > 3) {
      sessionStorage.clear();
    }
    if (recentImages) {
      const temp = recentImages.filter(
        (el) => el === result.data?.fetchUseditem.images[0]
      ); // temp는 임시로 저장할 때 주로 작명함
      if (temp.length === 1) {
        return;
      }
    }

    recentImages.unshift(result.data?.fetchUseditem.images[0]);

    sessionStorage.setItem("recentImages", JSON.stringify(recentImages));

    // sessionStorage.setItem("recentImages", JSON.stringify(recentImages));

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
