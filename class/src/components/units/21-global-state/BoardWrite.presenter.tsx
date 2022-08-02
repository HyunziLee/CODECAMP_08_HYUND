import { useRecoilState } from "recoil";
import { isEditState } from "../../commons/store";

export default function BoardWriteUI() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  return (
    <>
      <div>{isEdit ? "수정" : "등록"}</div>
    </>
  );
}
