import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(
      seller: $seller,
      createProductInput: $createProductInput
    ){
      _id
      number
      
    }
  }

`




export default function createProduct22(){
  
  const[seller, setSeller] = useState('');
  const[productName, setProductName] = useState('');
  const[productDetail, setProductDetail] = useState('');
  const[price, setPrice] = useState(0);

  const [createProduct] = useMutation(CREATE_PRODUCT);
 

 


  const onChangeInputP = {
    sellerInput: (e)=>{
      setSeller(e.target.value);
      // console.log(seller);
    },
    pdNameInput: (e)=>{
      setProductName(e.target.value);
      // console.log(productName);
    },
    pdDetailInput:(e)=>{
      setProductDetail(e.target.value);
      // console.log(productDetail);
    },
    priceInput:(e)=>{
      setPrice(parseInt(e.target.value));
      // console.log(price);
    }
  }

  const onClickBtn = async ()=>{
    const result = await createProduct({
      variables:{
        seller: seller,
        createProductInput:{
          name: productName,
          detail: productDetail,
          price: price
        }
      }
    })
    console.log(result.data)
  }


  return(
    <div>
      <div>
        <span>판매자</span>
        <input type="text" onChange={onChangeInputP.sellerInput}/>
      </div>
      <div>
        <span>상품명</span>
        <input type="text" onChange={onChangeInputP.pdNameInput}/>
      </div>
      <div>
        <span>상세정보</span>
        <input type="text" onChange={onChangeInputP.pdDetailInput}/>
      </div>
      <div>
        <span>가격</span>
        <input type="text" onChange={onChangeInputP.priceInput}/>
      </div>
      <button onClick={onClickBtn}>등록하기</button>
    </div>
  )
}