import styled from "@emotion/styled";

export const InfoInput = styled.input`
  width: 550px;
  height: 40%;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  &:focus {
    outline: 1px solid #cddafd;
  }
`;

export default function Input02(props) {
  return <InfoInput {...props.register(props.name)}></InfoInput>;
}
