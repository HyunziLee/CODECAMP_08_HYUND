import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
`;
export const WrapperMain = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: aliceblue;
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.color};

  margin-bottom: 10px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: yellow;
  width: 100%;
  height: 480px;
`;
export const ItemImage = styled.img`
  width: 480px;
  height: 480px;
  background-color: gray;
`;

export const ItemDetail = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  justify-content: space-around;
`;
export const ItemName = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
`;
export const ItemPrice = styled.div`
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 10px;
`;
export const ItemRemarks = styled.div`
  height: 100px;

  background-color: yellowgreen;
  margin-bottom: 10px;
`;
export const ItemHashTags = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ItemHashTag = styled.div`
  height: 30px;
  border-radius: 30%;
  background-color: #ffe004;
`;

export const ItemButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
export const ItemButton = styled.button`
  width: ${(props) => props.width};
  height: 100px;
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  border: none;
  margin-left: 10px;
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 10px;
`;

export const ItemInfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  background-color: orange;
  margin-right: 10px;
`;
export const Contents = styled.div`
  height: 130px;
  background-color: aquamarine;
`;
export const Map = styled.div``;

export const ItemInfoQnA = styled.div`
  width: 35%;
`;

export const SellerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const SellerAvatar = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: yellow;
`;
export const SellerName = styled.div`
  margin-left: 20px;
  font-weight: 400;
  font-size: 32px;
`;

export const CommentsWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
`;
export const CommentsInput = styled.textarea`
  width: 100%;
  height: 147px;
  margin: auto;
  font-size: 20px;
  font-weight: 700;
`;
export const CommentsButton = styled.button`
  background-color: #ffe004;
  border: none;
  width: 116px;
  height: 42px;
  margin-left: 72%;
`;

export const CommentsResult = styled.div``;

export const Comments = styled.div``;
