import { Radio } from "antd";
import UrlInputContainer from "../InputUrl/urlInput.container";
import UploadImgContainer from "../UploadImg/upload.container";

export default function RatioUI(props) {
  return (
    <>
      <Radio.Group onChange={props.onChange} value={props.value}>
        <Radio value={1}>유튜브</Radio>
        <Radio value={2}>이미지</Radio>
      </Radio.Group>
      {props.value === 1 ? (
        <UrlInputContainer InputFunction={props.InputFunction} />
      ) : (
        <UploadImgContainer />
      )}
    </>
  );
}
