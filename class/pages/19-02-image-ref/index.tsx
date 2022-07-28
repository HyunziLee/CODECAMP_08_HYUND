import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    // const file = e.target.files[0]; =>// 에러뜨는 이유는 배열이 비어있는데, 어케 [0]번째 배열을 가져오냐 이거임

    const file = e.target.files?.[0];
    console.log(file);

    try {
      const result = await uploadFile({ variables: { file } });
      if (!result.data?.uploadFile.url) {
        alert("이미지형식이 올바르지 않습니다.");
      } else {
        setImageUrl(result.data?.uploadFile.url);
      }
    } catch (error) {
      Modal.error({ content: "에러발생" });
    }
  };
  const onClickImage = () => {
    // 파일태그(=어떤변수)를 클랙해죠
    fileRef.current?.click();
  };

  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
