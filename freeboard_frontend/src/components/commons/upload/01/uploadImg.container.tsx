import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "../../../units/board/queries";
import { CheckFileValidation } from "../../Function/checkFileValidation";
import { UploadImgState } from "../../store";
import UploadImgUI from "./uploadImg.presenter";

export default function UploadImg(props) {
  const [uploadUrl, setUploadUrl] = useRecoilState(UploadImgState);
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

      if (!result.data?.uploadFile.url) {
        return;
      } else {
        setUploadUrl(result.data?.uploadFile.url);

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