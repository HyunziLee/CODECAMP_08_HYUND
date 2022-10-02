import { Modal } from "antd";

import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useRecoilState } from "recoil";
import * as s from "./modal.styles";

import { IModalProps } from "./modal.types";
import { addressValue, modalState } from "../../../commons/store";

export default function ModalUI(props: IModalProps) {
  const [modalOpen] = useRecoilState(modalState);
  const [resultValue, setResultValue] = useRecoilState(addressValue);
  const handleComplete = (data: any) => {
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

    const temp = { ...resultValue };
    temp.fullAddress = fullAddress;
    temp.zoneCode = data.zonecode;
    setResultValue(temp);

    // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <>
      {modalOpen && (
        <Modal
          title="주소 검색"
          visible={modalOpen}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
          {resultValue.fullAddress && (
            <s.Wrapper>
              <s.Address>
                <s.Text weight="700">선택 주소</s.Text>
                <s.Text weight="400">{resultValue.fullAddress}</s.Text>
              </s.Address>
              <s.Address>
                <s.Text weight="700">상세주소 입력</s.Text>
                <s.Input onChange={props.onChangeDetailAddress} />
              </s.Address>
            </s.Wrapper>
          )}
        </Modal>
      )}
    </>
  );
}
