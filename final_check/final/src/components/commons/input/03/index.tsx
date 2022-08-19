import styled from "@emotion/styled";

export const InfoInput = styled.input`
  width: 100%;
  height: 56px;
  border: none;

  background-color: #e9e9e9;
`;

export default function Input03(props) {
  return <InfoInput {...props.register(props.name)}></InfoInput>;
}
