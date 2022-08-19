import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { CREATE_USER } from "../../../../commons/gql";
import { schema } from "../../../commons/yup/signup";
import JoinUI from "./join.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function JoinContainer() {
  const [createUser] = useMutation(CREATE_USER);
  const { onClickMovetoPage } = useMoveToPage();

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
    <JoinUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
      onClickMovetoPage={onClickMovetoPage}
    />
  );
}
