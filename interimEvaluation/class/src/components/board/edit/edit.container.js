// import WriterContainer from "../writer/writer.container";

// export default function EditContainer(props){

//   const [updateBoard] = useMutation(UPDATE_BOARD)

//   const onClickEdit = async()=>{
//     const updateBoardInput = {};
//     if (title === "" || contents === "") {
//       alert("제목, 내용의 변경사항이 작성되지 않았다.");
//     }
    
//     if (title) updateBoardInput.title = title;
//     if (contents) updateBoardInput.contents = contents;

//     try {
//       const result = await updateBoard({
//         variables: {
//           boardId: String(props.boardId),
//           password,
//           updateBoardInput: updateBoardInput,
//         },
//       });
//       console.log(result)
//       router.push(`/Detail/${result.data?.updateBoard._id}`)
//     } catch (error) {
//       if (error) alert(error.message);
//     }    
//   }
//   return(
//     <>
//        <WriterContainer 
//         isEdit={props.isEdit}
//         boardId={props.boardId}
//         onClickEdit={onClickEdit}
//       />
//     </>
//   )
// }