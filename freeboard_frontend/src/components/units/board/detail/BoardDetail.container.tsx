import {useRouter} from 'next/router';
import { useState } from "react";
import {useQuery} from '@apollo/client';
import BoardDetailUI from './BoardDetail.presenter';
import {FETCH_BOARD} from '../queries'


export default function BoardDetail(props){
  
  
  const router = useRouter();

  const{data} = useQuery(FETCH_BOARD, {
    variables:{
      // router.query.변수명=> 하위 폴더 [변수명]
      boardId: router.query.name
    }
  })
  

  const MoveToListPageBtn=()=>{

    router.push(`/PostList/p/`) // 나중에 페이저번호 번수로 저장해서 바꿔야함 /p/아님
  }

  const MoveToEditPageBtn=()=>{
    

    router.push(`/PostDetail/Edit/${router.query.name}`) // 나중에 페이저번호 번수로 저장해서 바꿔야함 /p/아님
    
  }
  
  
  return(
    <BoardDetailUI 
      router={router}
      data = {data}
      MoveToListPageBtn={MoveToListPageBtn}
      MoveToEditPageBtn={MoveToEditPageBtn}
      adminState={props.adminState}
      />
  )
}