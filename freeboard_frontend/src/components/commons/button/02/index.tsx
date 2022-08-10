import styled from "@emotion/styled";

export const SignUpButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.color};
  text-align: center;
  font-size: 12px;
  cursor: pointer;
`;
export default function Button02(props) {
  const { onClick, type, title, color } = props;

  return (
    <SignUpButton onClick={onClick} type={type} color={color}>
      {title}
    </SignUpButton>
  );
}
