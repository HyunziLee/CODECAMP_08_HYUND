import {UserInput, ApiBtn} from './BoardWrite2.styles'

export default function BoardWrite2UI(props){
  return(
    <>
    작성자: <UserInput type="text" onChange={props.onChangeFunction.writer} /><br />
    제목: <UserInput type="text" onChange={props.onChangeFunction.title}/><br />
    내용: <UserInput type="text" onChange={props.onChangeFunction.contents}/><br />
    <ApiBtn disabled={props.btnState} onClick={props.onClickGraphqlApi}>그래프큐엘 api 요청하기</ApiBtn>
  </>
  )
}