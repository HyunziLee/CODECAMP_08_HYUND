import {useQuery} from '@apollo/client'
import { useRouter } from 'next/router';
import BoardWrite3UI from './BoardWrite3.presenter';
import { FETCH_BOARD } from './BoardWrite3.queries';

export default function BoardWrite3(){
  
  const router = useRouter();

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    }
  })

  console.log(data)
  
  return (
    <BoardWrite3UI  
      data ={data}
      router = {router}
      />
  )
}