import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
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

export default function ImageUploadPreviewPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [callGraphql] = useMutation(CREATE_BOARD);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>();

  const onClickGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1"); // rest-api 방식

    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data.uploadFile.url;
    console.log(resultFile);
    const result = await callGraphql({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "안녕하셤",
          contents: "반갑",
          images: [url],
        },
      },
    });
    console.log(result);
  };
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    // 1. 진짜 Url 생성

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImageUrl(data.target?.result);
        setFile(file);
      }
    };

    // 2. 가짜 Url 생성
    // const result = URL.createObjectURL(file);
    // console.log(result);
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} alt="" />
      <button onClick={onClickGraphqlApi}>버튼</button>
    </>
  );
}
