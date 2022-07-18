import {useRouter} from 'next/router';
import { FETCH_BOARD } from '../../../src/components/units/board/queries';
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container"
export default function ListDetailPage(){

  const router = useRouter();

  const{data} = useQuery(FETCH_BOARD, {
    variables:{
      // router.query.변수명=> 하위 폴더 [변수명]
      boardId: router.query.listdetail
    }
  })




  return(
    //해당글 작성자 이면 수정하기 버튼 활성화 , 걍 방문자 이면 리스트 눌렀을 때, 댓글 화면 
    <>
      
      <BoardDetail 
        // adminState={true} //여기는 true, false에 따라 안바뀜
        data={data}
      
      ></BoardDetail>
    
    </>
  )
}