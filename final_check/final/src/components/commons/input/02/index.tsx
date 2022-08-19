import styled from "@emotion/styled";

export const InfoInput = styled.input`
  width: 786.96px;
  height: 64px;

  font-size: 20px;

  background: #f6f6f6;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export default function Input02(props) {
  return <InfoInput {...props.register(props.name)}></InfoInput>;
}
