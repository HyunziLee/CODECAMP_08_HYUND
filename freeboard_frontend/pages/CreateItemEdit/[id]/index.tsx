import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import { isEditState } from "../../../src/components/commons/store";
import CreateItemContainer from "../../../src/components/units/board/createItem/createItem.container";
import { FETCH_USED_ITEM } from "../../../src/components/units/board/queries";

export default function CreateItemEditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.id,
    },
  });
  return (
    <>
      {setIsEdit(true)}
      <CreateItemContainer isEdit={isEdit} data={data} />
    </>
  );
}
