import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";

import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { schema } from "../../../commons/yup/signup";
import { CREATE_USER } from "../queries";
import SignUpUI from "./signup.presenter";
import { FormValue } from "./signup.types";

export default function SignUpContainer() {
  const { onClickMovetoPage } = useMoveToPage();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const { register, handleSubmit, formState } = useForm<FormValue>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  // dd
  const onClickSignUp = async (data: FormValue) => {
    if (!(data.email && data.password && data.name)) {
      return;
    }
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,

            name: data.name,
          },
        },
      });
      Modal.success({
        content: "회원가입 되었습니다.",
        onOk: () => location.replace(`/login`),
      });
      onClickMovetoPage(`/Login`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <SignUpUI
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onClickSignUp={onClickSignUp}
      />
    </>
  );
}
