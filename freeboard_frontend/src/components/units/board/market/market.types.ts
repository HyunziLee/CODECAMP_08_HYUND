import { IQuery, IUseditem } from "../../../../commons/types/generated/types";

export interface IMarketUIProps {
  item: IUseditem;
  onClickDetail: (id: string, img: string) => () => void;
  onClickPick: (parm: string) => () => void;
  IPick: Pick<IQuery, "fetchUseditemsIPicked"> | undefined;
}
