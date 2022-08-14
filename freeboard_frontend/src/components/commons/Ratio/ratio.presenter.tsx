import { Radio } from "antd";
import UrlInputContainer from "../InputUrl/urlInput.container";
import UploadImg from "../upload/01/uploadImg.container";
import { v4 as uuidv4 } from "uuid";

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
        <>
          {props.fileUrls.map((el, index) => (
            <UploadImg
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </>
      )}
    </>
  );
}
