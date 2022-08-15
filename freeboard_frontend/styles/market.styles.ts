import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 1200px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 15%;
  height: 140px;
  margin-bottom: 10px;
  cursor: pointer;
`;
export const ItemContents = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
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
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ItemSeller = styled.div`
  width: 50%;

  font-size: 20px;
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
