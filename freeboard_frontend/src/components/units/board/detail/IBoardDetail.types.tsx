import { IBoard, IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailProps {
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardDetailUIProps {
  data?: IBoard;
  MoveToListPageBtn: () => void;
  MoveToEditPageBtn: () => void;
  DeleteBoardBtn: () => void;
  likeBtn: () => void;
  dislikeBtn: () => void;
}
