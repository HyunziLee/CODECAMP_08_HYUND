import * as s from "./BoardDetail.styles";

import { IBoardDetailUIProps } from "./IBoardDetail.types";
import { LocationOn, ThumbDown, ThumbUp } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../commons/Function/getDate";
import { Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <s.Wrapper>
      <s.Main>
        <s.UserWrapper>
          <s.ProfileWrapper>
            <s.ProfileImg></s.ProfileImg>
            <s.ProfileName>
              <s.Name>{props.data ? props.data?.writer : "로딩중"}</s.Name>
              <s.Date>
                {props.data ? getDate(props.data?.createdAt) : "로딩중"}
              </s.Date>
            </s.ProfileName>
          </s.ProfileWrapper>
          <s.IconWrapper>
            <s.Icon>
              <Tooltip
                placement="bottomRight"
                title={props.data?.boardAddress?.address}
              >
                <LocationOn />
              </Tooltip>
            </s.Icon>
          </s.IconWrapper>
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
        {props.data?.youtubeUrl && (
          <s.Youtube
            url={props.data?.youtubeUrl || ""}
            width="100%"
            height="240px"
          ></s.Youtube>
        )}

        <s.LikeDislikeIconWrapper>
          <s.LikeDislikeIcon>
            <ThumbUp onClick={props.likeBtn} />
            <div>{props.data?.likeCount}</div>
          </s.LikeDislikeIcon>

          <s.LikeDislikeIcon>
            <ThumbDown onClick={props.dislikeBtn} />
            <div>{props.data?.dislikeCount}</div>
          </s.LikeDislikeIcon>
        </s.LikeDislikeIconWrapper>
      </s.Main>
      <s.FooterBtnWrapper>
        <s.FooterBtn onClick={props.MoveToListPageBtn}>목록으로</s.FooterBtn>
        <s.FooterBtn onClick={props.MoveToEditPageBtn}>수정하기</s.FooterBtn>
        <s.FooterBtn onClick={props.DeleteBoardBtn}>삭제하기</s.FooterBtn>
      </s.FooterBtnWrapper>
    </s.Wrapper>
  );
}
