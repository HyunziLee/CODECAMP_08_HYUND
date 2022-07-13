import PostListUI from "./postList.presenter"

import { useQuery, gql } from '@apollo/client';

const FETCH_BOARDS = gql`
  query fetchBoards ($page: Int){
    fetchBoards (page: $page){
      _id
      writer
      title
      createdAt
      

    }
  }


`

export default function PostListContainer(){

  let a = 5;
  const {data} = useQuery(FETCH_BOARDS, {
    variables: {
      page: Number(a)
    }
  });
  // console.log(data.fetchBoards)

  
  
  
  return(
    
    <>
      
      <PostListUI data={data}></PostListUI>
    </>
  )
}