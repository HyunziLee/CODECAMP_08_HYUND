import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container"
import { useQuery, gql } from '@apollo/client';
import {IQuery, IQueryFetchBoardArgs, } from '../../../../src/commons/types/generated/types'
import { useRouter } from "next/router";


const FETCH_BOARD = gql`
  query fetchBoard($number:Int){
    fetchBoard(number:$number){
      number
      writer
      title
      contents
    }
  }

`


export default function GraphqlMutationPage(){

  const router = useRouter()
  const {data} = useQuery<Pick<IQuery,"fetchBoard">,IQueryFetchBoardArgs>(FETCH_BOARD,{
    variables:{number: Number(router.query.number)}
  })

  return <BoardWrite isEdit = {true} data={data}/>
}
