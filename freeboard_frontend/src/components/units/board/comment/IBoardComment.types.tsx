import React, { ChangeEvent } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentUIProps {
  onClickCommentBtn: () => void;
  commentInputFunc: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rating: React.Dispatch<React.SetStateAction<number>>;
  };
  rating: number;
  contents: string;
}
export interface ICommentEditProps {
  commentInputFunc: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rating: React.Dispatch<React.SetStateAction<number>>;
  };

  contents: string;
}

export interface IPopoverProps {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  commentInputFunc: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rating: React.Dispatch<React.SetStateAction<number>>;
  };
  password: string;
  data: IBoardComment;
  contents: string;
}

export interface ICommentScrollProps {
  key: string;
  el: IBoardComment;
  commentInputFunc: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rating: React.Dispatch<React.SetStateAction<number>>;
  };
  contents: string;
}
