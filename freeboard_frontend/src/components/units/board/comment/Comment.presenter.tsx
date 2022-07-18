import * as s from './Comment.styles'
export default function CommentUI(){
  return(
    <>
      <s.Wrapper>
        <s.Wrapper_write>
          <s.write>
            <span>댓글</span>
            <s.write_writer></s.write_writer>
            <s.write_password></s.write_password>
          </s.write>
          

        </s.Wrapper_write>



        <s.Wrapper_list></s.Wrapper_list>




      </s.Wrapper>
    
    
    </>
  )
}

//eventcurrentTarget: 이벤트핸들링이 실행되는 타겟(이벤트 버블링에 의해서 자식 이벤트 핸들링이 부모까지 올라가는데), 
// 이 때 부모가 실행되니칸 eventcurrentTarget으로 부모를 확일할 수 있음 