import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1100px;

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
export const ImageBig = styled.div`
  width: 90%;
  height: 300px;
  background-color: greenyellow;
`;
export const ImageSmallWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100px;
  background-color: pink;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
export const ImageSmall = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px;
  background-color: orange;
`;

export const InputWrapper = styled.section`
  width: 60%;

  margin-top: 40px;
  margin-left: 20px;
`;

export const InputH3 = styled.h3`
  font-weight: 800;
`;
export const InputDiv = styled.div`
  margin-bottom: 30px;
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
