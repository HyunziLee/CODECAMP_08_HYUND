import styled from "@emotion/styled";
import { UseFormRegister } from "react-hook-form";

import { IUseForm } from "../../../units/board/createItem/createItem.types";

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

interface IInputProps {
  name: "name" | "remarks" | "price" | "contents";
  register: UseFormRegister<IUseForm>;
  type: string;
  width: string;
  defaultValue?: string | number | undefined;
}

export default function Input02(props: IInputProps) {
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
