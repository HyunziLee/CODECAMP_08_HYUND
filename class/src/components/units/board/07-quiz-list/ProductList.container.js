import {Row, Column} from './ProductList.styles'
import { useQuery, useMutation } from '@apollo/client';

import { gql } from '@apollo/client';

export const FETCH_PRODUCTS = gql`
  query(page:Int){
    fetchProducts(page:$page){
      _id
      seller
      name
      detail
      price
     
    }
  }


`

// export const DELETE_PRODUCT = gql`
//   mutation deleteProduct($productId:ID){
//     deleteProduct(productId: $productId){
//       message
//     }
//   }
// `


export default function ProductList(){
  // const [deleteProduct] = useMutation(DELETE_PRODUCT)
  const {data} = useQuery(FETCH_PRODUCTS,{
    variables:{
      page: 7
    }
  });

  // const onClickDelete = (e)=>{
  //   deleteProduct({
  //     variables:{
  //       productId: e.target.id
  //     },
  //     refetchQueries:[{query: FETCH_PRODUCTS}]
  //   })
  // }

  
  
  return (
    <>
        
        {data?.fetchProducts.map(e => (
            <Row key={e._id}>
                <Column><input type="checkbox" /></Column>
                
                <Column>{e.seller}</Column>
                <Column>{e.name}</Column>
                <Column>{e.detail}</Column>
                <Column>{e.price}</Column>
                {/* <button id={e._id} onClick={onClickDelete}>삭제</button> */}
            </Row>
        ))}
    </>
    
    
     

  )
}