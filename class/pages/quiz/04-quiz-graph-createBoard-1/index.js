import {useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard (
      writer: $writer,
      title: $title,
      contents: $contents
    ){
      _id
      number
      message
    }
  }

`



export default function QuizGraph(){

  const[createBoard] = useMutation(CREATE_BOARD);


  const onClickApi = async()=>{
    const result = await createBoard({
      variables: {
        writer:"이현지",
        title: "제목 작성",
        contents: "내용 작성"
      }
      
    })

    console.log(result.data);
  }
  
  

  return(
    <div>
      <button onClick={onClickApi}>GRAPHQL-API 요청하기</button>
    </div>
  )
}