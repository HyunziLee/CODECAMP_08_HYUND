import { Button, Modal } from "antd";
import React, { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function Quiz() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [add, setAdd] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCompletePostcode = (data: any) => {
    setAdd(data.address);
  };
  console.log(add);

  return (
    <>
      <Button onClick={showModal}>모달</Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={onCompletePostcode} />
        <div>{add}</div>
      </Modal>
    </>
  );
}
