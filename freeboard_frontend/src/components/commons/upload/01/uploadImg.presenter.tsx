import * as s from "./uploadImg.styles";

export default function UploadImgUI(props) {
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
