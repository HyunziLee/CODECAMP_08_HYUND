import { useState } from 'react';
import {useMutation, gql} from '@apollo/client';

import { 
  Wrapper, 
  Wrapper_title, 
  Writer, 
  Writer_account, 
  Writer__name,
  Writer__input, 
  Writer__content, 
  Writer__content__title,
  Writer__content__input, 
  Writer__content__input2,
  Post__wrapper, 
  Post__input1, 
  Post__input2, 
  Post__btn, 
  Photo, 
  Photo__wrapper, 
  Photo__list, 
  Select, 
  Select__radio, 
  Submit__btn 
} from "../../styles/01-01";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput:$createBoardInput){
      _id
      writer
      title
      contents
      
    }
  }

`


export default function Freebd(){

  const [writer, setWriter] = useState('');
  const [pwd, setPwd] = useState('')
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const [writerMsg, setWriterMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [titleMsg, setTitleMsg] = useState('');
  const [contentsMsg, setContentsMsg] = useState('');
  const [inputState, setInputState] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
/*
  const BoardSubmit = async ()=>{
    // console.log(inputState);
    if(inputState ===true){
      // console.log(inputState);
      const result = await createBoard({
        variables: {
          createBoardInput:{
            writer: writer,
            password: pwd,
            title: title,
            contents: contents,
            youtubeUrl:"ddd",
            boardAddress:{
              zipcode: "1234",
              address: "경기도",
              addressDetail:"100ehd"
            },

          }
        }
      });
      console.log(result.data);
    }
    // setInputState(!inputState);
  }
*/


  

  function WriterF(e){
    setWriter(e.target.value);
    // 조건문에서 변수에 값이 있으면 true 임
    if(writer){
      setWriterMsg('');
    }
  }
  function PwdF(e){
    setPwd(e.target.value);
    if(pwd){
      setPwdMsg('');
    }
  }
  function TitleF(e){
    setTitle(e.target.value);
    if(title){
      setTitleMsg('');
    }
  }
  function ContentsF(e){
    setContents(e.target.value);
    if(contents){
      setContentsMsg('');
    }
  }
  
  function SignupChk(BoardSubmitC){
    
    if(writer !== '' && pwd !== '' && title !== '' && contents !== '') {
      setInputState(true);
      // alert('등록이 완료되었습니다.')
      
      
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
    BoardSubmitC();

  }
  const BoardSubmit = async ()=> {

    // console.log(inputState);
    //  if(inputState ===true){
      // console.log(inputState);
      const result = await createBoard({
        variables: {
          createBoardInput:{
            writer: writer,
            password: pwd,
            title: title,
            contents: contents,
            youtubeUrl:"ddd",
            boardAddress:{
              zipcode: "1234",
              address: "경기도",
              addressDetail:"100ehd"
            },
  
          }
        }
      });
      console.log(result.data);
    // }
    // setInputState(!inputState);
  }

 
  
  

  
 
  
  return(
    <Wrapper>
      <Wrapper_title>게시물 등록</Wrapper_title>
      <Writer>
        <Writer_account>
          <Writer__name>작성자</Writer__name>
          <Writer__input placeholder="이름을 적어주세요." onChange={WriterF}></Writer__input>
          <div style={{color:'red'}}>{writerMsg}</div>
        </Writer_account>
        <Writer_account>
          <Writer__name>비밀번호</Writer__name>
          <Writer__input placeholder="비밀번호를 입력해주세요." onChange={PwdF}></Writer__input>
          <div style={{color:'red'}}>{pwdMsg}</div>
        </Writer_account>
      </Writer>
      <Writer__content>
        <Writer__content__title>제목</Writer__content__title>
        <Writer__content__input placeholder="제목을 작성해주세요" onChange={TitleF}></Writer__content__input>
        <div style={{color:'red'}}>{titleMsg}</div>
      </Writer__content>
      <Writer__content>
        <Writer__content__title>내용</Writer__content__title>
        <Writer__content__input2 placeholder="내용을 작성해주세요" onChange={ContentsF}></Writer__content__input2>
        <div style={{color:'red'}}>{contentsMsg}</div>
      </Writer__content>
      <Writer__content>
        <Writer__content__title> 주소</Writer__content__title>
        <Post__wrapper>
          <Post__input1 placeholder="07250"></Post__input1>
          <Post__btn>우편번호 검색</Post__btn>
        </Post__wrapper>
        <Post__input2></Post__input2>
        <Post__input2></Post__input2>
      </Writer__content>
      <Photo>
        <Writer__content__title>사진 첨부</Writer__content__title>
        <Photo__wrapper>
          <Photo__list>
            <p>+</p>
            <p>Upload</p>
          </Photo__list>
          <Photo__list>
            <p>+</p>
            <p>Upload</p>
          </Photo__list>
          <Photo__list>
            <p>+</p>
            <p>Upload</p>
          </Photo__list>
        </Photo__wrapper>
      </Photo>
      <Select>
        <Writer__content__title>메인 설정</Writer__content__title>
        <label><Select__radio type="radio" name="mainSet" value="youtube"></Select__radio>유튜브</label>
        <label><Select__radio type="radio" name="mainSet" value='image'></Select__radio>사진</label>

      </Select>
      <Submit__btn onClick={()=>{
        SignupChk(BoardSubmit)
      }}>등록하기</Submit__btn>
      
     
     




    </Wrapper>
  )
}