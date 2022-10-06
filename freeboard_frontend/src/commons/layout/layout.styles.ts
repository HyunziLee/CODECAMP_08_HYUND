import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const WrapperFooter = styled.div`
  height: 200px;
  background-color: #f5f5f5;
`;
export const FooterMain = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;

`;
export const TitleWrapper = styled.div<{direction: string}>`
  width: 20%;
  display: flex;
  flex-direction: ${props=>props.direction};
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 40%;
  }
 

`;
export const FooterTitle = styled.div<{size: string}>`
  font-size: ${(props)=>props.size};
  color: #c0c0c0;
  @media (max-width: 767px) {
    font-size: 0.5rem;
  }
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
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 0.7rem;
  }
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
  font-size: 1rem;
  font-weight: 700;

  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 0.7rem;
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
  background-color: #f9f9f9;
  opacity: 0.9;

  z-index: 90;
  animation: ${(props) => props.Opacity} 0.5s linear;
  @media (max-width: 767px) {
    height: 150px;
  }
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
    font-size: 0.5rem;
  }
`;
