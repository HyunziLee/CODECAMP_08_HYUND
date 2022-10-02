import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { addressValue, modalState } from "../../../commons/store";
import ModalUI from "./modal.presenter";

export default function ModalContainer() {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [resultValue, setResultValue] = useRecoilState(addressValue);
  const [detailAdd, setDetailAdd] = useState("");

  const handleOk = () => {
    const temp = { ...resultValue };
    temp.detailAddress = detailAdd;
    setResultValue(temp);
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const onChangeDetailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setDetailAdd(event.target.value);
  };

  return (
    <>
      {modalOpen && (
        <ModalUI
          handleOk={handleOk}
          handleCancel={handleCancel}
          onChangeDetailAddress={onChangeDetailAddress}
        />
      )}
    </>
  );
}
