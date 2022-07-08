import { useMutation, gql } from "@apollo/client";
import { useState } from 'react';
/*
순서
1. useMutation import 하기
2. 이벤트핸들러 만들기
3.


*/

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(
      writer: $writer,
      title: $title,
      contents: $contents
    ){
      _id
      number
      message
    }
  }

`

export default function createBoard2(){


  const [writer, setWriter] = useState('');
  const [title, setTitle] =useState('');
  const [contents, setContents] = useState('');

  const [createBoard] = useMutation(CREATE_BOARD);
  
  const onClickRes = async()=>{
    const result = await createBoard({
      variables:{
        writer: writer,
        title: title,
        contents: contents
      }
    })
    console.log(result);

  }
  const onChangeInput = {
    writerInput: (e)=>{
      setWriter(e.target.value);
    },
    titleInput: (e)=>{
      setTitle(e.target.value);
    },
    contentsInput: (e)=>{
      setContents(e.target.value);
      // console.log(contents);
    }
  }
  
  
  return(
    <div>
      <span>작성자</span>
      <input type="text" onChange={onChangeInput.writerInput}/> 
      <span>제목</span>
      <input type="text" onChange={onChangeInput.titleInput}/> 
      <span>내용</span>
      <input type="text" onChange={onChangeInput.contentsInput}/> 

      <button onClick={onClickRes}>그래프큐엘 에이피아이 요청하기</button>

    </div>
  )
}