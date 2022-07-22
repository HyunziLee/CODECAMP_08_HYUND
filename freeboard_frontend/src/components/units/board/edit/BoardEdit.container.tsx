import BoardWrite from "../write/BoardWrite.container";
import { IEditFormProps } from "./IBoardEdit.types";

export default function PostEdit(props: IEditFormProps) {
  return <BoardWrite data={props.data} btnState={false} />;
  // return <BoardWrite btnState={props.btnState} data={props.data} />;
}
