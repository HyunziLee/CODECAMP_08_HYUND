// import { IUseditem } from "../../../../commons/types/generated/types";

type Maybe<T> = T | null | undefined | string;

export interface IPurchaseHistoryProps {
  onFetchMore: () => void;
  // data?: IUseditem[] | undefined;
  data?: any;
  images?: Maybe<string[]> | undefined;
}
