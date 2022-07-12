import {useMutation} from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import BoardWrite2UI from './BoardWrite2.presenter';
import { CREATE_BOARD } from './BoardWrite2.queries';



export default function BoardWrite2(){
  const router = useRouter();
  
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [btnState, setBtnState] = useState(true)


  const[createBoard] = useMutation(CREATE_BOARD);

  const onChangeFunction ={
    writer: (e)=>{
      setWriter(e.target.value); 
    }, 
    title:(e)=>{
      setTitle(e.target.value);
    },
    contents: (e)=>{
      setContents(e.target.value);
      if(writer !==null && title !=null){
      console.log('ddd')
      setBtnState(!btnState)
    }
    }

  }

  const onClickGraphqlApi = async ()=>{
    //안될수 있으니칸 => 실패하면 바로 catch문으로 들어감

    
      setBtnState(false);
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
 
  return (
    <BoardWrite2UI 
      onClickGraphqlApi={onClickGraphqlApi}
      btnState ={btnState}
      onChangeFunction={onChangeFunction}
      />
  )
}