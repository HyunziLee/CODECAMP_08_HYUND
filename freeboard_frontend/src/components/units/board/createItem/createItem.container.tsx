import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";

import { KakaoMapAddress, TagArr } from "../../../../commons/store";
import { schema } from "../../../commons/yup/createItem";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
} from "../queries";
import CreateItemUI from "./createItem.presenter";
import { ICreateItemProps, IUseForm } from "./createItem.types";

export default function CreateItemContainer(props: ICreateItemProps) {
  const [tags] = useRecoilState(TagArr);
  const [kakaoAddress] = useRecoilState(KakaoMapAddress);
  const [fileUrls, setFileUrls] = useState(["", "", "", "", ""]);
  const router = useRouter();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IUseForm>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickCreateItem = async (data: IUseForm) => {
    console.log(kakaoAddress);

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: Number(data.price),
            tags,
            images: fileUrls,
            contents: data.contents,
            // useditemAddress: {
            //   zipcode: kakaoAddress.address?.main_address_no,
            //   address: kakaoAddress.address?.address_name,
            //   addressDetail:
            //     kakaoAddress.road_address?.address_name.building_name,
            //   lat: la,
            //   lng: ma,
            // },
          },
        },
      });

      router.push(`/CreateItemSuccess/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickUpdate = async (data: IUseForm) => {
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: Number(data.price),
            tags,
            images: fileUrls,
            contents: data.contents,
            // useditemAddress: {
            //   zipcode: kakaoAddress.road_address?.zone_no,
            //   address: kakaoAddress.road_address?.address_name,
            //   addressDetail:
            //     kakaoAddress.road_address?.address_name.building_name,
            //   lat: la,
            //   lng: ma,
            // },
          },

          useditemId: String(router.query.id),
        },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: String(router.query.id) },
          },
        ],
      });
      router.push(`/CreateItemSuccess/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <CreateItemUI
      onChangeContents={onChangeContents}
      register={register}
      handleSubmit={handleSubmit}
      onClickCreateItem={onClickCreateItem}
      formState={formState}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onClickUpdate={onClickUpdate}
      data={props.data}
    />
  );
}
