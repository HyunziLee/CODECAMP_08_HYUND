import { AliwangwangOutlined} from "@ant-design/icons"
import styled from '@emotion/styled'

const MyIcon = styled(AliwangwangOutlined)`
  font-size: 50px;
  color: green;

`

export default function LibraryIconPage(){
  return(
    <MyIcon id="1111"/>// id입력해서 event target하는 거 안됨 => 부모요소에 아이디 부탁되기때문
  )
}