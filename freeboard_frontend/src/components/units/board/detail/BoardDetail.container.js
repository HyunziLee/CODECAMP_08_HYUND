import {useRouter} from 'next/router';
import { useState } from "react";
import {useQuery} from '@apollo/client';
import BoardDetailUI from '../detail/BoardDetail.presenter';
import {FETCH_BOARD} from '../detail/BoardDetail.queries';


export default function BoardDetail(){
  
  const router = useRouter();

  const{data} = useQuery(FETCH_BOARD, {
    variables:{
      // router.query.변수명=> 하위 폴더 [변수명]
      boardId: router.query.name
    }
  })
  console.log(router.query.name)
  console.log(data)
  
  
  return(
    <BoardDetailUI 
      router={router}
      data = {data}
      />
  )
}