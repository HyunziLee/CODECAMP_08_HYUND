import * as s from '../../../commons/styles/main.styles'

import { PlusCircleOutlined } from '@ant-design/icons'


export default function WriterPresenter(props){
 

  

  return(
    <>
    <s.Write_wrapper>
    {
        props.isEdit === false ? ( <s.Write_menu>새 글 작성</s.Write_menu>) : (<s.Write_menu>게시글 수정</s.Write_menu>)
    }
     
      <s.Write_line></s.Write_line>
      <s.Write_container>
        <s.Write_container_title>
          <s.Div>제목</s.Div>
          {
              props.isEdit === false 
              ?(  <s.Title_input onChange={props.InputFunction.title}></s.Title_input>)
              :(  <s.Title_input onChange={props.InputFunction.title} defaultValue={props.data?.fetchBoard.title}></s.Title_input>)
            }
          {/* <s.Title_input onChange={props.InputFunction.title}></s.Title_input> */}
        </s.Write_container_title>
        <s.Write_container_contents>
          <s.Div>내용</s.Div>
          
            {
              props.isEdit === false 
              ?(  <s.Contents_input onChange={props.InputFunction.contents}></s.Contents_input>)
              :(  <s.Contents_input onChange={props.InputFunction.contents} defaultValue={props.data?.fetchBoard.contents}></s.Contents_input>)
            }
          
          {/* <s.Contents_input onChange={props.InputFunction.contents}></s.Contents_input> */}
        </s.Write_container_contents>

        <s.Write_container_uploadImg>
          <s.Div>이미지</s.Div>

          <input
            type="file"
            style={{ display: "none" }}
            onChange={props.onChangeInputImg}
            accept="image/jpeg"
            ref={props.ImgRef}
          />

          <s.UploadImg>
            <PlusCircleOutlined onClick={props.onClickImg} />
          </s.UploadImg>
          <s.UploadImg>
            <PlusCircleOutlined />
          </s.UploadImg>
          <s.UploadImg>
            <PlusCircleOutlined />
          </s.UploadImg>
        </s.Write_container_uploadImg>

        <s.Write_container_userInfo>
          <s.UserInfo_writer>
            <s.Div>작성자</s.Div>
            {
              
              props.isEdit === false 
              ?( <s.UserInfo_input onChange={props.InputFunction.writer}></s.UserInfo_input>)
              :( <s.UserInfo_input onChange={props.InputFunction.writer} value={props.data?.fetchBoard.writer} disabled></s.UserInfo_input>)
            }
            {/* <s.UserInfo_input onChange={props.InputFunction.writer}></s.UserInfo_input> */}
          </s.UserInfo_writer>
          <s.UserInfo_password>
            <s.Div>비밀번호</s.Div>
            <s.UserInfo_input onChange={props.InputFunction.password}></s.UserInfo_input>
          </s.UserInfo_password>
        </s.Write_container_userInfo>
      </s.Write_container>
    </s.Write_wrapper>
    <s.Button_wrapper>
    {
        props.isEdit === false 
        ? (<s.Button_submit onClick={props.onClickSubmit}>등록</s.Button_submit>) 
        : (<s.Button_submit onClick={props.onClickEdit}>수정</s.Button_submit>)
    }
      
      <s.Button_cancel onClick={props.onClickCancel}>취소</s.Button_cancel>
    </s.Button_wrapper>

    </>
  )
}