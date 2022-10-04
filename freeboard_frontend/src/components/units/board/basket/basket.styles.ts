import styled from "@emotion/styled";
import { ErrorOutline } from "@mui/icons-material";
import { Container } from "@mui/system";

export const Wrapper = styled(Container)``;

export const Main = styled.main`
  width: 100%;
  height: 500px;
  overflow: auto;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const Basket = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

export const ItemImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 16px;
`;
export const Text = styled.div``;
export const Nodata = styled.section`
  width: 100%;
`;

export const NodataImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  border: 1px solid #333;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
`;
export const CustomError = styled(ErrorOutline)`
  color: #333;
  font-size: 2.5rem;
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;
