import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { KakaoMapAddress, loginInfo, TagArr } from "../../../../commons/store";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { yupResolver } from "@hookform/resolvers/yup";

import CreateUI from "./create.presenter";
import { schema } from "../../../commons/yup/create";
import { CREATE_USED_ITEM } from "../../../../commons/gql";
import { useRouter } from "next/router";

export default function CreateContainer() {
  const { onClickMovetoPage } = useMoveToPage();
  const [tags] = useRecoilState(TagArr);
  const [kakaoAddress] = useRecoilState(KakaoMapAddress);
  const [fileUrls, setFileUrls] = useState(["", ""]);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const [userInfo, setUserInfo] = useRecoilState(loginInfo);

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

  return (
    <CreateUI
      onChangeContents={onChangeContents}
      register={register}
      handleSubmit={handleSubmit}
      onClickCreateItem={onClickCreateItem}
      formState={formState}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
    />
  );
}
