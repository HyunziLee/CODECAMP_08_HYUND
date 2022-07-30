import InfiniteScroll from "react-infinite-scroller";
import { UserOutlined, CloseOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import React, { useState } from "react";

import * as s from "./CommentList.styles";
import ModalContainer from "../../../../commons/Modal/modal.container";
import { getDate } from "../../../../commons/Function/getDate";
import PopoverPage from "../edit/popOver";

export default function CommentScroll(props) {
  const [isEditClicked, setIsEditClicked] = useState(false);

  const [isModal, setIsModal] = useState(true);
  const [isNull, seIsNull] = useState(true);
  const [password, setPassword] = useState("");
  const commentModal = "비밀번호가 일치하지 않습니다. ";

  const creatDate = getDate(props.e.updatedAt);

  const isEditBtn = () => {
    setIsEditClicked(!isEditClicked);
    setIsModal(false);
  };
  console.log(isEditClicked);

  return (
    <>
      {isEditClicked === false && (
        <s.Wrapper_list>
          <s.User_wrapper>
            <s.ProfileImg>
              <Avatar size={44} icon={<UserOutlined />} />
            </s.ProfileImg>
            <s.CommentFetch>
              <s.FetchData>
                <s.FetchName>{props.e.writer}</s.FetchName>
                <s.FetchRate value={props.e.rating} disabled></s.FetchRate>
              </s.FetchData>
              <s.FetchComment>{props.e.contents}</s.FetchComment>
              <s.FetchCreateAt>{creatDate}</s.FetchCreateAt>
            </s.CommentFetch>
          </s.User_wrapper>
          <s.DeleteBtn>
            <PopoverPage
              setPassword={setPassword}
              password={password}
              data={props.e}
              commentInputFunc={props.commentInputFunc}
              contents={props.contents}
              isEditBtn={isEditBtn}
            ></PopoverPage>
            {/* <s.EditBtn onClick={isEditBtn}>수정하기</s.EditBtn> */}
            {/* <s.CommentDelete>x</s.CommentDelete> */}
          </s.DeleteBtn>
        </s.Wrapper_list>
      )}

      {isEditClicked === true && (
        <s.Wrapper_list>
          <s.EditDiv>
            <ModalContainer
              isNull={isNull}
              isModal={isModal}
              commentModal={commentModal}
              isEditClicked={isEditClicked}
              setIsEditClicked={setIsEditClicked}
            ></ModalContainer>
          </s.EditDiv>
        </s.Wrapper_list>
      )}
    </>
  );
}

//eventcurrentTarget: 이벤트핸들링이 실행되는 타겟(이벤트 버블링에 의해서 자식 이벤트 핸들링이 부모까지 올라가는데),
// 이 때 부모가 실행되니칸 eventcurrentTarget으로 부모를 확일할 수 있음
