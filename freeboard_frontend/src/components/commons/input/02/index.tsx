import styled from "@emotion/styled";
// import { Maybe } from "graphql/jsutils/Maybe";
// import { UseFormRegister } from "react-hook-form";

// import { IUseForm } from "../../../units/board/createItem/createItem.types";
// import { FormValue } from "../../../units/board/signup/signup.types";

export const InfoInput = styled.input<{ width: string }>`
  width: ${(props) => props.width};
  height: 50px;
  font-size: 20px;
  border: none;
  border-bottom: solid 1px #555;
  background: #ffffff;
  &:focus {
    outline: none;
  }
`;

// export interface IUseForm {
//   name: string;
//   remarks: string;
//   price: number;
//   contents: string;
// }

// export interface FormValue {
//   email: string;
//   password: string;
//   name: string;
// }

// interface IInputProps {
//   type: string;

//   register: UseFormRegister<IUseForm> | UseFormRegister<FormValue>;
//   name: string;
//   defaultValue: string | Maybe<number> | undefined;
//   width: string;
// }
// IInputProps
export default function Input02(props: any) {
  const { name, register, type, width, defaultValue } = props;
  return (
    <InfoInput
      {...register(name)}
      type={type}
      name={name}
      width={width}
      defaultValue={defaultValue}
    />
  );
}
