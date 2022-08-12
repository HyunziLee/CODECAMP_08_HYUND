import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { schema } from "../../../commons/yup/signup";
import { CREATE_USER } from "../queries";
import SignUpUI from "./signup.presenter";

export default function SignUpContainer() {
  const { onClickMovetoPage } = useMoveToPage();

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = (data) => {
    console.log(data);
    if (!(data.email && data.password && data.name)) {
      return;
    }
    try {
      const result = createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      alert("회원가입 되었습니다.");
      onClickMovetoPage(`/Login`);
    } catch (error) {}
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
