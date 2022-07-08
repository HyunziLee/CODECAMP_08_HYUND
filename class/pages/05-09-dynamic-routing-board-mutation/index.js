import {useMutation, gql} from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';


//$는 변수를 뜻함
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        message
    }
  }
`

export default function GraphqlMutationPage(){

  const router = useRouter();
  
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');


  const[createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async ()=>{
    //안될수 있으니칸 => 실패하면 바로 catch문으로 들어감
    try{
      const result = await createBoard({
        variables: {
          writer: writer,
          title: title,
          contents: contents
        }
      });
      router.push(`/05-08-dynamic-routed-board-query/${result.data.createBoard.number}`)
      console.log(result.data.createBoard.number);

    } catch(error){
        console.log(error.message)
    }
    
  }

  const onChangeWriter = (e)=>{
    setWriter(e.target.value); 
  }
  const onChangeTitle = (e)=>{
    setTitle(e.target.value);
  }
  const onChangeContents = (e)=>{
    setContents(e.target.value);
  }
  
  return(
    <>
      작성자: <input type="text" onChange={onChangeWriter} /><br />
      제목: <input type="text" onChange={onChangeTitle}/><br />
      내용: <input type="text" onChange={onChangeContents}/><br />
      <button onClick={onClickGraphqlApi}>그래프큐엘 api 요청하기</button>
    </>
  )
}
