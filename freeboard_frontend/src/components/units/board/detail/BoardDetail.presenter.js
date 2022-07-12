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
  
} from "../../../../../styles/postDetail";
import {faLocationDot, faLink, faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BoardDetailUI(props){
  return(
    <div>
      <Wrapper>
        <UserWrapper>
          <ProfileWrapper>
            <ProfileImg></ProfileImg>
            <ProfileName>
              <Name>{props.data? props.data.fetchBoard.writer : "로딩중"}</Name>
              <Date>{props.data? props.data.fetchBoard.createdAt : "로딩중"}</Date>
            </ProfileName>
          </ProfileWrapper>
          <ProfileIcon>
            <ProfileIcon__Icon>
              <FontAwesomeIcon icon={faLink}/>
            </ProfileIcon__Icon>
            <ProfileIcon__Icon>
              <FontAwesomeIcon icon={faLocationDot}/>
            </ProfileIcon__Icon>
          </ProfileIcon>
        </UserWrapper>
        <Title>{props.data?.fetchBoard.title}</Title>
        <ImageArea>{props.data?.fetchBoard.images}</ImageArea>
        <Contents>{props.data?.fetchBoard.contents}</Contents>
        <Youtube>{props.data?.fetchBoard.youtubeUrl}</Youtube>
        <LikeDislikeIcon>
          <LikeDislikeIcon_icon>
            <FontAwesomeIcon icon={faThumbsUp}/>
            <div>{props.data?.fetchBoard.likeCount}</div>
          </LikeDislikeIcon_icon>

          <LikeDislikeIcon_icon>
            <FontAwesomeIcon icon={faThumbsDown}/>
            <div>{props.data?.fetchBoard.dislikeCount}</div>
          </LikeDislikeIcon_icon>
        </LikeDislikeIcon>
    </Wrapper>
  </div>
  )
}