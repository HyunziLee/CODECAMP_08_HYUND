import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentUIProps {
  onClickCommentBtn: () => void;
  commentInputFunc: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rating: Dispatch<SetStateAction<number>>;
  };
  data?: Pick<IQuery, "fetchBoardComments">;
  rating: number;
}

export interface IModalContainerProps {
  isNull: boolean;
  // isModal: boolean;
}
