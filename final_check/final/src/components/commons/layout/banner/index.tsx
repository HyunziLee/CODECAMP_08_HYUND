import styled from "@emotion/styled";

import {
  Badge,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Modal } from "antd";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import * as s from "../../../../../styles/banner.styles";
import ModalPage from "../../Modal";
import PaymentPage from "../../payment";

export default function LayoutBanner() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [baskets, setBaskets] = useState([]);
  const [price, setPrice] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(result);
  }, []);
  const onClickPoint = () => {
    setIsOpen((prev) => !prev);
  };
  const { Option } = Select;
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const PriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <s.Wrapper>
        <s.MainWrapper>
          <s.EmptyDiv></s.EmptyDiv>
          {userInfo ? (
            <s.MenuWrapper>
              <s.Menu>{`${userInfo.name}님의 포인트 ${userInfo.userPoint.amount}p`}</s.Menu>
              <s.Menu onClick={onClickPoint}>충전</s.Menu>

              <s.Menu>로그아웃</s.Menu>
              <s.Menu>
                장바구니
                <Badge
                  badgeContent={baskets.length}
                  color="success"
                  style={{ marginLeft: "15px" }}
                ></Badge>
              </s.Menu>
            </s.MenuWrapper>
          ) : (
            <s.MenuWrapper>
              <s.Menu>로그인</s.Menu>

              <s.Menu>회원가입</s.Menu>
              <s.Menu>장바구니</s.Menu>
            </s.MenuWrapper>
          )}
        </s.MainWrapper>
        {isOpen && (
          <s.ModalWrapper>
            <s.PointModal
              visible={isOpen}
              onOk={onClickPoint}
              onCancel={onClickPoint}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">충전금액</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={price}
                  label="충전 금액"
                  onChange={PriceChange}
                >
                  <MenuItem value={1000}>1000</MenuItem>
                  <MenuItem value={5000}>5000</MenuItem>
                  <MenuItem value={10000}>10000</MenuItem>
                  <MenuItem value={30000}>30000</MenuItem>
                  <MenuItem value={50000}>50000</MenuItem>
                </Select>
                <PaymentPage price={price}></PaymentPage>
              </FormControl>
            </s.PointModal>
          </s.ModalWrapper>
        )}
      </s.Wrapper>
    </>
  );
}
