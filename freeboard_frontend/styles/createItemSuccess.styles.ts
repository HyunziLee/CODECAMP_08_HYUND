import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;

  display: flex;
  flex-direction: row;

  margin: auto;
`;

export const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 40px;
`;
export const ImageBig = styled.img`
  width: 90%;
  height: 300px;
`;
export const ImageSmallWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100px;

  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
export const ImageSmall = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px;
  text-align: center;
  line-height: 80px;
  background-color: #d1d1d1;
  cursor: pointer;
`;

export const ContentsWrapper = styled.section`
  width: 60%;

  margin-top: 40px;
  margin-left: 20px;
`;

export const TitleH4 = styled.h4``;
export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentsH3 = styled.h3`
  font-weight: 800;
`;
export const ContentsDiv = styled.div`
  margin-bottom: 30px;
`;

export const DetailWrapper = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;

  margin: auto;
  margin-top: 200px;
`;

export const DetailImgWrapper = styled.section`
  /* width: 90%; */
  display: flex;
  flex-direction: column;
  margin-top: 30ox;
  margin: auto;
`;
export const DetailImg = styled.img`
  width: 700px;
  height: 500ox;
`;

export const ButtonWrapper = styled.div`
  width: 90%;

  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const BuyButton = styled.button`
  width: 150px;
  height: 60px;
  background-color: ${(props) => props.color};
  /* background-color: #bbd0ff; */
  border: none;
  margin: 0 20px;
  cursor: pointer;
`;
export const InputRemarks = styled.div``;
export const InputContents = styled.div``;
export const InputPrice = styled.div``;
export const InputTag = styled.div``;
export const InputAddress = styled.div``;
export const KakaoMap = styled.div`
  width: 500px;
  height: 400px;
`;
