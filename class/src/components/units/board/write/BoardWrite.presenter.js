// 전체 import 할때 
// import * as 작명 from '경로' => 사용할 때는 작명.xxx <- import한 파일에서의 변수명

import { RedInput } from './BoardWrite.styles';
export default function BoardWriteUI(props){
  
  
  return(
    <>
      작성자: <RedInput type="text" onChange={props.onChangeFunction.writer} /><br />
      제목: <input type="text" onChange={props.onChangeFunction.title}/><br />
      내용: <input type="text" onChange={props.onChangeFunction.contents}/><br />
      <button onClick={props.onClickGraphqlApi}>그래프큐엘 api 요청하기</button>
    </>
  )
}