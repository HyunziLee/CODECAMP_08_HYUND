import React, { ChangeEvent } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentUIProps {
  onClickCommentBtn: () => void;
  commentInputFunc: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLInputElement>) => void;
    rating: React.Dispatch<React.SetStateAction<number>>;
  };
  rating: number;
  contents: string;
}

export interface IModalContainerProps {
  isNull: boolean;
  isModal: boolean;
  isEditClicked: boolean;
  setIsEditClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPopoverProps {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  commentInputFunc: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLInputElement>) => void;
    rating: React.Dispatch<React.SetStateAction<number>>;
  };
  password: string;
  data: IBoardComment;
  contents: string;
  isEditBtn: () => void;
}

export interface ICommentScrollProps {
  key: string;
  el: IBoardComment;
  commentInputFunc: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLInputElement>) => void;
    rating: React.Dispatch<React.SetStateAction<number>>;
  };
  contents: string;
}
