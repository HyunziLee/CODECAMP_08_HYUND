import {useMutation} from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import {CREATE_BOARD, UPDATE_BOARD }from './BoardWrite.queries'

import { useRouter } from 'next/router';
import { IBoardWriteProps, IMyVariables } from './BoardWrites.types';
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from '../../../../commons/types/generated/types';




export default function BoardWrite(props: IBoardWriteProps){

  const router = useRouter();

  const [mycolor, setMycolor] = useState(false)
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');


  const[createBoard] = useMutation<Pick<IMutation,"createBoard">,IMutationCreateBoardArgs>(CREATE_BOARD);
  const[updateBoard] = useMutation<Pick<IMutation,"updateBoard">,IMutationUpdateBoardArgs>(UPDATE_BOARD);

  const onChangeFunction = {
    //ChangeEvent는 리액트에서 제공되는 기능으로, 이벤트핸들러 함수의 매개변수 타입을 미리 지정해둔거 사용방법은 :ChangeEvent<HTMLInputElement> <- 이벤트 핸들링 발생하는 태그 입력
    writer: (e: ChangeEvent<HTMLInputElement>)=>{
      setWriter(e.target.value); 
      if(e.target.value !== '' && title !== '' && contents!== ''){
        setMycolor(true)
      } 
     
      
    },
    title: (e: ChangeEvent<HTMLInputElement>)=>{
      setTitle(e.target.value);
      if(writer !== '' && e.target.value !== '' && contents!== ''){
        setMycolor(true)
      } 
     
    },
    contents: (e: ChangeEvent<HTMLInputElement>)=>{
      setContents(e.target.value);
      if(writer !== '' && title !== '' && e.target.value !== ''){
        setMycolor(true)
      } 
     
      
    }
  }
 


  const onClickCreate = async ()=>{
    const result = await createBoard({
      variables: {
        writer, // = writer: writer
        title,
        contents
      }
    });
   
    router.push(`/10-01-typescript-boards/${result.data?.createBoard?.number}`)
  }

  const onClickUpdate = async()=>{

    const myVariable: IMyVariables={
      number: Number(router.query.number),     //$number = number와 같음
    }
    if(writer) myVariable.writer = writer
    
    if(title) myVariable.title = title
  
    if(contents) myVariable.contents = contents
  
    const result = await updateBoard({
      variables: myVariable
    })
    router.push(`/10-01-typescript-boards/${result.data?.updateBoard?.number}`) //=router.query.number와 같은 번호임

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