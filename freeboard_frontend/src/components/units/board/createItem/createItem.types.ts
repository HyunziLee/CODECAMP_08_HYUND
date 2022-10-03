import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IUseditem } from "../../../../commons/types/generated/types";

export interface ICreateItemProps {
  data?: IUseditem;
}
export interface IUseForm {
  name: string;
  remarks: string;
  price: number;
  contents: string;
}

export interface ICreateItemUIProps {
  onChangeContents: (value: string) => void;
  register: UseFormRegister<IUseForm>;
  handleSubmit: UseFormHandleSubmit<IUseForm>;
  onClickCreateItem: (data: IUseForm) => void;
  formState: FormState<IUseForm>;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickUpdate: (data: IUseForm) => Promise<void>;
  data?: IUseditem;
}
