import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import React, { useState } from "react";

import * as s from "./CommentList.styles";

import { getDate } from "../../../../commons/Function/getDate";
import PopoverPage from "../edit/popOver";
import { ICommentScrollProps } from "../IBoardComment.types";

export default function CommentScroll(props: ICommentScrollProps) {
  const [password, setPassword] = useState("");

  const createDate = getDate(props.el.updatedAt);

  return (
    <s.Wrapper>
      <s.Main>
        <s.UserWrapper>
          <s.ProfileImg>
            <Avatar size={44} icon={<UserOutlined />} />
          </s.ProfileImg>
          <s.CommentFetch>
            <s.FetchData>
              <s.FetchName>{props.el.writer}</s.FetchName>
              <s.FetchRate value={props.el.rating} disabled></s.FetchRate>
            </s.FetchData>
            <s.FetchComment>{props.el.contents}</s.FetchComment>
            <s.FetchCreateAt>{createDate}</s.FetchCreateAt>
          </s.CommentFetch>
        </s.UserWrapper>
        <s.DeleteBtn>
          <PopoverPage
            setPassword={setPassword}
            password={password}
            data={props.el}
            commentInputFunc={props.commentInputFunc}
            contents={props.contents}
          ></PopoverPage>
        </s.DeleteBtn>
      </s.Main>
    </s.Wrapper>
  );
}

// eventcurrentTarget: 이벤트핸들링이 실행되는 타겟(이벤트 버블링에 의해서 자식 이벤트 핸들링이 부모까지 올라가는데),
// 이 때 부모가 실행되니칸 eventcurrentTarget으로 부모를 확일할 수 있음
