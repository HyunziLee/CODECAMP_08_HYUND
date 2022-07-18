import  styled  from '@emotion/styled';
import { Rate } from 'antd';
import { useState } from 'react';

const Star = styled(Rate)`` 

export default function Quiz(){

  const[star, setStar] = useState(0);
  alert(`${star}입니다.`);
  

  
  
  
  console.log(star)
  
  return(
    <>
      <Star onChange={setStar}></Star>
      <div>{star}</div>
    </>
    
  )
}