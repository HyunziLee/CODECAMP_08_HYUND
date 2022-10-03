import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import { isEditState } from "../../../src/commons/store";
import CreateItemContainer from "../../../src/components/units/board/createItem/createItem.container";
import { FETCH_USED_ITEM } from "../../../src/components/units/board/queries";

export default function CreateItemEditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState); // eslint-disable-line no-unused-vars
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.id),
    },
  });
  setIsEdit(true);
  return <CreateItemContainer data={data?.fetchUseditem} />;
}
