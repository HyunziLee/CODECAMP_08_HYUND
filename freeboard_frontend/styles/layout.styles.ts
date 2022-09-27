import styled from "@emotion/styled";

export const Wrapper_banner = styled.div`
  height: 500px;
`;

export const WrapperFooter = styled.div`
  height: 300px;
  background-color: #e3e4e6;
`;

export const WrapperHeader = styled.div`
  height: 80px;
`;

export const WrapperHeaderMenu = styled.div`
  width: 1200px;
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
  width: 100px;
  text-align: center;
  font-size: 15px;
  margin: 10px;
  cursor: pointer;
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

export const Wrapper_Detail = styled.div`
  height: 80px;
`;

export const HeaderDetail = styled.div<{ Opacity: string }>`
  width: 1200px;
  height: 300px;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #bbd0ff;
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
  text-align: center;
  margin: 10px;
`;
export const Div = styled.div`
  width: 100px;
  height: 40px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
`;
