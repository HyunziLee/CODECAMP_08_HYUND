import { useQuery, gql } from '@apollo/client'
import styled from "@emotion/styled"
import { useMutation } from '@apollo/client';

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number: $number){
      message
    }
  }

`


const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 20%;
`

export default function StaticRoutedPage(){
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const { data } = useQuery(FETCH_BOARDS)

    const onClickDelete = (e)=>{
      deleteBoard({
        variables:{
          number: parseInt(e.target.id)
        },
        //삭제 후, 리패치해줘(=다시 조회해죠)
        refetchQueries:[{query: FETCH_BOARDS}] 
        // refetchQueries:[{query: FETCH_BOARDS, variables:{page:인자}}]  =>fetch랑 리패치할 페이지가 다를 때는 variables에 인자 추가해야함
      })
    }

    return (
        <>
        
            {data?.fetchBoards.map(el => (
              //<></> => key 값 안됨 / <Fragment key={xx}></Fragment>는 가능
                //key를 주면 row 요소가 각각 다 다른거임.
                <Row key={el.number}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.contents}</Column>
                    <Column>
                      <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>
            ))}
        </>
    )
}