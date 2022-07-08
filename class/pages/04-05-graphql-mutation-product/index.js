import {useMutation, gql} from '@apollo/client';
import { useState } from 'react';


//$는 변수를 뜻함

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller:$seller, createProductInput: $createProductInput){
      _id
      number
      message
    }
  }

`


export default function GraphqlMutationPage(){
  
  const [seller, setSeller] = useState('');
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState(0);


  const[createProduct] = useMutation(CREATE_PRODUCT);



  const onClickGraphqlApi = async ()=>{
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: price,
        }
      }
    });
    console.log(result);
    console.log(result.data.createProduct.message);
  }

  const onChangeSeller = (e)=>{
    setSeller(e.target.value); 
  }
  const onChangeName = (e)=>{
    setName(e.target.value);
  }
  const onChangeDetail = (e)=>{
    setDetail(e.target.value);
  }
  const onChangePrice = (e)=>{
    setPrice(parseInt(e.target.value));
  }
  
  return(
    <>
      판매자: <input type="text" onChange={onChangeSeller} /><br />
      상품명: <input type="text" onChange={onChangeName}/><br />
      상품 상세 설명: <input type="text" onChange={onChangeDetail}/><br />
      상품 가격: <input type="text" onChange={onChangePrice}/><br />
      <button onClick={onClickGraphqlApi}>그래프큐엘 api 요청하기</button>
    </>
  )
}
