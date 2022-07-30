import ListPresenter from "./list.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "../gql";
import InfiniteScroll from "react-infinite-scroller";
import * as s from '../../../commons/styles/main.styles'




export default function ListContainer(){
  const router = useRouter()
  const {data, fetchMore} = useQuery(FETCH_BOARDS)

  const onFetchMore = () => {
    if (!data) {
      return;
    }
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length /10) + 1 }, // <= 다음페이지 계산하는 거임
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  
  // console.log(data.fetchBoards)
  
  
  return(
    <>
       <s.Wrapper_scroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={onFetchMore}
          hasMore={true}
          useWindow={false}
        >
         
          {
            data?.fetchBoards.map((e)=>(
              <ListPresenter key={e._id} e={e}></ListPresenter>
            ))
          }
           
          </InfiniteScroll>
        </s.Wrapper_scroll>
      
    </>
  )
}