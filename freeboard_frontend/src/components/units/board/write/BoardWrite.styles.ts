import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const Wrapper = styled(Container)``;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
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
`;
export const WriterContentsInput2 = styled.input`
  width: 100%;
  height: 400px;
`;
export const WrapperPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;
export const PostInput1 = styled.input`
  width: 20%;
  height: 40px;
  margin-right: 20px;
  text-align: center;
`;
export const PostBtn = styled.button`
  width: 10%;
  height: 40px;
  background-color: black;
  color: white;
`;
export const PostInput2 = styled.input`
  width: 32%;
  height: 40px;
  margin: 10px 0px;
`;
export const Photo = styled.div`
  width: 500px;

  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-top: 30px;
`;

export const Select = styled.div`
  width: 90%;
`;

export const SubmitBtn = styled.button`
  width: 150px;
  height: 40px;
  background-color: #bbd0ff;
  border: none;
  margin-top: 100px;

  margin-bottom: 100px;
`;
