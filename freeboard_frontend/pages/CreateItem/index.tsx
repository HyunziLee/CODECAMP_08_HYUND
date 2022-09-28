import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
import CreateItemContainer from "../../src/components/units/board/createItem/createItem.container";

export default function CreateItemPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  setIsEdit(false);
  return <CreateItemContainer />;
}
