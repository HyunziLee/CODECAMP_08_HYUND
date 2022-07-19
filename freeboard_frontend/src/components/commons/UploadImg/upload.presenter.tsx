import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

export default function UploadImgUI(props) {
  return (
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={props.fileList}
        onChange={props.onChange}
        onPreview={props.onPreview}
      >
        {props.fileList.length < 5 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
}
