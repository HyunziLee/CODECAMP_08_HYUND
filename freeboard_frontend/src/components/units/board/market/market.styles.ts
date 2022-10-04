import styled from "@emotion/styled";
import { ErrorOutline } from "@mui/icons-material";
import { Container } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled(Container)``;

export const Main = styled.main``;
export const WrapperScroll = styled.div`
  height: 900px;
  overflow: auto;
`;

export const Scroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const WrapperItems = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    width: 48%;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  object-fit: cover;
  cursor: pointer;
`;
export const NodataImg = styled.div`
  width: 100%;
  height: 200px;
  cursor: pointer;
  border: 1px solid #333;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const CustomError = styled(ErrorOutline)`
  color: #333;
  font-size: 2.5rem;
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const ItemContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Item = styled.span<{
  color: string;
  size: string;
  weight: string;
}>`
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  cursor: pointer;
`;

export const FavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
