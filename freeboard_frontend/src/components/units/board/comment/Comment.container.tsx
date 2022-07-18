import CommentUI from './Comment.presenter'
import {CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS} from '../queries'
import { useState } from 'react';
import { useRouter } from 'next/router';
import {useMutation} from '@apollo/client';

export default function CommentContainer(){

  const[createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const router = useRouter();
  const[writer, setWriter] = useState('');
  const[password, setPassword] = useState('');
  const[contents, setContents] = useState('');
  const[rating, setRating] = useState(0.0);

  const commentInputFunc = {
    writer: (e)=>{
      setWriter(e.target.value);
      console.log(writer)
    },
    password: (e)=>{
      setPassword(e.target.value);
      console.log(password)
    },
    contents: (e)=>{
      setContents(e.target.value);
      console.log(contents)
    },
    rating: (e)=>{
      setRating(e.target.value);
      console.log(rating)
    },
  }

  const onClickCommentBtn = async()=>{
    
    try{
      const result = await createBoardComment({
        variables:{
          boardId:router.query.name,
          createBoardCommentInput:{
            writer: writer,
            password: password,
            contents: contents,
            rating: 0
          }

        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.name },
          },
        ]

      });
      console.log(result)
    }catch(error){
      alert(error.message)
    }
  }



  return(
    <CommentUI
      onClickCommentBtn={onClickCommentBtn}
      commentInputFunc={commentInputFunc}
      
    ></CommentUI>
  )
}