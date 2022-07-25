import { useMutation, gql } from "@apollo/client";
import { inputUnstyledClasses } from "@mui/base";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickGraphqlApi = async () => {
    const result = await createBoard({
      variables: {
        ...inputs,
        // writer: inputs.writer,
        // title: inputs.title,
        // contents: inputs.contents,
      },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  };

  // 같은 key가 2개 이상 있으면 가장 나중에 작성된 데이터만 저장됨.

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,

      [event.target.id]: event.target.value,

      // key값에 변수 넣을 수 없음 => 하는 방법이 있음 => key값을 대괄호로 감싸면 됨==> [변수명] : value값
    });
  };

  return (
    <>
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
    </>
  );
}
