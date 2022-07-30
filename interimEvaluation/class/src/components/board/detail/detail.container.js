import DetailPresenter from "./detail.presenter";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD, FETCH_BOARDS } from "../gql";
import { useQuery, useMutation } from "@apollo/client";

export default function DetailContainer(props){
  const router = useRouter()
  const {data} = useQuery(FETCH_BOARD,{
    variables: {
     
      boardId: String(router.query.id),
    },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickGotoList= ()=>{
    
    router.push(`/`)
  }
  const onClickEdit= ()=>{
    router.push(`/Edit/${router.query.id}`);

  }
  const onClickDelete= ()=>{
    try {
      deleteBoard({
        variables: {
          boardId: String(router.query.id),
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      console.log("삭제완료");
      router.push(`/`);
    } catch (error) {
      if (error) console.log(error.message);
    }

  }
  console.log(data)

  return(
    <>
      <DetailPresenter 
        data={data}
        onClickGotoList={onClickGotoList} 
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        boardId={props.boardId}
      />
    </>
  )
}