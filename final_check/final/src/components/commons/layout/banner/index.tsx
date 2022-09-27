import styled from "@emotion/styled";

import {
  // Badge,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  basketLength,
  userInfoState,
} from "../../../../commons/store";
import * as s from "../../../../../styles/banner.styles";

import PaymentPage from "../../payment";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "../../../../commons/gql";

export default function LayoutBanner() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [basketTemp, setBasketTemp] = useRecoilState(basketLength);
  const [baskets, setBaskets] = useState([]);
  const [price, setPrice] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);
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
  const onClickMove = (path) => () => {
    router.push(path);
  };

  const onClickLogOut = () => {
    logoutUser;
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

              <s.Menu onClick={onClickLogOut}>로그아웃</s.Menu>
              <s.Menu>
                장바구니
                <s.Badge>{basketTemp}</s.Badge>
              </s.Menu>
            </s.MenuWrapper>
          ) : (
            <s.MenuWrapper>
              <s.Menu onClick={onClickMove("/login")}>로그인</s.Menu>

              <s.Menu onClick={onClickMove("/Join")}>회원가입</s.Menu>
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
