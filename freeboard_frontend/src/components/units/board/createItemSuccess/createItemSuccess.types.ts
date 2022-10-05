// import { IUseditem } from "../../../../commons/types/generated/types";

export type Maybe<T> = T | undefined;

export interface ICreateItemSuccessUIProps {
  // data: IUseditem | undefined;
  data: any;
  onClickImg: (Img: string) => () => void;
  onClickBuying: () => Promise<void>;
  onClickEdit: (id: string) => () => void;
  onClickDelete: (useditemId: string) => () => Promise<void>;
}
