import { Button, Modal } from "antd";

export default function ModalUI(props) {
  return (
    <>
      <Modal
        title="입력 확인"
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <p>이름, 비밀번호, 내용을 입력하세요</p>
      </Modal>
    </>
  );
}
