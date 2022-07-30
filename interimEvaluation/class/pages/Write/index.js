import { useState } from "react";
import WriterContainer from "../../src/components/board/writer/writer.container";

export default function WritePage(){
  const[isEdit, setIsEdit] = useState(false)
  return(
    <>
      <WriterContainer isEdit={isEdit}></WriterContainer>
    </>
  )
}