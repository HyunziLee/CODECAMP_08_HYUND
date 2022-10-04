import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";

import { FETCH_USEDITEMS_I_SOLD } from "../queries";
import SellHistoryUI from "./ sellHistory.presenter";

export default function SellHistory() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USEDITEMS_I_SOLD);
  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemsISold.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemsISold)
          return { fetchUseditemsISold: [...prev.fetchUseditemsISold] };

        return {
          fetchUseditemsISold: [
            ...prev.fetchUseditemsISold,
            ...fetchMoreResult.fetchUseditemsISold,
          ],
        };
      },
    });
  };

  return (
    <SellHistoryUI onFetchMore={onFetchMore} data={data?.fetchUseditemsISold} />
  );
}
