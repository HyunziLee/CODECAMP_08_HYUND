import {useMutation, gql} from '@apollo/client';
 
//$는 변수를 뜻함
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $$contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        message
    }
  }
`

export default function GraphqlMutationPage(){
  const[createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async ()=>{
    const result = await createBoard({
      variables: {
        writer: "철수",
        title: "안녕하세요",
        contents: "반갑습니다."
      }
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  }
  
  return(
    <>
      <button onClick={onClickGraphqlApi}>그래프큐엘 api 요청하기</button>
    </>
  )
}
04-02-graphql-mutation-args