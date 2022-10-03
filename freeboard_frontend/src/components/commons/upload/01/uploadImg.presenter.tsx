import * as s from "./uploadImg.styles";
import { IUploadImgUIProps } from "./uploadImg.types";

export default function UploadImgUI(props: IUploadImgUIProps) {
  return (
    <>
      {props.fileUrl ? (
        <s.UploadImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <s.UploadBtn onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>
        </s.UploadBtn>
      )}
      <s.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
