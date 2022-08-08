import styled from "@emotion/styled";

export const LoginUserInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: solid 1px #555;
  font-size: 20px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;

export default function Input01(props) {
  return <LoginUserInput {...props.register("email")}></LoginUserInput>;
}
