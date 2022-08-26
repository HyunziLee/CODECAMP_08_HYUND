import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { detailImgState } from "../../../commons/store";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USED_ITEM,
  FETCH_USED_ITEMS,
} from "../queries";
import CreateItemSuccessUI from "./createItemSuccess.presenter";

export default function CreateItemSuccess() {
  const [bigImg, setBigImg] = useRecoilState(detailImgState);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.id,
    },
  });

  const onClickImg = (Img) => () => {
    console.log(Img);
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
      alert("정상적으로 구매되었습니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    router.push("/Market");
  };
  console.log(data);
  return (
    <CreateItemSuccessUI
      data={data}
      onClickImg={onClickImg}
      onClickBuying={onClickBuying}
    />
  );
}
