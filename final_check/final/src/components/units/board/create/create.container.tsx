import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  KakaoMapAddress,
  KakaoMapLa,
  KakaoMapMa,
  loginInfo,
  TagArr,
  userInfoState,
} from "../../../../commons/store";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { yupResolver } from "@hookform/resolvers/yup";

import CreateUI from "./create.presenter";
import { schema } from "../../../commons/yup/create";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "../../../../commons/gql";
import { useRouter } from "next/router";
import { withAuth } from "../../../commons/hoc/withAuth";
export default function CreateContainer(props) {
  const { onClickMovetoPage } = useMoveToPage();
  const [tags] = useRecoilState(TagArr);
  const [kakaoAddress] = useRecoilState(KakaoMapAddress);
  const [la, setLa] = useRecoilState(KakaoMapLa);
  const [ma, setMa] = useRecoilState(KakaoMapMa);
  const [fileUrls, setFileUrls] = useState(["", ""]);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const router = useRouter();

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

    // if (!userInfo) return;

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
            useditemAddress: {
              zipcode: kakaoAddress.road_address?.zone_no,
              address: kakaoAddress.road_address?.address_name,
              addressDetail:
                kakaoAddress.road_address?.address_name.building_name,
              lat: la,
              lng: ma,
            },
          },
        },
      });

      console.log(result.data?.createUseditem);
      router.push(`/Detail/${result.data?.createUseditem._id}`);
      // onClickMovetoPage(`/Detail/${result.data?.createUseditem._id}`);
    } catch (error) {
      // if (error instanceof Error) console.log(error.message);
      alert(error.message);
    }
  };

  const onClickUpdate = async (data) => {
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
              zipcode: kakaoAddress.road_address?.zone_no,
              address: kakaoAddress.road_address?.address_name,
              addressDetail:
                kakaoAddress.road_address?.address_name.building_name,
              lat: la,
              lng: ma,
            },
          },
          useditemId: router.query.id,
        },
      });
      console.log(result);
      router.push(`/Detail/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <CreateUI
      onChangeContents={onChangeContents}
      register={register}
      handleSubmit={handleSubmit}
      onClickCreateItem={onClickCreateItem}
      formState={formState}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onClickMovetoPage={onClickMovetoPage}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      data={props.data}
    />
  );
}
