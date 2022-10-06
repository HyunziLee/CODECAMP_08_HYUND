import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const Wrapper = styled(Container)`
   height: 100vh;
 
`;

export const Main = styled.main`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const WarningWrapper = styled.div`
  width: 100%;
  height: 30px;
  background-color: yellow;
`;
export const Text = styled.div<{ size: string; weight: string; align: string }>`
  width: 100%;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
`;
export const InputWrapper = styled.div`
  width: 100%;
  margin: 50px 0px;
`;

export const SubService = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SubServiceText = styled.div``;
export const FindUserInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
