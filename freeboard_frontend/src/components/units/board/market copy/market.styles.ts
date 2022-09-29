import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const Wrapper = styled(Container)``;

export const Main = styled.main`
  width: 100%;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: yellow;
`;
export const WrapperScroll = styled.div`
  height: 900px;
  overflow: auto;
`;

export const WrapperItems = styled.section`
  display: flex;
  flex-direction: row;
  width: 90%;

  border-bottom: 2px solid #edede9;
`;

export const ItemImage = styled.img`
  width: 20%;
  height: 140px;
  margin-bottom: 10px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 30%;
  }
`;
export const NoImg = styled.div`
  width: 20%;
  height: 140px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: aliceblue;
  @media (max-width: 767px) {
    width: 30%;
  }
`;
export const ItemContents = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  background-color: yellowgreen;
`;

export const ItemName = styled.h4`
  font-weight: 800;
  margin-left: 20px;
`;

export const ItemPrice = styled.h2`
  color: red;
  font-weight: 800;
  margin-left: 20px;
`;
export const ItemWrapper2 = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
`;

export const ItemSeller = styled.div`
  width: 50%;
  background-color: orange;
  font-size: 20px;
  @media (max-width: 767px) {
    width: 100%;
  }
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
