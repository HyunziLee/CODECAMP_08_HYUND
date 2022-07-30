import styled from "@emotion/styled";
import { Rate, Avatar } from "antd";

export const Wrapper_list = styled.div`
  width: 1200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  height: 111px;
  margin: auto;
  margin-top: 30px;
  border-bottom: 1px solid #bdbdbd;
  justify-content: space-between;
`;
export const User_wrapper = styled.div`
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
  margin-left: 20px;
  cursor: pointer;
`;
export const EditBtn = styled.span`
  font-size: 14px;

  cursor: pointer;
`;
export const EditDiv = styled.div`
  height: 70px;
  background-color: yellow;
`;
export const Wrapper_scroll = styled.div`
  height: 500px;
  overflow: auto;
`;
