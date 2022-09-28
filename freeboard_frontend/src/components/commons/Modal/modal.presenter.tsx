import { Button, Modal } from "antd";
import { Postcode } from "react-daum-postcode/lib/loadPostcode";
import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useRecoilState } from "recoil";
import { commentForModal } from "../../../commons/store";
import { IModalProps } from "./modal.types";

export default function ModalUI(props: IModalProps) {
  const [commentModal] = useRecoilState(commentForModal);
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
      {
        // isModal 이 true 이면 daumpost 모달
        // 아니면 댓글 경고 모달(댓글 경고에는 isModal 상태 없음)

        props.isModal === true ? (
          <Modal
            title="주소 검색"
            visible={props.isModalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
          >
            <DaumPostcodeEmbed onComplete={handleComplete} />
          </Modal>
        ) : (
          <Modal
            title="입력 확인"
            visible={props.isModalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
          >
            <p>{commentModal}</p>
          </Modal>
        )
      }
    </>
  );
}
