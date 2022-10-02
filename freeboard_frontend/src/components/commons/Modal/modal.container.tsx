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
  console.log(resultValue);

  const handleCancel = () => {
    setModalOpen(false);
  };

  const onChangeDetailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setDetailAdd(event.target.value);
  };
  console.log(detailAdd);

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
