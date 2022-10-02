import styled from "@emotion/styled";
import { Rate } from "antd";
import { Container } from "@mui/material";

export const Wrapper = styled(Container)``;
export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;
export const Writer = styled.input`
  width: 150px;
  height: 40px;
  border: 1px solid #bdbdbd;
  margin-right: 20px;
`;
export const Password = styled.input`
  width: 150px;
  height: 40px;
  border: 1px solid #bdbdbd;
`;
export const CommentWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 70%;
  border: none;
  &::placeholder {
    color: #bdbdbd;
    font-size: 1rem;
    @media (max-width: 767px) {
      font-size: 0.7rem;
    }
  }
`;
export const WordInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 30%;
  align-content: center;
`;
export const WordLength = styled.div`
  width: 90%;
  color: #bdbdbd;
  border-top: 1px solid #f2f2f2;
`;
export const SubmitBtn = styled.div`
  width: 20%;
  border: none;
  background-color: #111;
  color: #fff;
  text-align: center;
  cursor: pointer;
  line-height: 45px;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const ProfileImg = styled.div`
  margin-right: 10px;
`;
export const CommentFetch = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FetchData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const FetchName = styled.div`
  margin-right: 10px;
  font-weight: 500;
  font-size: 16px;
`;
export const FetchRate = styled(Rate)``;
export const FetchComment = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;
export const FetchCreateAt = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;
export const DeleteBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;
export const CommentDelete = styled.span`
  font-size: 16px;
  cursor: pointer;
`;
export const EditBtn = styled.span`
  font-size: 14px;
  margin-left: 20px;
  cursor: pointer;
`;
export const EditDiv = styled.div`
  height: 70px;
  background-color: yellow;
`;
