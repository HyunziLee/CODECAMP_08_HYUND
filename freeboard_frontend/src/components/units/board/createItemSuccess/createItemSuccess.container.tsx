import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { detailImgState } from "../../../../commons/store";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEMS,
} from "../queries";
import CreateItemSuccessUI from "./createItemSuccess.presenter";
import { Modal } from "antd";

export default function CreateItemSuccess() {
  const router = useRouter();

  const [bigImg, setBigImg] = useRecoilState(detailImgState); // eslint-disable-line no-unused-vars

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const [deleteUsedItem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.id),
    },
  });

  const onClickImg = (Img: string) => () => {
    setBigImg(Img);
  };

  const onClickBuying = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.id,
        },
        refetchQueries: [{ query: FETCH_USED_ITEMS }],
      });
      Modal.success({
        content: "구매 완료했습니다.",
        onOk: () => location.replace("/market"),
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "로그인 후 이용가능합니다." });
    }
  };

  const onClickEdit = (id: string) => () => {
    router.push(`/CreateItemEdit/${id}`);
  };

  const onClickDelete = (useditemId: string) => async () => {
    try {
      await deleteUsedItem({
        variables: { useditemId },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });
      Modal.success({
        content: "삭제 완료했습니다.",
        onOk: () => location.replace("/market"),
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <CreateItemSuccessUI
      data={data?.fetchUseditem}
      onClickImg={onClickImg}
      onClickBuying={onClickBuying}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
    />
  );
}
