import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { MAIN_COLOR } from "../src/commons/stylesConst";

export const WrapperFooter = styled.div`
  height: 300px;
  background-color: #e3e4e6;
`;

export const WrapperHeader = styled(Container)`
  height: 80px;
`;

export const WrapperHeaderMenu = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderMenuLogo = styled.div`
  text-align: center;
  cursor: pointer;
`;
export const HeaderMenus = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderMenu = styled.div`
  width: 33%;
  text-align: center;
  font-size: 15px;
  margin: 10px;
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #edede9;
`;

export const WrapperNav = styled.div`
  height: 50px;
  background-color: lime;
`;

export const HeaderDetail = styled.div<{ Opacity: string }>`
  width: 100%;
  height: 200px;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${MAIN_COLOR};
  z-index: 90;
  animation: ${(props) => props.Opacity} 0.5s linear;
`;
export const HeaderDetailLogo = styled.div`
  width: 10%;
  text-align: center;
`;
export const HeaderDetailMenus = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderDetailMenu = styled.div`
  width: 33%;
`;
export const Div = styled.div`
  width: 100%;
  height: 40px;
  text-align: center;
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 0.6rem;
  }
`;
