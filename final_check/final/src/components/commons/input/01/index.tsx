import styled from "@emotion/styled";

export const LoginUserInput = styled.input`
  width: 600px;
  height: 77.48px;
  background: #f6f6f6;
  border: 1px solid #cccccc;
  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 20px;
`;

export default function Input01(props) {
  return (
    <LoginUserInput
      {...props.register(props.name)}
      placeholder={props.ph}
    ></LoginUserInput>
  );
}
