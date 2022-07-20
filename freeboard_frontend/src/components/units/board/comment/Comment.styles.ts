import styled from "@emotion/styled";
import { Rate, Avatar } from "antd";

export const Wrapper = styled.div`
  margin: auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Wrapper_write = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Write_userInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;
export const UserInfo__writer = styled.input`
  width: 150px;
  height: 40px;
  border: 1px solid #bdbdbd;
  margin-right: 20px;
`;
export const UserInfo__password = styled.input`
  width: 150px;
  height: 40px;
  border: 1px solid #bdbdbd;
`;
export const Comment__wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
`;
export const Comment__write = styled.textarea`
  width: 100%;
  height: 70%;
  border: none;
  &::placeholder {
    color: #bdbdbd;
    font-size: 16px;
  }
`;
export const Comment__info = styled.div`
  display: flex;
  flex-direction: row;
  height: 30%;
  align-content: center;
`;
export const Comment__info_length = styled.div`
  width: 90%;
  border-top: 1px solid #f2f2f2;
`;
export const Comment__info_btn = styled.div`
  width: 10%;
  border: none;
  background-color: #111;
  color: #fff;
  text-align: center;
  cursor: pointer;
  line-height: 45px;
`;

export const Wrapper_list = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 111px;
  margin-top: 30px;
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
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
  font-size: 16px;
  color: #bdbdbd;
  justify-items: flex-end;
  margin-left: 900px;
  margin-top: -25px;
  cursor: pointer;
`;
