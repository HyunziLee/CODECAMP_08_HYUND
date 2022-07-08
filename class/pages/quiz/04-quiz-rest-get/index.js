import axios from 'axios';

export default function QuizRestGet(){
  
  const axiosGet = async ()=>{
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result.data);
  }
  
  
  return(
    <>
      <button onClick={axiosGet}>REST-API 요청하기</button>
    </>
  )
}