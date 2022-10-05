import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketUIProps {
  // item: IUseditem;
  item: any;
  onClickDetail: (id: string, img: string) => () => void;
  onClickPick: (parm: string) => () => void;
  IPick: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
}
