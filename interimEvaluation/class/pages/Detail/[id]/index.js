import { useRouter } from "next/router";
import { useState } from "react";
import DetailContainer from "../../../src/components/board/detail/detail.container";


export default function DetailPage(){
  
  const router = useRouter()

  const [boardId, setBoradId] = useState(router.query.id)
  return(
    <>
      <DetailContainer boardId={boardId}></DetailContainer>
    </>
  )
}