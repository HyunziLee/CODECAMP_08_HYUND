import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPostListProps {
  MoveToWritePageBtn: () => void;
  onClickRefetch: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onMovetoPageForSearch: (e: MouseEvent<HTMLSpanElement>) => void;
  setIsLastPage: Dispatch<SetStateAction<number>>;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  data?: Pick<IQuery, "fetchBoards">;
  ListDetail?: Pick<IQuery, "fetchBoard">;
  startPage: number;
  lastPageStandard: number;
  isLastPage: number;
  isClicked: boolean;
  keyword: string;
}

export interface IListPaginationUIProps {
  onClickRefetch: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  setIsLastPage: Dispatch<SetStateAction<number>>;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  data?: Pick<IQuery, "fetchBoards">;
  startPage: number;
  lastPageStandard: number;
  isLastPage: number;
  isClicked: boolean;
}
