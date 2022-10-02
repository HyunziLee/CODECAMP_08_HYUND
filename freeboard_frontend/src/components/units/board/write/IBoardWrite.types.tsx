import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  btnState: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  addressTotal?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface IBoardWriteUIProps {
  InputFunction: {
    writer: (e: ChangeEvent<HTMLInputElement>) => void;
    password: (e: ChangeEvent<HTMLInputElement>) => void;
    title: (e: ChangeEvent<HTMLInputElement>) => void;
    contents: (e: ChangeEvent<HTMLInputElement>) => void;
    youtubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  SignupChk: () => void;
  onClickUpdateBtn: () => void;
  onClickFindAddressModal: () => void;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
  writerMsg: string;
  pwdMsg: string;
  titleMsg: string;
  contentsMsg: string;
  isRatio: boolean;
  isModal: boolean;

  btnState: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
