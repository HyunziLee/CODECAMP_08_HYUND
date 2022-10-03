import BoardWrite from "../write/BoardWrite.container";
import { IEditFormProps } from "./boardEdit.types";

export default function PostEdit(props: IEditFormProps) {
  return <BoardWrite data={props.data} btnState={false} />;
}
