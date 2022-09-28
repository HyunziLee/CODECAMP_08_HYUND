export interface IModalProps {
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
  isModal: boolean;
}
