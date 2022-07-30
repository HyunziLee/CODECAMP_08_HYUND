import * as s from '../../../commons/styles/main.styles'
import { Avatar } from 'antd';

export default function DetailPresenter(props){
  return(
    <>
      <s.Detail_wrapper>
        <s.Detail_menu>{props.data?.fetchBoard.title}</s.Detail_menu>
        <s.Detail_Line></s.Detail_Line>
        {
          !props.data?.fetchBoard.images[0] && !props.data?.fetchBoard.images[1] && !props.data?.fetchBoard.images[2]
          ?(<></>)
          :(<s.Detail_Image>
              <s.Detail_Image_img src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`}/>
              <s.Detail_Image_img />
              <s.Detail_Image_img />
            </s.Detail_Image>)
          
        }
        
        <s.Detail_contents>
          <Avatar size="small" icon={<s.Detail_Avatar />} />
          <s.Detail_contents_writer_writer>{props.data?.fetchBoard.writer}</s.Detail_contents_writer_writer>
          <s.Detail_contents_contents>{props.data?.fetchBoard.contents}</s.Detail_contents_contents>

        </s.Detail_contents>

      </s.Detail_wrapper>
      <s.Button_wrapper check>
        <s.Button_submit onClick={props.onClickGotoList}>글목록</s.Button_submit>
        <s.Button_cancel onClick={props.onClickEdit} >수정</s.Button_cancel>
        <s.Button_cancel onClick={props.onClickDelete}>삭제</s.Button_cancel>
      </s.Button_wrapper>
    
    </>
  )
}