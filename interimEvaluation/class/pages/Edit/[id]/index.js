import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import EditContainer from "../../../src/components/board/edit/edit.container";
import { FETCH_BOARD } from "../../../src/components/board/gql";
import WriterContainer from "../../../src/components/board/writer/writer.container";

export default function EditPage(){

  

  const router = useRouter()
  
  const [boardId, setBoardId]  = useState(router.query.id) 
  
  const[isEdit, setIsEdit] = useState(true)

  const {data} = useQuery(FETCH_BOARD,{
    variables: {
     
      boardId: String(router.query.id),
    },
  });

  


  
  return(
    <>
      <WriterContainer 
        isEdit={isEdit}
        boardId={boardId}
        data={data}
      />
    </>
  )
}