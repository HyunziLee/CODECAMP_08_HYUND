import styled from "@emotion/styled";
import { Container } from "@mui/system";
import { Rate } from "antd";

export const Wrapper = styled(Container)``;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 111px;
  margin: auto;
  margin-top: 30px;
  border-bottom: 1px solid #bdbdbd;
  justify-content: space-between;
`;
export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  font-size: 0.9rem;
  @media (max-width: 767px) {
    font-size: 0.6rem;
  }
`;
export const FetchRate = styled(Rate)``;
export const FetchComment = styled.div`
  font-size: 0.9rem;
  color: #4f4f4f;
  @media (max-width: 767px) {
    font-size: 0.6rem;
  }
`;
export const FetchCreateAt = styled.div`
  font-size: 0.7rem;
  color: #bdbdbd;
  @media (max-width: 767px) {
    font-size: 0.5rem;
  }
`;
export const DeleteBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;
export const CommentDelete = styled.span`
  font-size: 1rem;
  margin-left: 20px;
  cursor: pointer;
`;
export const EditBtn = styled.span`
  font-size: 0.9rem;

  cursor: pointer;
`;
export const EditDiv = styled.div`
  height: 70px;
  background-color: yellow;
`;
export const WrapperScroll = styled.div`
  height: 500px;
  overflow: auto;
`;
