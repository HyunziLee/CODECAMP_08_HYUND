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
  // const [imageUrl, setImageUrl] = useState("");
  // const [file, setFile] = useState<File>();

  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const onClickGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1"); // rest-api 방식

    /*
    // 1. promiseAll을 안썼을 때
    const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    const resultFile2 = await uploadFile({ variables: { file: files[2] } });
    const url0 = resultFile0.data.uploadFile.url;
    const url1 = resultFile1.data.uploadFile.url;
    const url2 = resultFile2.data.uploadFile.url;
    const resultUrls = [url0, url1, url2];

    // 2. promise.all()을 썼을 때
    const results = await Promise.all([
      uploadFile({ variables: { file: files[0] } }),
      uploadFile({ variables: { file: files[1] } }),
      uploadFile({ variables: { file: files[2] } }),
    ]);

    console.log(results); // const result2 = [resultFile0, resultFile1.resultFile2]
    const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : "")); // const resultUrls = [url0, url1, url2]
    */

    // 3. promise.all()을 썼을 때(리펙토링)

    const results = await Promise.all(
      // files = [파일1, 파일2, 파일3]
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    console.log(results); // const result2 = [resultFile0, resultFile1.resultFile2]
    const resultUrls = results.map((el) => (el ? el.data.uploadFile.url : "")); // const resultUrls = [url0, url1, url2]

    const result = await callGraphql({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "안녕하셤",
          contents: "반갑",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };
  const onChangeFile =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const isValid = checkValidationFile(file);
      if (!isValid) return;

      // 1. 진짜 Url 생성

      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);
      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[index] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };

      // 2. 가짜 Url 생성
      // const result = URL.createObjectURL(file);
      // console.log(result);
    };
  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} alt="" />
      <img src={imageUrls[1]} alt="" />
      <img src={imageUrls[2]} alt="" />
      <button onClick={onClickGraphqlApi}>버튼</button>
      <button onClick={onClickGraphqlApi}>버튼</button>
      <button onClick={onClickGraphqlApi}>버튼</button>
    </>
  );
}
