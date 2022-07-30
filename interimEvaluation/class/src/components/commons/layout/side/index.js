import * as s from '../layout.styles'
import {EditOutlined, MessageOutlined, UnorderedListOutlined} from '@ant-design/icons'
import { useRouter } from 'next/router'

export default function LayoutSide(){
  const router = useRouter()

  const onClickHome = ()=>{
    router.push(`/`);
  }
  const onClickWrite = ()=>{
    router.push(`/Write`);
  }

  return(
    <>
      <s.Side_wrapper>
        <s.Side_menu_wrapper>
          <s.Menu_text>
            <s.Talkr/>
            <s.Talkr_text>TALKR</s.Talkr_text>
          </s.Menu_text>
          <s.Line></s.Line>
          <s.Menu_text>
            <s.Total_board />
            <s.Total_board_text onClick={onClickHome}>전체 글 보기</s.Total_board_text>
          </s.Menu_text>
          <s.Menu_text>
            <s.New_write />
            <s.New_write_text onClick={onClickWrite}>새 글 작성</s.New_write_text>
          </s.Menu_text>

        </s.Side_menu_wrapper>
      </s.Side_wrapper>
    </>
  )
}