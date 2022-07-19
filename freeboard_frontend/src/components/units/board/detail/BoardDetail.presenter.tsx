import {
  Wrapper,
  UserWrapper,
  ProfileWrapper,
  ProfileImg,
  ProfileName,
  ProfileDate,
  Name,
  Date,
  ProfileIcon,
  ProfileIcon__Icon,
  Title,
  ImageArea,
  Contents,
  Youtube,
  LikeDislikeIcon,
  LikeDislikeIcon_icon,
  FooterBtnWrapper,
  FooterBtnWrapper__btn,
} from "../../../../../styles/postDetail";

import {
  faLocationDot,
  faLink,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BoardDetailUI(props) {
  return (
    <div>
      <Wrapper>
        <UserWrapper>
          <ProfileWrapper>
            <ProfileImg></ProfileImg>
            <ProfileName>
              <Name>
                {props.data ? props.data.fetchBoard.writer : "로딩중"}
              </Name>
              <Date>
                {props.data ? props.data.fetchBoard.createdAt : "로딩중"}
              </Date>
              {console.log(props.data)}
            </ProfileName>
          </ProfileWrapper>
          <ProfileIcon>
            <ProfileIcon__Icon>
              <FontAwesomeIcon icon={faLink} />
            </ProfileIcon__Icon>
            <ProfileIcon__Icon>
              <FontAwesomeIcon icon={faLocationDot} />
            </ProfileIcon__Icon>
          </ProfileIcon>
        </UserWrapper>
        <Title>{props.data?.fetchBoard.title}</Title>
        <ImageArea>{props.data?.fetchBoard.images}</ImageArea>
        <Contents>{props.data?.fetchBoard.contents}</Contents>
        <Youtube
          url={props.data?.fetchBoard.youtubeUrl}
          width="486px"
          height="240px"
        ></Youtube>
        {/* <Youtube>{props.data?.fetchBoard.youtyubeUrl}</Youtube> */}
        <LikeDislikeIcon>
          <LikeDislikeIcon_icon>
            <FontAwesomeIcon icon={faThumbsUp} />
            <div>{props.data?.fetchBoard.likeCount}</div>
          </LikeDislikeIcon_icon>

          <LikeDislikeIcon_icon>
            <FontAwesomeIcon icon={faThumbsDown} />
            <div>{props.data?.fetchBoard.dislikeCount}</div>
          </LikeDislikeIcon_icon>
        </LikeDislikeIcon>
      </Wrapper>
      {props.adminState ? (
        <div>ssdfs</div>
      ) : (
        <FooterBtnWrapper>
          <FooterBtnWrapper__btn onClick={props.MoveToListPageBtn}>
            목록으로
          </FooterBtnWrapper__btn>
          <FooterBtnWrapper__btn onClick={props.MoveToEditPageBtn}>
            수정하기
          </FooterBtnWrapper__btn>
          <FooterBtnWrapper__btn>삭제하기</FooterBtnWrapper__btn>
        </FooterBtnWrapper>
      )}
    </div>
  );
}
