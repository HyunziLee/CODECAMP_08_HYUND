import { SmileOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";

import { Modal } from "antd";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
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
  const [writer, setWriter] = useState("");
  const [pwd, setPwd] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImages] = useState();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const InputFunction = {
    writer: (e: ChangeEvent<HTMLInputElement>) => {
      setWriter(e.target.value);
    },
    password: (e: ChangeEvent<HTMLInputElement>) => {
      setPwd(e.target.value);
    },
    title: (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    contents: (e: ChangeEvent<HTMLInputElement>) => {
      setContents(e.target.value);
    },
  };
  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password: pwd,
            title,
            contents,
            images,
          },
        },
      });
      console.log(result.data);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onChangeInput = async (e) => {
    const file = e.target.files?.[0];
    console.log(file);
    try {
      const result = await uploadFile({ variables: { file } });
      if (!result.data?.uploadFile.url) {
        alert("이미지형식이 올바르지 않습니다.");
      } else {
        setImages(result.data?.uploadFile.url);
      }
    } catch (error) {
      Modal.error({ content: "에러발생" });
    }
  };

  const goodRef = useRef(null);

  const onClickImg = () => {
    goodRef.current?.click();
  };

  return (
    <>
      <div>
        작성자: <input type="text" onChange={InputFunction.writer} />
        비밀번호: <input type="password" onChange={InputFunction.password} />
        제목: <input type="text" onChange={InputFunction.title} />
        내용: <input type="text" onChange={InputFunction.contents} />
      </div>
      <SmileOutlined onClick={onClickImg} />
      <input
        type="file"
        style={{ display: "none" }}
        onChange={onChangeInput}
        accept="image/jpeg"
        ref={goodRef}
      />
      <div>
        <img src={`https://storage.googleapis.com/${images}`} alt="" />
      </div>
      <button onClick={onClickSubmit}>저장하기</button>
    </>
  );
}
