import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID){
    fetchProduct(productId: $productId){
      _id
      seller
      name
      detail
      price
    }
  }

  


`


export default function QuizRouted(){

  const router = useRouter();

  const {data} = useQuery(FETCH_PRODUCT,{
    variables: {
      // router.query.변수명=> 하위 폴더 [변수명]
      productId : router.query.name
      
    }
  })
  
  return(
    
    <div>
      <div>조회 페이지 </div>
      <div>판매자자: {data?.fetchProduct.seller} </div>
      <div>제목: {data?.fetchProduct.name}</div>
      <div>내용: {data?.fetchProduct.contents}</div>
      <div>가격: {data ? data.fetchProduct.price : "로딩중 입니다"}</div>
    </div>
  )
}