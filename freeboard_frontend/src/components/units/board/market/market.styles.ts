import styled from "@emotion/styled";
import { Container } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";
import { BOX_SHADOW } from "../../../../commons/stylesConst";

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
export const NoImg = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: aliceblue;
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
