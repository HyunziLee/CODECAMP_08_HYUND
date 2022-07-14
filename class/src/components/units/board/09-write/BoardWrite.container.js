import {useMutation} from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import {CREATE_BOARD, UPDATE_BOARD }from './BoardWrite.queries'

import { useRouter } from 'next/router';



export default function BoardWrite(props){

  const router = useRouter();

  const [mycolor, setMycolor] = useState(false)
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onChangeFunction = {
    writer: (e)=>{
      setWriter(e.target.value); 
      if(e.target.value !== '' && title !== '' && contents!== ''){
        setMycolor(true)
      } 
     
      
    },
    title: (e)=>{
      setTitle(e.target.value);
      if(writer !== '' && e.target.value !== '' && contents!== ''){
        setMycolor(true)
      } 
     
    },
    contents: (e)=>{
      setContents(e.target.value);
      if(writer !== '' && title !== '' && e.target.value !== ''){
        setMycolor(true)
      } 
     
      
    }
  }

  const[createBoard] = useMutation(CREATE_BOARD);
  const[updateBoard] = useMutation(UPDATE_BOARD);

  const onClickCreate = async ()=>{
    const result = await createBoard({
      variables: {
        writer, // = writer: writer
        title,
        contents
      }
    });
    console.log(result.data.title);
    console.log(result.data.createBoard.message);
    router.push(`/09-01-boards/${result.data.createBoard.number}`)
  }

  const onClickUpdate = async()=>{
    const myVariables={
      number: Number(router.query.number),     //$number = number와 같음
    }
    if(writer) myVariables.writer = writer
    
    if(title) myVariables.title = title
  
    if(contents) myVariables.contents = contents
  
    const result = await updateBoard({
      variables: myVariables
    })
    router.push(`/09-01-boards/${result.data.updateBoard.number}`) //=router.query.number와 같은 번호임

  }



  return(
    <BoardWriteUI 
        onClickCreate={onClickCreate}
        onClickUpdate={onClickUpdate}
        onChangeFunction={onChangeFunction}
        mycolor = {mycolor}
        isEdit ={props.isEdit}
        data={props.data}
    />
  )
}

/*
  수정페이지에서 수정 내용 입력안할 경우, 백엔드에 빈내용 저장하는거 방지하는 방법

  1. state 초기값으로 defaultvalue 넣어주기
  2. mutation에서 state 가 변경된것만 보내기
*/ 