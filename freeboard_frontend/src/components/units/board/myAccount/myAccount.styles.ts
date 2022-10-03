import styled from "@emotion/styled";
import { Container } from "@mui/material";
import {
  AccountCircle,
  Payment,
  SentimentDissatisfied,
  Storefront,
} from "@mui/icons-material";
import { MAIN_COLOR } from "../../../../commons/stylesConst";

export const Wrapper = styled(Container)``;

export const Main = styled.main`
  width: 100%;
`;

export const WrapperButton = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 20%;
  height: 300px;
  border: 2px solid ${MAIN_COLOR};
  background-color: #fff;
  border-radius: 10px;
  margin: 20px;

  cursor: pointer;
  color: #222;
  @media (max-width: 767px) {
    width: 50%;
    height: 50px;
    margin: 10px;
    font-size: 0.5rem;
  }
`;

export const CustomPayment = styled(Payment)`
  font-size: 3rem;
  color: ${MAIN_COLOR};
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const CustomStorefront = styled(Storefront)`
  font-size: 3rem;
  color: ${MAIN_COLOR};
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const CustomAccountCircle = styled(AccountCircle)`
  font-size: 3rem;
  color: ${MAIN_COLOR};
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const CustomSentimentDissatisfied = styled(SentimentDissatisfied)`
  font-size: 3rem;
  color: ${MAIN_COLOR};
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;