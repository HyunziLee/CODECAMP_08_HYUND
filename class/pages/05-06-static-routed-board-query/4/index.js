import {useQuery, gql} from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage(){

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      number: 4,
    }
  })

  console.log(data) 

  return(
    <div>
      <div>4번 게시글 이동이 완료되었습니다.</div>
      <div>작성자: {data ? data.fetchBoard.writer : "로딩중"}</div>
      <div>제목: {data && data.fetchBoard.title }</div>
      <div>내용: {data?.fetchBoard.contents }</div> 
      {/* 위에 방식을 옵셔널 체이닝이라함 data && data == data? 같은거임 */}
    </div>
  )
}