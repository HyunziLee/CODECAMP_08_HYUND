import React, { useState } from "react";
import ModalUI from "./modal.presenter";

export default function ModalContainer(props) {
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

  console.log("dd");

  return (
    <>
      {props.isNull === true ? (
        <ModalUI
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
        ></ModalUI>
      ) : (
        ""
      )}
      {/* <ModalUI
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
      ></ModalUI> */}
    </>
  );
}
