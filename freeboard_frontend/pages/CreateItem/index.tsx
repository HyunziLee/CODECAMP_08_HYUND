import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
import CreateItemContainer from "../../src/components/units/board/createItem/createItem.container";

export default function CreateItemPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState); // eslint-disable-line no-unused-vars
  setIsEdit(false);
  return <CreateItemContainer />;
}
