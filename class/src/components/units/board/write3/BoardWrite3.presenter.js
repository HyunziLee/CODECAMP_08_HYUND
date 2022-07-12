export default function BoardWrite3UI(props){
  return (
    <div>
    <div>{props.router.query.number}번 게시글 이동이 완료되었습니다.</div>
    <div>작성자: {props.data ?.fetchBoard.writer }</div>
    <div>제목: {props.data && props.data.fetchBoard.title }</div>
    <div>내용: {props.data ? props.data.fetchBoard.contents :"로딩중" }</div> 
    {/* 위에 방식을 옵셔널 체이닝이라함 data && data == data? 같은거임 */}
  </div>
  )
}