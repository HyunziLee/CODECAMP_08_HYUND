import QuizPresenter from './presenter'
import { useMutation } from '@apollo/client';

import { CREATE_PRODUCT, UPDATE_PRODUCT } from './queries';
import { useRouter } from 'next/router';
import { useState } from 'react';


export default function QuizContainer(props){
  const router = useRouter();
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const[updateProduct] = useMutation(UPDATE_PRODUCT);


  const [seller, setSeller] = useState('');
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState('');

  const onChangeFunction = {
    seller: (e)=>{
      setSeller(e.target.value); 
      

    },
    name: (e)=>{
      setName(e.target.value);
      
    },
    detail: (e)=>{
      setDetail(e.target.value);
      
      
    },
    price: (e)=>{
      setPrice(e.target.value);
      
      
    }
  }
  const onClickBtn = async ()=>{
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        }
      }
    });
    
    router.push(`/quiz/08-quiz-component/${result.data.createProduct._id}`)
  }

  const onClickUpdate = async()=>{
    const result = await updateProduct({
      variables:{
        productId: router.query.number ,   //$number = number와 같음
        updateProductInput:{
          name:name,
          detail:detail,
          price:Number(price)

        }
      }
      
    })
    console.log(result)
    router.push(`/quiz/08-quiz-component/${router.query.number}`) //=router.query.number와 같은 번호임

  }

  return(
    <>
      <QuizPresenter
        onClickBtn={onClickBtn}
        onClickUpdate={onClickUpdate}
        onChangeFunction={onChangeFunction}  
        btnState = {props.btnState}   
        
      ></QuizPresenter>
    </>
  )
}