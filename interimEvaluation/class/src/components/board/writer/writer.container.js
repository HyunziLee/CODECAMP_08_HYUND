import WriterPresenter from "./writer.presenter";
import {CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE} from '../gql'
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function WriterContainer(props){
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const router = useRouter()
  const ImgRef = useRef(null);

  

  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [image, setImage] = useState("")

 
  const InputFunction = {
    writer: (e) => {
      setWriter(e.target.value);
      console.log(e.target.value)
      
    },
    password: (e) => {
      setPassword(e.target.value);
      console.log(e.target.value)
     
    },
    title: (e) => {
      setTitle(e.target.value);
      console.log(e.target.value)
     
    },
    contents: (e) => {
      setContents(e.target.value);
      console.log(e.target.value)
     
    }
  };

  const onClickSubmit = async()=>{
    if(writer && password && title && contents ){
      try{
        const result = await createBoard({
          variables:{
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              images:image
              
            },
          }
        });
        router.push(`/Detail/${result.data?.createBoard._id}`)
        console.log(result)
      }catch(error){alert(error.message)}      
    }
  }

  const onClickEdit = async()=>{
    const updateBoardInput = {};
    if (title === "" || contents === "") {
      alert("제목, 내용의 변경사항이 작성되지 않았다.");
    }
    
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      const result = await updateBoard({
        variables: {
          boardId: String(props.boardId),
          password,
          updateBoardInput: updateBoardInput,
        },
      });
      console.log(result)
      router.push(`/Detail/${result.data?.updateBoard._id}`)
    } catch (error) {
      if (error) alert(error.message);
    }    
  }

  const onClickCancel = ()=>{
    router.push(`/`)

  }
  const onClickImg = () => {
    ImgRef.current?.click();
  };

  const onChangeInputImg = async (e) => {
    
    const file = e.target.files?.[0];
    
    try {
      const result = await uploadFile({ variables: { file } });
      if (!result.data?.uploadFile.url) {
        alert("이미지형식이 올바르지 않습니다.");
      } else {
        
        setImage(result.data?.uploadFile.url);
      }
      
    } catch (error) {
      console.log(error.message)
    }
  };
  console.log(image)

  return(
    <>
      <WriterPresenter 
        isEdit={props.isEdit}
        InputFunction={InputFunction}
        onClickSubmit={onClickSubmit}
        onClickEdit={onClickEdit}
        data={props.data}
        onClickCancel={onClickCancel}
        onClickImg={onClickImg}
        onChangeInputImg={onChangeInputImg}
        ImgRef={ImgRef}
        image={image}
        
       
      />
    </>
  )
}