import CommentContainer from "../../../src/components/units/board/comment/Comment.container"
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container"
export default function PostDetailPage(){

  



  return(
    <>
      
      <BoardDetail 
        adminState={false}
      ></BoardDetail>
      <CommentContainer></CommentContainer>
    
    </>
  )
}