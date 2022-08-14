import {
  ImageBig,
  ImageSmallWrapper,
  ImageWrapper,
  UploadBtn,
  UploadFileHidden,
  UploadImg,
} from "../../../../../styles/uploadImg.styles";

export default function UploadImgUI(props) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadBtn onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>
        </UploadBtn>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
