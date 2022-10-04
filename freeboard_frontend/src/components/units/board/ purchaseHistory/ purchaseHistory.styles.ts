import styled from "@emotion/styled";
import { ErrorOutline } from "@mui/icons-material";
import { Container } from "@mui/system";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled(Container)``;

export const Main = styled.main`
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const InfiniteScrollLimit = styled.div`
  overflow: auto;
  width: 100%;
  height: 500px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const InfiniteScrollCustom = styled(InfiniteScroll)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
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

export const Text = styled.div`
  width: 20%;

  font-size: 1rem;
  @media (max-width: 767px) {
    font-size: 0.5rem;
  }
`;

export const PurchaseItem = styled.div`
  width: 100%;
  margin: 10px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5f5f5;

  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;

export const PurchaseImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 16px;
  object-fit: cover;
  @media (max-width: 767px) {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
`;
