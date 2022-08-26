import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationDeleteUseditemArgs,
  IMutationUpdateBoardArgs,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { CheckFileValidation } from "../../../commons/Function/checkFileValidation";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import {
  isEditState,
  KakaoMapAddress,
  loginInfo,
  TagArr,
} from "../../../commons/store";
import { schema } from "../../../commons/yup/createItem";
import {
  CREATE_USED_ITEM,
  FETCH_USED_ITEM,
  UPDATE_USED_ITEM,
} from "../queries";
import CreateItemUI from "./createItem.presenter";

export default function CreateItemContainer(props) {
  const { onClickMovetoPage } = useMoveToPage();
  const [tags] = useRecoilState(TagArr);
  const [kakaoAddress] = useRecoilState(KakaoMapAddress);
  const [fileUrls, setFileUrls] = useState(["", "", "", "", ""]);
  const [userInfo, setUserInfo] = useRecoilState(loginInfo);
  const router = useRouter();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const { register, handleSubmit, formState, setValue, trigger, getValues } =
    useForm({
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

  const onClickCreateItem = async (data) => {
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
            //   zipcode: kakaoAddress.road_address?.zone_no,
            //   address: kakaoAddress.road_address?.address_name,
            //   addressDetail:
            //     kakaoAddress.road_address?.address_name.building_name,
            //   lat: la,
            //   lng: ma,
            // },
          },
        },
      });

      console.log(result.data?.createUseditem._id);
      // onClickMovetoPage(
      //   `/CreateItemSuccess/${result.data?.createUseditem._id}`
      // );
      router.push(`/CreateItemSuccess/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickUpdate = async (data) => {
    console.log(data);
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
          useditemId: router.query.id,
        },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: router.query.id },
          },
        ],
      });
      console.log(result);
      router.push(`/CreateItemSuccess/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <>
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
    </>
  );
}
