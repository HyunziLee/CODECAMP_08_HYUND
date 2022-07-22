import InfiniteScroll from "react-infinite-scroller";
import { UserOutlined, CloseOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import React, { useState } from "react";

import * as s from "../Comment.styles";

export default function CommentScroll(props) {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [password, setPassword] = useState("");

  const isEditBtn = () => {
    setIsEditClicked(!isEditClicked);
  };
  console.log(isEditClicked);

  const passwordInput = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  return (
    <InfiniteScroll>
      {isEditClicked === false && (
        <div>
          <s.Wrapper_list key={props.e_id}>
            <s.ProfileImg>
              <Avatar size={44} icon={<UserOutlined />} />
            </s.ProfileImg>
            <s.CommentFetch>
              <s.FetchData>
                <s.FetchName>{props.e.writer}</s.FetchName>
                <s.FetchRate value={props.e.rating} disabled></s.FetchRate>
              </s.FetchData>
              <s.FetchComment>{props.e.contents}</s.FetchComment>
              <s.FetchCreateAt>{props.e.createdAt}</s.FetchCreateAt>
            </s.CommentFetch>
            <s.DeleteBtn>
              <CloseOutlined />
              <button onClick={isEditBtn}>수정하기</button>
            </s.DeleteBtn>
          </s.Wrapper_list>
        </div>
      )}
      {isEditClicked === true && (
        <>
          <input onChange={passwordInput} />
        </>
      )}
    </InfiniteScroll>
  );
}

//eventcurrentTarget: 이벤트핸들링이 실행되는 타겟(이벤트 버블링에 의해서 자식 이벤트 핸들링이 부모까지 올라가는데),
// 이 때 부모가 실행되니칸 eventcurrentTarget으로 부모를 확일할 수 있음
