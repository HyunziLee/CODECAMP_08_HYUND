import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import DaumPostcodeEmbed from "react-daum-postcode";

import { CREATE_BOARD, UPDATE_BOARD } from "../queries";
import BoardWriteUI from "./BoardWrite.presenter";
import RatioContainer from "../../../commons/Ratio/ratio.container";

export default function BoardWrite(props) {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [pwd, setPwd] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
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
  const [isRatio, setIsRatio] = useState(true);

  const InputFunction = {
    writer: (e) => {
      setWriter(e.target.value);
      if (writer) {
        setWriterMsg("");
      }
    },
    password: (e) => {
      setPwd(e.target.value);
      if (pwd) {
        setPwdMsg("");
      }
    },
    title: (e) => {
      setTitle(e.target.value);
      if (title) {
        setTitleMsg("");
      }
    },
    contents: (e) => {
      setContents(e.target.value);
      if (contents) {
        setContentsMsg("");
      }
    },
    youtubeUrl: (e) => {
      setYoutubeUrl(e.target.value);
    },
    address: (e) => {
      const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
          if (data.bname !== "") {
            extraAddress += data.bname;
          }
          if (data.buildingName !== "") {
            extraAddress +=
              extraAddress !== ""
                ? `, ${data.buildingName}`
                : data.buildingName;
          }
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        setAddressTotal(fullAddress);
      };
    },
  };

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
              boardAddress: {
                zipcode: "ddd",
                address: "ddd",
                addressDetail: "dddd",
              },
            },
          },
        });

        console.log(result.data);
        router.push(`/PostDetail/${result.data.createBoard._id}`);

        console.log(router);
      } catch (error) {
        console.log(error.message);
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
    const updateBoardInput = {};

    if (title === "" || contents === "") {
      alert("제목, 내용의 변경사항이 작성되지 않았다.");
    }
    // 변경사항이 있으면 updateBoard에 보내고, 없으면 안보냄
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.name,
          password: pwd,
          updateBoardInput: updateBoardInput,
        },
      });
      router.push(`/PostDetail/${result.data.updateBoard._id}`);
      console.log(result.data);
      console.log(router);
    } catch (error) {
      alert(error.message);
      // console.log(error.message)
    }

    if (!pwd) {
      setPwdMsg("비밀번호를 입력하세요");
    }
  };

  return (
    <>
      <BoardWriteUI
        InputFunction={InputFunction}
        SignupChk={SignupChk}
        writerMsg={writerMsg}
        pwdMsg={pwdMsg}
        titleMsg={titleMsg}
        contentsMsg={contentsMsg}
        btnState={props.btnState}
        onClickUpdateBtn={onClickUpdateBtn}
        data={props.data}
        isRatio={isRatio}
      />
      <DaumPostcodeEmbed onComplete={InputFunction.address} />
    </>
  );
}
