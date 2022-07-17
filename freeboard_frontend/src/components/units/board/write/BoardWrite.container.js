import { useState } from 'react';
import { useRouter } from 'next/router';
import {useMutation} from '@apollo/client';

import { CREATE_BOARD, UPDATE_BOARD } from '../queries';
import BoardWriteUI from './BoardWrite.presenter';

export default function BoardWrite(props){

  const [createBoard] = useMutation(CREATE_BOARD);
  const[updateBoard] = useMutation(UPDATE_BOARD)
  const router = useRouter();
  
  const [writer, setWriter] = useState('');
  const [pwd, setPwd] = useState('')
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [youtube, setYoutubeUrl] = useState('');
  const [addressTotal, setAddressTotal] = useState({
    zipcode: "",
    address: "",
    addressDetail: ''
    })


  const [writerMsg, setWriterMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [titleMsg, setTitleMsg] = useState('');
  const [contentsMsg, setContentsMsg] = useState('');
  
  const InputFunction = {
    writer: (e)=>{
      setWriter(e.target.value);
      if(writer){
        setWriterMsg('');
      }
    },
    password: (e)=>{  
      setPwd(e.target.value);
      if(pwd){
        setPwdMsg('');
      }
    },
    title: (e)=>{
      setTitle(e.target.value);
      if(title){
        setTitleMsg('');
     }
    }, 
    contents: (e)=>{
      setContents(e.target.value);
      if(contents){
        setContentsMsg('');
      }
    }, 
    youtube: (e)=>{
      setYoutubeUrl(e.target.value)
    },
    address: (e)=>{
      setAddressTotal(e.target.value)
    }

  }
  
  const SignupChk = async ()=>{
    
    if(writer !== '' && pwd !== '' && title !== '' && contents !== '') {

      try{
        const result = await createBoard({
          variables: {
            createBoardInput:{
              writer: writer,
              password: pwd,
              title: title,
              contents: contents,
              youtubeUrl: "youtube",
              boardAddress:{
                zipcode: "ddd",
                address: "ddd",
                addressDetail:"dddd"
              },
    
            }
          }
        });
        console.log(result.data);  
        router.push(`/PostDetail/${result.data.createBoard._id}`)
       
        console.log(router)
      }catch(error){
        console.log(error.message)
      } 
    }
    if(writer === ''){
      setWriterMsg('이름을 입력하세요');
    }
    
    if(pwd === ''){
      setPwdMsg('비밀번호를 입력하세요');
    }
    if(title === ''){
      setTitleMsg('제목을 입력하세요');
    }
    if(contents === ''){
      setContentsMsg('내용을 입력하세요');
    }
    
  }

  const onClickUpdateBtn = async()=>{
    
    if(writer !== '' && pwd !== '' && title !== '' && contents !== '') {
      try{
        const result= await updateBoard({
          variables: {
           
            updateBoardInput:{
              title,
              contents,
              youtubeUrl: "youtube",
              boardAddress:{
                zipcode: "ddd",
                address: "ddd",
                addressDetail:"dddd"
              },

            }
          
          }
        });
        router.push(`/PostDetail/${result.data.updateBoard._id}`)
        console.log(result.data);  
        console.log(router)
      }catch(error){
        console.log(error.message)
      } 
    }
    if(writer === ''){
      setWriterMsg('이름을 입력하세요');
    }
    
    if(pwd === ''){
      setPwdMsg('비밀번호를 입력하세요');
    }
    if(title === ''){
      setTitleMsg('제목을 입력하세요');
    }
    if(contents === ''){
      setContentsMsg('내용을 입력하세요');
    }

  }
  
  
  return(
    <BoardWriteUI
      InputFunction={InputFunction}
      SignupChk={SignupChk}
      writerMsg={writerMsg}
      pwdMsg={pwdMsg}
      titleMsg={titleMsg}
      contentsMsg={contentsMsg}
      btnState={props.btnState}
      onClickUpdateBtn={onClickUpdateBtn}

    />
  )
}