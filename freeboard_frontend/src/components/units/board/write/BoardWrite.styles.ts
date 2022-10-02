import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { BOX_SHADOW } from "../../../../commons/stylesConst";

export const Wrapper = styled(Container)``;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: ${BOX_SHADOW};
`;
export const WrapperTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin: 30px 0px;
`;
export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

export const WriterAccount = styled.div`
  width: 45%;
`;
export const WriterName = styled.div``;
export const WriterInput = styled.input`
  width: 100%;
  height: 40px;
  &::placeholder {
    color: gray;
    @media (max-width: 767px) {
      font-size: 0.7rem;
    }
  }
`;

export const WriterContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 90%;
`;
export const WriterContentsTitle = styled.div``;
export const WriterContentsInput = styled.input`
  width: 100%;
  height: 40px;
  &::placeholder {
    color: gray;
    @media (max-width: 767px) {
      font-size: 0.7rem;
    }
  }
`;
export const WriterContentsInput2 = styled.input`
  width: 100%;
  height: 400px;
  @media (max-width: 767px) {
    height: 200px;
  }
  &::placeholder {
    color: gray;
    @media (max-width: 767px) {
      font-size: 0.7rem;
    }
  }
`;
export const AddressWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const FindPost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const PostInput = styled.input<{ width: string; align: string }>`
  width: ${(props) => props.width};
  height: 40px;
  text-align: ${(props) => props.align};
  margin-bottom: 10px;
`;
export const PostBtn = styled.button`
  width: 30%;
  margin-left: 10px;
  height: 40px;
  background-color: black;
  color: white;
`;

export const Photo = styled.div`
  width: 500px;

  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-top: 30px;
`;

export const Select = styled.section`
  width: 90%;
`;
export const RatioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubmitBtn = styled.button`
  width: 150px;
  height: 70px;
  background-color: #111;
  color: #fff;
  font-weight: 700;
  border: none;
  margin-top: 100px;
  margin-bottom: 100px;
`;
