import styled from "@emotion/styled";

export const InfoInput = styled.input`
  width: 600px;
  height: 50px;

  font-size: 20px;

  border: none;
  border-bottom: solid 1px #555;
  background: #ffffff;
  &:focus {
    outline: none;
  }
`;

export default function Input02(props) {
  return <InfoInput {...props.register(props.name)}></InfoInput>;
}
