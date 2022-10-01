import { Button, Modal } from "antd";
import { Postcode } from "react-daum-postcode/lib/loadPostcode";
import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useRecoilState } from "recoil";

import { IModalProps } from "./modal.types";
import { modalState } from "../../../commons/store";

export default function ModalUI(props: IModalProps) {
  const [modalOpen] = useRecoilState(modalState);
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <>
      {modalOpen && (
        <Modal
          title="주소 검색"
          visible={props.isModalVisible}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
