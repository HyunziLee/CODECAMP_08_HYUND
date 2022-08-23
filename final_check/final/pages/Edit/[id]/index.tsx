import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { FETCH_USED_ITEM } from "../../../src/commons/gql";
import { isEditState } from "../../../src/commons/store";
import { withAuth } from "../../../src/components/commons/hoc/withAuth";
import CreateContainer from "../../../src/components/units/board/create/create.container";

function EditPage() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  setIsEdit(true);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.id,
    },
  });

  return <CreateContainer isEdit={isEdit} data={data} />;
}

export default withAuth(EditPage);
