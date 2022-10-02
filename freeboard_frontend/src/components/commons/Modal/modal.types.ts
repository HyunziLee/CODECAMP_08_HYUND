import { ChangeEvent } from "react";

export interface IModalProps {
  handleOk: () => void;
  handleCancel: () => void;
  onChangeDetailAddress: (e: ChangeEvent<HTMLInputElement>) => void;
}
