import styled from "@emotion/styled";
import { UseFormRegister } from "react-hook-form";
import { FormValue } from "../../../units/board/login/login.types";

export const LoginUserInput = styled.input<{ width: string }>`
  width: ${(props) => props.width};
  height: 50px;
  border: none;
  border-bottom: solid 1px #555;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

interface IInputProps {
  name: "email" | "password";
  register: UseFormRegister<FormValue>;
  type: string;
  width: string;
}

export default function Input01(props: IInputProps) {
  const { name, register, type, width } = props;
  return <LoginUserInput {...register(name)} type={type} width={width} />;
}
