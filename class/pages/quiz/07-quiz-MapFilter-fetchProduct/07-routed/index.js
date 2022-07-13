
import { useMutation, gql, useQuery } from '@apollo/client'
import styled from "@emotion/styled"

const FETCH_PRODUCTS = gql`
  query fetchProducts{
    fetchProducts{
      _id
      seller
      name
      detail
      price

    }
  }

`

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID){
    deleteProduct(productId:$productId){
      message
    }
  }
`


const Row = styled.div`
    display: flex;
`

const Column = styled.div`
    width: 20%;
`

export default function QuizMapFilter(){
  const [deleteProduct] = useMutation(DELETE_PRODUCT)

  const {data} = useQuery(FETCH_PRODUCTS,{
    variables:{
      page: 7
    }
  });


  const onClickDelete = (e)=>{
    deleteProduct({
      variables:{
        productId : e.target.id
      },
      refetchQueries:[{query: FETCH_PRODUCTS}]
    })
  }
  console.log(data)
  
  
  return (
    <>
        
        {data?.fetchProducts.map(e => (
            <Row key={e._id}>
                <Column><input type="checkbox" /></Column>
                
                <Column>{e.seller}</Column>
                <Column>{e.name}</Column>
                <Column>{e.detail}</Column>
                <Column>{e.price}</Column>
                <button id={e._id} onClick={onClickDelete}>삭제</button>
            </Row>
        ))}
    </>
    
  )
}