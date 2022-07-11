import {useState} from 'react';
import {useMutation,gql} from '@apollo/client';
import { useRouter } from 'next/router'; 


 /*
  1. css 만들기 (등록 화면, 데이터 뿌려주는 화면)
  2. input 데이터 state 만들기
  3. onclick btn 함수 만들기
  4. DB에 보내기
  5. DB에 불러와서 화면에 뿌리기
 
 
 
 */
const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(
      seller : $seller,
      createProductInput: $createProductInput
    ){ 
      _id
      number
      message

    }
  
  }

`



export default function QuizRouting(){

  const [createProduct] = useMutation(CREATE_PRODUCT)
  const router = useRouter();

  const [seller, setSeller] = useState('');
  const [itemName, setItemName] = useState('');
  const [contents, setContents] = useState('');
  const [price, setPrice] = useState('');
  const onChangeInput = {
    seller: (e)=>{setSeller(e.target.value)},
    item: (e)=>{setItemName(e.target.value)},
    contents: (e)=>{setContents(e.target.value)},
    price: (e)=>{setPrice(parseInt(e.target.value))},
  }

  
  const onClickSubmitBtn = async()=>{
    try{
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput:{
            name: itemName,
            detail: contents,
            price: price
          }
        }
      });
      router.push(`05-quiz-routed/${result.data.createProduct._id}`)
      console.log(router);

    }catch(error){
      console.log(error.message)
    }
      
  }

  
 
  
  return(
    <div>
      <div>
        <span>판매자: </span>
        <input type="text" onChange={onChangeInput.seller} />
      </div>
      <div>
        <span>상품명: </span>
        <input type="text" onChange={onChangeInput.item}/>
      </div>
      <div>
        <span>상품내용: </span>
        <input type="text" onChange={onChangeInput.contents}/>
      </div>
      <div>
        <span>상품가격: </span>
        <input type="text" onChange={onChangeInput.price}/>
      </div>

      <button onClick={onClickSubmitBtn}>상품 등록하기</button>
      

    </div>
  )
}