import styled from "@emotion/styled";
import { ErrorOutline } from "@mui/icons-material";
import { Container } from "@mui/system";
import { BOX_SHADOW } from "../../../../commons/stylesConst";
export const Wrapper = styled(Container)``;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${BOX_SHADOW};
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const NodataImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
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

export const ImageBigWrapper = styled.div`
  width: 90%;
  height: 300px;
`;
export const ImageBig = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ImageSmallWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100px;
  align-items: left;
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
  @media (max-width: 767px) {
    width: 100%;
  }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

export const DetailImgWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;
export const DetailImg = styled.img`
  width: 60%;
  height: 500px;
  margin-top: 10px;
  object-fit: cover;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 30px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Button = styled.button<{ bgColor: string; fontColor: string }>`
  width: 45%;
  height: 60px;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.bgColor};
  font-weight: 700;
  border: none;
  margin: 0 20px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 45%;
  }
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

export const NodataWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: aqua;
`;
