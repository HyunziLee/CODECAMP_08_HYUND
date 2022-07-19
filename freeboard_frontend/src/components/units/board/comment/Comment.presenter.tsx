import { UserOutlined,CloseOutlined } from '@ant-design/icons';
import { Rate, Avatar } from 'antd';

import React, { useState } from 'react';

import * as s from './Comment.styles'
export default function CommentUI(props){
  const [starValue, setStarValue] = useState(0.0)
  
  return(
    <>
      <s.Wrapper>
        <s.Wrapper_write>
          
          <div>댓글</div>
            <Rate onChange={setStarValue} />
            
          <s.Write_userInfo>
            <s.UserInfo__writer onChange={props.commentInputFunc.writer}></s.UserInfo__writer>
            <s.UserInfo__password onChange={props.commentInputFunc.password}></s.UserInfo__password>
          </s.Write_userInfo>
          <s.Comment__wrapper>
            <s.Comment__write 
              placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다. '
              onChange={props.commentInputFunc.contents}
              >
            </s.Comment__write>
            <s.Comment__info>
              <s.Comment__info_length></s.Comment__info_length>
              <s.Comment__info_btn onClick={props.onClickCommentBtn}>등록하기</s.Comment__info_btn>
            </s.Comment__info>
          </s.Comment__wrapper>
        </s.Wrapper_write>
        
        
          {
            props.data?.fetchBoardComments.map((e,i)=>{
              
              return(
                <>
                  <s.Wrapper_list key={e._id}>
                    <s.ProfileImg>
                      <Avatar size={44} icon={<UserOutlined />} />
                    </s.ProfileImg>
                    <s.CommentFetch>
                      <s.FetchData>
                        <s.FetchName>{e.writer}</s.FetchName>
                        <s.FetchRate>
                          <Rate value={e.rating}/>
                        </s.FetchRate> 
                      </s.FetchData>
                      <s.FetchComment>{e.contents}</s.FetchComment>
                      <s.FetchCreateAt>{e.createdAt}</s.FetchCreateAt>
                    </s.CommentFetch>
                    <s.DeleteBtn>
                      <CloseOutlined />
                    </s.DeleteBtn>
                  </s.Wrapper_list>
                </>
              )
            })
          }

       
      </s.Wrapper>
    
    
    </>
  )
}

//eventcurrentTarget: 이벤트핸들링이 실행되는 타겟(이벤트 버블링에 의해서 자식 이벤트 핸들링이 부모까지 올라가는데), 
// 이 때 부모가 실행되니칸 eventcurrentTarget으로 부모를 확일할 수 있음 