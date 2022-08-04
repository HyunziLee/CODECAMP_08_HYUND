import { gql } from '@apollo/client';

export const FETCH_PRODUCTS = gql`
  query($page:Int){
    fetchProducts(page:$page){
      
      seller
      name
      detail
      price
      number
    }
  }


`

export const DELETE_PRODUCT = gql`
  mutation deleteProduct(number:Int){
    deleteProduct(number:$number){
      message
    }
  }
`