import { Button, Modal, Space } from "antd";
import React, { useState } from "react";

export default function Quiz() {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
      <Button type="primary" onClick={showModal}>
        게시물 등록
      </Button>
      <Modal
        title="게시물등록"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>게시물이 등록되었습니다.</p>
      </Modal>
    </>
  );
}
