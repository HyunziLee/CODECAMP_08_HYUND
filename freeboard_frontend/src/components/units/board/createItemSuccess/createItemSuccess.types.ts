import { IUseditem } from "../../../../commons/types/generated/types";

export interface ICreateItemSuccessUIProps {
  data?: IUseditem;

  onClickImg: (Img: string) => () => void;
  onClickBuying: () => Promise<void>;
  onClickEdit: (id: string) => () => void;
  onClickDelete: (useditemId: string) => () => Promise<void>;
}
