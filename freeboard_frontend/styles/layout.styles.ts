import styled from "@emotion/styled";

export const Wrapper_banner = styled.div`
  height: 500px;
`;

export const Wrapper_footer = styled.div`
  height: 50px;
  background-color: gray;
`;

export const Wrapper_header = styled.div`
  height: 80px;
`;

export const Header_menu = styled.div`
  width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Header_menu_logo = styled.div`
  width: 10%;
  text-align: center;
  cursor: pointer;
`;
export const Header_menu_menu = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Header_menu_text = styled.div`
  width: 100px;
  text-align: center;
  font-size: 15px;
  margin: 10px;
  cursor: pointer;
`;

export const Header_line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #edede9;
`;

export const Wrapper_nav = styled.div`
  height: 50px;
  background-color: lime;
`;

export const Wrapper_Detail = styled.div`
  height: 80px;
`;

export const Header_detail = styled.div`
  width: 1200px;
  height: 300px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #bbd0ff;

  animation: ${(props) => props.Opacity} 0.5s linear;
`;
export const Header_detail_logo = styled.div`
  width: 10%;
  text-align: center;
`;
export const Header_detail_menu = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Header_detail_text = styled.div`
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
