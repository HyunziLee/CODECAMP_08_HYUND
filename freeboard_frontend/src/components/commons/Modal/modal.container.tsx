import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../commons/store";
import ModalUI from "./modal.presenter";

export default function ModalContainer() {
  const [modalOpen] = useRecoilState(modalState);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {modalOpen && (
        <ModalUI
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
        />
      )}
    </>
  );
}
