import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USEDITEMS_I_BOUGHT } from "../queries";
import PurchaseHistoryUI from "./ purchaseHistory.presenter";

export default function PurchaseHistory() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USEDITEMS_I_BOUGHT);
  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemsIBought.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemsIBought)
          return { fetchUseditemsIBought: [...prev.fetchUseditemsIBought] };

        return {
          fetchUseditemsIBought: [
            ...prev.fetchUseditemsIBought,
            ...fetchMoreResult.fetchUseditemsIBought,
          ],
        };
      },
    });
  };

  return (
    <PurchaseHistoryUI
      onFetchMore={onFetchMore}
      data={data?.fetchUseditemsIBought}
    />
  );
}
