import * as s from "./ sellHistory.styles";
import { IPurchaseHistoryProps } from "./ sellHistory.types";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../commons/Function/getDate";
export default function SellHistoryUI(props: IPurchaseHistoryProps) {
  return (
    <s.Wrapper>
      {console.log(props.data)}
      <s.Main>
        <s.Title>내 상품</s.Title>
        {props.data?.length === 0 ? (
          <s.Nodata>
            <s.Text>내 상품이 없습니다.</s.Text>
          </s.Nodata>
        ) : (
          <s.InfiniteScrollLimit>
            <s.InfiniteScrollCustom
              pageStart={0}
              loadMore={props.onFetchMore}
              hasMore={true}
              useWindow={false}
            >
              {props.data?.map((el: any) => (
                <s.PurchaseItem key={uuidv4()}>
                  {el?.images[0] === undefined || el?.images?.length === 0 ? (
                    <s.NodataImg>
                      <s.CustomError />
                    </s.NodataImg>
                  ) : (
                    <s.PurchaseImg
                      src={`https://storage.googleapis.com/${el?.images[0]}`}
                    />
                  )}

                  <s.Text>{el.name}</s.Text>
                  <s.Text>{el.price}</s.Text>
                  <s.Text>{getDate(el.createdAt)}</s.Text>
                  <s.Text>{el.buyer?.name ? "거래완료" : "판매중"}</s.Text>

                  <s.FavoriteWrapper>
                    <s.CustomFavorite />
                    <s.Text>{el.pickedCount}</s.Text>
                  </s.FavoriteWrapper>
                </s.PurchaseItem>
              ))}
            </s.InfiniteScrollCustom>
          </s.InfiniteScrollLimit>
        )}
      </s.Main>
    </s.Wrapper>
  );
}
