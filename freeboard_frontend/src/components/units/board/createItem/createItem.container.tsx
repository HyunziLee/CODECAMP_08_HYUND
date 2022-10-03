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

import {
  KakaoMapAddress,
  markerValue,
  TagArr,
} from "../../../../commons/store";
import { schema } from "../../../commons/yup/createItem";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
} from "../queries";
import CreateItemUI from "./createItem.presenter";
import { ICreateItemProps, IUseForm } from "./createItem.types";
import { Modal } from "antd";

export default function CreateItemContainer(props: ICreateItemProps) {
  const [tags] = useRecoilState(TagArr);
  const [kakaoAddress] = useRecoilState(KakaoMapAddress);
  const [marker] = useRecoilState(markerValue);
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
    if (!data.name || !data.remarks || !data.price || !data.contents) return;
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: String(data.name),
            remarks: String(data.remarks),
            price: data.price,
            tags,
            images: fileUrls,
            contents: String(data.contents),
            useditemAddress: {
              zipcode: kakaoAddress.road_address
                ? kakaoAddress.road_address.zone_no
                : "",
              address: kakaoAddress.road_address
                ? kakaoAddress.road_address.address_name
                : kakaoAddress.address.address_name,
              addressDetail: kakaoAddress.road_address
                ? kakaoAddress.road_address.building_name
                : kakaoAddress.address.main_address_no,
              lat: marker.La,
              lng: marker.Ma,
            },
          },
        },
      });
      if (result)
        Modal.success({
          content: "상품이 등록되었습니다.",
          onOk: () =>
            router.push(
              `/CreateItemSuccess/${result.data?.createUseditem._id}`
            ),
        });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: IUseForm) => {
    if (!data.name || !data.remarks || !data.price || !data.contents) return;
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
            useditemAddress: {
              zipcode: kakaoAddress.road_address
                ? kakaoAddress.road_address.zone_no
                : "",
              address: kakaoAddress.road_address
                ? kakaoAddress.road_address.address_name
                : kakaoAddress.address.address_name,
              addressDetail: kakaoAddress.road_address
                ? kakaoAddress.road_address.building_name
                : kakaoAddress.address.main_address_no,
              lat: marker.La,
              lng: marker.Ma,
            },
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
      if (result)
        Modal.success({
          content: "상품이 수정되었습니다.",
          onOk: () =>
            router.push(
              `/CreateItemSuccess/${result.data?.updateUseditem._id}`
            ),
        });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
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
