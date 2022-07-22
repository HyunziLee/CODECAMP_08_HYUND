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
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log("dd");

  const commentModal = "이름, 비밀번호, 내용을 입력하세요";

  return (
    <>
      {props.isNull === true ? (
        <ModalUI
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalVisible={isModalVisible}
          commentModal={commentModal}
          isModal={props.isModal}
        ></ModalUI>
      ) : (
        ""
      )}
    </>
  );
}
