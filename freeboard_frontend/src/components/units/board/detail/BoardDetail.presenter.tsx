import * as s from "../../../../../styles/postDetail";

import {
  faLocationDot,
  faLink,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IBoardDetailUIProps } from "./IBoardDetail.types";


export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <div>
      <s.Wrapper>
        <s.UserWrapper>
          <s.ProfileWrapper>
            <s.ProfileImg></s.ProfileImg>
            <s.ProfileName>
              <s.Name>
                {props.data ? props.data.fetchBoard.writer : "로딩중"}
              </s.Name>
              <s.Date>
                {props.data ? props.data.fetchBoard.createdAt : "로딩중"}
              </s.Date>
              s{console.log(props.data)}
            </s.ProfileName>
          </s.ProfileWrapper>
          <s.ProfileIcon>
            <s.ProfileIcon__Icon>
              <FontAwesomeIcon icon={faLink} />
            </s.ProfileIcon__Icon>
            <s.ProfileIcon__Icon>
              <FontAwesomeIcon icon={faLocationDot} />
            </s.ProfileIcon__Icon>
          </s.ProfileIcon>
        </s.UserWrapper>
        <s.Title>{props.data?.fetchBoard.title}</s.Title>
        <s.ImageArea>{props.data?.fetchBoard.images}</s.ImageArea>
        <s.Contents>{props.data?.fetchBoard.contents}</s.Contents>
        <s.Youtube
          url={props.data?.fetchBoard.youtubeUrl}
          width="486px"
          height="240px"
        ></s.Youtube>

        <s.LikeDislikeIcon>
          <s.LikeDislikeIcon_icon>
            <FontAwesomeIcon icon={faThumbsUp} onClick={props.likeBtn} />
            <div>{props.data?.fetchBoard.likeCount}</div>
          </s.LikeDislikeIcon_icon>

          <s.LikeDislikeIcon_icon>
            <FontAwesomeIcon icon={faThumbsDown} onClick={props.dislikeBtn} />
            <div>{props.data?.fetchBoard.dislikeCount}</div>
          </s.LikeDislikeIcon_icon>
        </s.LikeDislikeIcon>
      </s.Wrapper>
      <s.FooterBtnWrapper>
        <s.FooterBtnWrapper__btn onClick={props.MoveToListPageBtn}>
          목록으로
        </s.FooterBtnWrapper__btn>
        <s.FooterBtnWrapper__btn onClick={props.MoveToEditPageBtn}>
          수정하기
        </s.FooterBtnWrapper__btn>
        <s.FooterBtnWrapper__btn onClick={props.DeleteBoardBtn}>
          삭제하기
        </s.FooterBtnWrapper__btn>
      </s.FooterBtnWrapper>
    </div>
  );
}
