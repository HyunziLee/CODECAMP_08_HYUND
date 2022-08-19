import styled from "@emotion/styled";

export const SignUpButton = styled.button`
  width: 330px;
  height: 70px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.fontColor};
  text-align: center;
  font-size: 12px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  margin-left: 20px;
  cursor: pointer;
`;
export default function Button02(props) {
  const { onClick, type, title, color, fontColor } = props;

  return (
    <SignUpButton
      onClick={onClick}
      type={type}
      color={color}
      fontColor={fontColor}
    >
      {title}
    </SignUpButton>
  );
}
