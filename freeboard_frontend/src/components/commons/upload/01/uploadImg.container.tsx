import { useMutation } from "@apollo/client";
import { useRef } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "../../../units/board/queries";
import { CheckFileValidation } from "../../Function/checkFileValidation";
import UploadImgUI from "./uploadImg.presenter";

export default function UploadImg(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event) => {
    console.log("sadf");
    const isValid = CheckFileValidation(event.target.files?.[0]);
    const file = event.target.files?.[0];
    console.log(file);
    if (!isValid) return;
    try {
      const result = await uploadFile({
        variables: { file },
      });
      console.log(result.data?.uploadFile.url);
      if (!result.data?.uploadFile.url) {
        return;
      } else {
        props.onChangeFileUrls(result.data?.uploadFile.url, props.index);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <UploadImgUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
