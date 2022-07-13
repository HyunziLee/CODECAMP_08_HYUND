// 전체 import 할때 
// import * as 작명 from '경로' => 사용할 때는 작명.xxx <- import한 파일에서의 변수명

import { RedInput, Button } from './BoardWrite.styles';
export default function BoardWriteUI(props){
  
  
  return(
    <>
      작성자: <RedInput type="text" onChange={props.onChangeFunction.writer} /><br />
      제목: <input type="text" onChange={props.onChangeFunction.title}/><br />
      내용: <input type="text" onChange={props.onChangeFunction.contents}/><br />
      <Button 
        qqq={props.mycolor} 
        onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
      >
        {props.isEdit? "수정하기" : "등록하기"}
      </Button>
    </>
  )
}