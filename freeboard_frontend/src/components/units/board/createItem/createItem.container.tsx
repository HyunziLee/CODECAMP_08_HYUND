import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { schema } from "../../../commons/yup/createItem";
import { CREATE_USED_ITEM } from "../queries";
import CreateItemUI from "./createItem.presenter";

export default function CreateItemContainer() {
  const { onClickMovetoPage } = useMoveToPage();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickCreateItem = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: Number(data.price),
            tags: data.tags,
            images: ["a", "d", "c"],
            contents: data.contents,
          },
        },
      });

      console.log(result.data?.createUseditem._id);
      onClickMovetoPage(
        `/CreateItemSuccess/${result.data?.createUseditem._id}`
      );
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
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
      />
    </>
  );
}
