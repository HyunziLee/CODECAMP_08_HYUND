import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const UserWrapper = styled.div`
  width: 90%;
  height: 100px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const ProfileWrapper = styled.div`
  width: 300px;
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
`;
export const ProfileName = styled.div`
  margin-left: 10px;
`;
export const Name = styled.div`
  font-weight: 700;
  font-size: 22px;
`;

export const Date = styled.div`
  color: #bdbdbd;
  font-size: 15px;
`;
export const ProfileIcon = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ProfileIcon__Icon = styled.div`
  width: 30px;

  margin-left: 20px;
  text-align: center;

  & :first-of-type {
    color: #ffd600;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  width: 90%;
  margin: 40px 0px;

  font-size: 25px;
  font-weight: 700;
`;

export const ImageArea = styled.div`
  width: 90%;
  height: 500px;
  background: #f2f2f2;
  margin-bottom: 40px;
`;
export const Contents = styled.div`
  width: 90%;
  height: 500px;
  background: skyblue;
  margin-bottom: 100px;
`;
// export const Youtube = styled.div`
//   width: 55%;
//   height: 250px;
//   background: orange;
//   margin-bottom: 100px;
// `;
export const LikeDislikeIcon = styled.div`
  width: 40%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
`;
export const LikeDislikeIcon_icon = styled.div`
  width: 80px;

  margin-left: 15px;
  text-align: center;

  &:first-of-type {
    color: #ffd600;
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
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0px;
`;
export const FooterBtnWrapper__btn = styled.button`
  background-color: #fff;
  margin-left: 20px;
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
`;

export const Youtube = styled(ReactPlayer)`
  margin-bottom: 100px;
`;
