import React, { useState } from "react";
import { IModalContainerProps } from "../../units/board/comment/IBoardComment.types";
import ModalUI from "./modal.presenter";

export default function ModalContainer(props: IModalContainerProps) {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    props.setIsEditClicked(!props.isEditClicked);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    props.setIsEditClicked(!props.isEditClicked);
  };

  return (
    <>
      {props.isNull === true ? (
        <ModalUI
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
          commentModal={props.commentModal}
          isModal={props.isModal}
        ></ModalUI>
      ) : (
        ""
      )}
    </>
  );
}
