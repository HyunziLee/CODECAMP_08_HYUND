import axios from 'axios';
import { useState } from 'react';

export default function RestGetPage(){

  const [title, setTitle] = useState('');
  
  // 비동기적 방식
  const onClickRestApiAsync = ()=>{
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log(result)
  }

  //동기적 방식
  const onClickRestApiSync = async ()=>{
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log(result);
    setTitle(result.data.title);

  }
  
  return(
    <>
      <button onClick={onClickRestApiAsync}>REST-API 비동기 요청하기</button> 
      <button onClick={onClickRestApiSync}>REST-API 동기 요청하기</button> 
      <div>{title}</div>
    </>
    
  )
}