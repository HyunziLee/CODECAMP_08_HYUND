
import { useQuery } from '@apollo/client';
import { FETCH_PRODUCT } from '../component/queries';
import { useRouter } from 'next/router';

export default function Detail(){
  
  const router = useRouter()

  const {data} = useQuery(FETCH_PRODUCT,{
    variables: {
      // router.query.변수명=> 하위 폴더 [변수명]
      productId : router.query.number
      
    }
  })
 
  console.log(data)

  const onClickMoveToEdit = ()=>{
    router.push(`/quiz/08-quiz-component/${router.query.number}/edit`)


}


  
  
  return(
    <>
      
      <div>판매자: {data ? data.fetchProduct.seller : "받아오는 중 입니다"}</div>
      <div>상품명: {data && data.fetchProduct.name}</div>
      <div>상세정보: {data?.fetchProduct.detail}</div>
      <div>가격: {data?.fetchProduct.price}</div>
      <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
  </>
    
  )
}