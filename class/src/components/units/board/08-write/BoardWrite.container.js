import {useMutation} from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import {CREATE_BOARD, UPDATE_BOARD }from './BoardWrite.queries'

import { useRouter } from 'next/router';



export default function BoardWrite(props){

  const router = useRouter();

  const [mycolor, setMycolor] = useState(false)
  const [inputState, setInput] = useState([0,0,0])

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
  const[updateBoard] = useMutation(UPDATE_BOARD)

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
    router.push(`/08-05-boards/${result.data.createBoard.number}`)
  }

  const onClickUpdate = async()=>{
    const result = await updateBoard({
      variables:{
        number: Number(router.query.number),     //$number = number와 같음
        writer:writer,
        title:title,
        contents:contents
      }
    })
    router.push(`/08-05-boards/${result.data.updateBoard.number}`) //=router.query.number와 같은 번호임

  }



  return(
    <BoardWriteUI 
        onClickCreate={onClickCreate}
        onClickUpdate={onClickUpdate}
        onChangeFunction={onChangeFunction}
        mycolor = {mycolor}
        isEdit ={props.isEdit}
    />
  )
}