import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { BOX_SHADOW } from "../../../../commons/stylesConst";

export const Wrapper = styled(Container)``;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: ${BOX_SHADOW};
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 40%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const ImageBig = styled.img`
  width: 90%;
  height: 300px;
  object-fit: cover;
`;
export const ImageSmallWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100px;

  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
export const ImageSmall = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px;
  text-align: center;
  line-height: 80px;
  background-color: #d1d1d1;
`;

export const InputWrapper = styled.section`
  width: 60%;
  margin-top: 40px;
  @media (max-width: 767px) {
    width: 100%;
  }
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

export const SubmitBtnWrapper = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
