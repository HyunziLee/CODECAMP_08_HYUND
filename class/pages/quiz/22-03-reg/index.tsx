import { useState } from "react";

export default function Reg() {
  const [dateReg, setDateReg] = useState(false);
  const [phoneNumReg, setPhoneNumReg] = useState(false);

  const date = (e) => {
    setDateReg(/^\d{4}\.\d{2}\.\d{2}$/.test(e.target.value));
    console.log(dateReg);
  };

  const phoneNumber = (e) => {
    setPhoneNumReg(/^\d{3}\-\d{3,4}\-\d{4}$/.test(e.target.value));
    console.log(phoneNumReg);
  };

  return (
    <>
      날짜 <input type="text" onChange={date} />
      {dateReg ? (
        <div style={{ color: "green" }}>날짜 형식이 맞다</div>
      ) : (
        <div style={{ color: "red" }}>날짜 형식을 확인하세요</div>
      )}
      전화번호 <input type="text" onChange={phoneNumber} />
      {phoneNumReg ? (
        <div style={{ color: "green" }}> 전화번호 형식이 맞다</div>
      ) : (
        <div style={{ color: "red" }}>전화번호 형식을 확인하세요</div>
      )}
    </>
  );
}
