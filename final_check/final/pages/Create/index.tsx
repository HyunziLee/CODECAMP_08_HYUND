import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
import { withAuth } from "../../src/components/commons/hoc/withAuth";
import CreateContainer from "../../src/components/units/board/create/create.container";

function CreatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  setIsEdit(false);
  return <CreateContainer isEdit={isEdit} />;
}
export default withAuth(CreatePage);
