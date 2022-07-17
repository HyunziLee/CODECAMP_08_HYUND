import PostListUI from "./postList.presenter"

import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const FETCH_BOARDS = gql`
  query fetchBoards ($endDate:DateTime, $startDate:DateTime, $search:String, $page:Int){
    fetchBoards (endDate:$endDate, startDate:$startDate, search:$search, page:$page){
      _id
      writer
      title
      createdAt
      

    }
  }


`


export default function PostListContainer(){

  const router = useRouter();

  let a = 1;

  // useQuery  결과값 담는 변수명은 data 밖에 못씀, 만약에 useQuery가 여러개 있다면 이런식으로 써야함=> const {data :작명 }  = useQuery() 데이터는 작명에 담김 => ex console.log(작명)
  const {data} = useQuery(FETCH_BOARDS, {
    variables: {
      page: Number(a)
    }
  });

  const MoveToWritePageBtn=()=>{

    router.push(`/PostForm/`)
  }
   
  return(
    
    <>
      
      <PostListUI 
        data={data}
        
        MoveToWritePageBtn={MoveToWritePageBtn}
        >
      </PostListUI>
    </>
  )
}