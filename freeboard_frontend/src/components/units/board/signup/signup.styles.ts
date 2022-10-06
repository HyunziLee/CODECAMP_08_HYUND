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

export const Title = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
`;
export const InfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
 
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoText = styled.div`
  width: 100%;
  font-size: 1rem;
  font-size: 20px;
`;

export const ServiceCheck = styled.div``;
