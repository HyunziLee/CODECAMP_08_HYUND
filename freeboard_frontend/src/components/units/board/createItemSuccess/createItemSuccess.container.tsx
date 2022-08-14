import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { detailImgState } from "../../../commons/store";
import { FETCH_USED_ITEM } from "../queries";
import CreateItemSuccessUI from "./createItemSuccess.presenter";

export default function CreateItemSuccess() {
  const [bigImg, setBigImg] = useRecoilState(detailImgState);
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
  console.log(data);
  return <CreateItemSuccessUI data={data} onClickImg={onClickImg} />;
}
