import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { BOX_SHADOW } from "../../../../commons/stylesConst";

export const Wrapper = styled(Container)``;
export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Div = styled.div`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin: 40px 0;
`;

export const PriceUl = styled.ul`
  width: 50%;
  height: 500px;
  box-shadow: ${BOX_SHADOW};
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;
  padding-inline-start: 0px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const PriceLi = styled.li`
  width: 90%;
  height: 300px;
  overflow-y: auto;
  padding-left: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  @media (max-width: 767px) {
    justify-content: center;
    padding-left: 0;
  }
`;
export const PriceBtn = styled.button<{ color: string }>`
  width: 30%;
  height: 60px;
  border: 1px solid #222;

  background-color: ${(props) => props.color};
  margin-left: 5px;
  margin-bottom: 10px;
  font-size: 15px;
  text-align: center;
  line-height: 60px;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 50%;
  }
`;

export const ChargeBtn = styled.button<{ color: string; fontColor: string }>`
  width: 180px;
  height: 60px;
  border: none;
  background-color: ${(props) => props.color};
  color: ${(props) => props.fontColor};
  margin: 10px;
  font-size: 15px;
  text-align: center;
  line-height: 60px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`;
