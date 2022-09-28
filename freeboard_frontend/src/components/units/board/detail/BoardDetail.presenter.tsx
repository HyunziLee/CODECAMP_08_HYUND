import * as s from "../../../../../styles/postDetail.styles";

import { IBoardDetailUIProps } from "./IBoardDetail.types";
import { Link, LocationOn, ThumbDown, ThumbUp } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <div>
      <s.Wrapper>
        <s.UserWrapper>
          <s.ProfileWrapper>
            <s.ProfileImg></s.ProfileImg>
            <s.ProfileName>
              <s.Name>{props.data ? props.data?.writer : "로딩중"}</s.Name>
              <s.Date>{props.data ? props.data?.createdAt : "로딩중"}</s.Date>
            </s.ProfileName>
          </s.ProfileWrapper>
          <s.ProfileIcon>
            <s.ProfileIcon__Icon>
              <Link />
            </s.ProfileIcon__Icon>
            <s.ProfileIcon__Icon>
              <LocationOn />
            </s.ProfileIcon__Icon>
          </s.ProfileIcon>
        </s.UserWrapper>
        <s.Title>{props.data?.title}</s.Title>

        <s.Contents>{props.data?.contents}</s.Contents>
        <s.ImageWrapper>
          {props.data?.images?.map(
            (el) =>
              el && (
                <s.ImageArea
                  key={uuidv4()}
                  src={`https://storage.googleapis.com/${el}`}
                />
              )
          )}
        </s.ImageWrapper>

        <s.Youtube
          url={props.data?.youtubeUrl || ""}
          width="486px"
          height="240px"
        ></s.Youtube>

        <s.LikeDislikeIcon>
          <s.LikeDislikeIcon_icon>
            <ThumbUp onClick={props.likeBtn} />
            <div>{props.data?.likeCount}</div>
          </s.LikeDislikeIcon_icon>

          <s.LikeDislikeIcon_icon>
            <ThumbDown onClick={props.dislikeBtn} />
            <div>{props.data?.dislikeCount}</div>
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
