import styled from "@emotion/styled";

export const WrapperScroll = styled.div`
  height: 1000px;
  overflow: auto;
`;

export const Wrapper = styled.div`
  width: 1374px;

  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  width: 250px;
  height: 320px;
  border: 1px solid #555555;
  display: flex;
  flex-direction: column;
  margin: 10px;
  cursor: pointer;
`;

export const ItemImg = styled.img`
  width: 248px;
  height: 221px;
`;
export const ItemInfoWrapper = styled.div`
  width: 248px;
  height: 99px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Item = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin: 10px;
`;
export const ItemDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
