import styled from "@emotion/styled";
import { Container } from "@mui/material";
import ReactPlayer from "react-player";
import { BOX_SHADOW } from "../../../../commons/stylesConst";

export const Wrapper = styled(Container)``;
export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${BOX_SHADOW};
`;

export const UserWrapper = styled.div`
  width: 90%;
  height: 100px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ProfileWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #bdbdbd;
  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;
export const ProfileName = styled.div`
  margin-left: 10px;
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const Date = styled.div`
  color: #bdbdbd;
  font-size: 0.9rem;
  @media (max-width: 767px) {
    font-size: 0.6rem;
  }
`;
export const IconWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Icon = styled.div`
  width: 30px;

  margin-left: 20px;
  text-align: center;

  & :first-of-type {
    color: #bbd0ff;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  width: 90%;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`;
export const ImageArea = styled.img`
  width: 33.3%;

  margin-bottom: 40px;
`;
export const Contents = styled.div`
  width: 90%;
  height: 500px;
  margin-bottom: 50px;

  @media (max-width: 767px) {
    height: 200px;
  }
`;

export const LikeDislikeIconWrapper = styled.div`
  width: 40%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
`;
export const LikeDislikeIcon = styled.div`
  width: 80px;

  margin-left: 15px;
  text-align: center;

  &:first-of-type {
    color: #bbd0ff;
    font-size: 40px;
    cursor: pointer;
  }

  &:last-child {
    color: #828282;
    font-size: 40px;
    cursor: pointer;
  }
  & > div {
    font-size: 15px;
  }
`;
export const FooterBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 40px;
`;
export const FooterBtn = styled.button`
  background-color: #fff;
  width: 20%;
  height: 45px;
  border: 1px solid #bdbdbd;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const Youtube = styled(ReactPlayer)`
  margin-bottom: 100px;
`;
