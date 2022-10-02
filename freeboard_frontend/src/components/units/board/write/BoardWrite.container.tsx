import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";

import { CREATE_BOARD, UPDATE_BOARD } from "../queries";
import BoardWriteUI from "./BoardWrite.presenter";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { IBoardWriteProps, IUpdateBoardInput } from "./IBoardWrite.types";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { addressValue, modalState } from "../../../../commons/store";

export default function BoardWrite(props: IBoardWriteProps) {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [pwd, setPwd] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [addressTotal, setAddressTotal] = useState("");
  // const [addressTotal, setAddressTotal] = useState({
  //   zipcode: "",
  //   address: "",
  //   addressDetail: "",
  // });

  const [writerMsg, setWriterMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");
  const [titleMsg, setTitleMsg] = useState("");
  const [contentsMsg, setContentsMsg] = useState("");
  const [isRatio] = useState(true);
  const [isModal] = useState(false);

  const [resultValue, setResultValue] = useRecoilState(addressValue);
  console.log(resultValue);

  const InputFunction = {
    writer: (e: ChangeEvent<HTMLInputElement>) => {
      setWriter(e.target.value);
      if (writer) {
        setWriterMsg("");
      }
    },
    password: (e: ChangeEvent<HTMLInputElement>) => {
      setPwd(e.target.value);
      if (pwd) {
        setPwdMsg("");
      }
    },
    title: (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
      if (title) {
        setTitleMsg("");
      }
    },
    contents: (e: ChangeEvent<HTMLInputElement>) => {
      setContents(e.target.value);
      if (contents) {
        setContentsMsg("");
      }
    },
    youtubeUrl: (e: ChangeEvent<HTMLInputElement>) => {
      setYoutubeUrl(e.target.value);
    },
    // address: () => {},
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // useEffect(() => {
  //   if (props.data?.fetchBoard.images?.length) {
  //     setFileUrls([...props.data?.fetchBoard.images]);
  //   }
  // }, [props.data]);

  const SignupChk = async () => {
    if (writer !== "" && pwd !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password: pwd,
              title,
              contents,
              youtubeUrl,
              images: fileUrls,
              boardAddress: {
                zipcode: "ddd",
                address: "resultValue.fullAddress",
                addressDetail: "resultValue.detailAddress",
              },
            },
          },
        });
        Modal.success({
          content: "게시글이 등록되었습니다.",
          onOk: () => {
            location.replace(`/PostDetail/${result.data?.createBoard._id}`);
          },
        });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
    if (writer === "") {
      setWriterMsg("이름을 입력하세요");
    }

    if (pwd === "") {
      setPwdMsg("비밀번호를 입력하세요");
    }
    if (title === "") {
      setTitleMsg("제목을 입력하세요");
    }
    if (contents === "") {
      setContentsMsg("내용을 입력하세요");
    }
  };

  const onClickUpdateBtn = async () => {
    const updateBoardInput: IUpdateBoardInput = {};

    if (title === "" || contents === "") {
      alert("제목, 내용의 변경사항이 작성되지 않았다.");
    }
    // 변경사항이 있으면 updateBoard에 보내고, 없으면 안보냄
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.name),
          password: pwd,
          updateBoardInput,
        },
      });
      Modal.success({
        content: "수정되었습니다.",
        onOk: () => {
          location.replace(`/PostDetail/${result.data?.updateBoard._id}`);
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }

    if (!pwd) {
      setPwdMsg("비밀번호를 입력하세요");
    }
  };
  const onClickFindAddressModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <BoardWriteUI
        InputFunction={InputFunction}
        SignupChk={SignupChk}
        onClickUpdateBtn={onClickUpdateBtn}
        onClickFindAddressModal={onClickFindAddressModal}
        writerMsg={writerMsg}
        pwdMsg={pwdMsg}
        titleMsg={titleMsg}
        contentsMsg={contentsMsg}
        isRatio={isRatio}
        isModal={isModal}
        btnState={props.btnState}
        data={props.data}
        onChangeFileUrls={onChangeFileUrls}
        fileUrls={fileUrls}
      />
    </>
  );
}
