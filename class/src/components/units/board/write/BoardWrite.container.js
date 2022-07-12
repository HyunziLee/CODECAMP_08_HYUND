import {useMutation} from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import {CREATE_BOARD }from './BoardWrite.queries'



export default function BoardWrite(){
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onChangeFunction = {
    writer: (e)=>{
      setWriter(e.target.value); 
    },
    title: (e)=>{
      setTitle(e.target.value);
    },
    contents: (e)=>{
      setContents(e.target.value);
    }
  }

  const[createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async ()=>{
    const result = await createBoard({
      variables: {
        writer, // = writer: writer
        title,
        contents
      }
    });
    console.log(result.data.title);
    console.log(result.data.createBoard.message);
  }



  return(
    <BoardWriteUI 
        onClickGraphqlApi={onClickGraphqlApi}
        onChangeFunction={onChangeFunction}
        
    />
  )
}