import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function Quiz() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [callGraphql] = useMutation(CREATE_BOARD);
  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState<File>();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data.uploadFile.url;

    const result = await callGraphql({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          images: [url],
        },
      },
    });

    console.log(result);
  };

  const onChangeFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        setImgUrl(data.target?.result);
        setFile(file);
      }
    };
  };

  const onChangeInput = (input) => (event) => {
    if (input === "setWriter") {
      setWriter(event.target.value);
    } else if (input === "setPassword") {
      setPassword(event.target.value);
    } else if (input === "setTitle") {
      setTitle(event.target.value);
    } else if (input === "setContents") {
      setContents(event.target.value);
    }
  };

  return (
    <>
      작성자
      <input onChange={onChangeInput("setWriter")} />
      비밀번호
      <input onChange={onChangeInput("setPassword")} />
      제목
      <input onChange={onChangeInput("setTitle")} />
      내용
      <input onChange={onChangeInput("setContents")} />
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
      <button onClick={onClickSubmit}>저장하기</button>
    </>
  );
}
