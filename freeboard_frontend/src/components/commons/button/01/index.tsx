import styled from "@emotion/styled";

export const LoginButton = styled.button`
  width: 600px;
  height: 70px;
  background-color: ${(props) => props.color};
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  line-height: 70px;
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
`;
export default function Button01(props) {
  const { onClick, type, title, color } = props;
  console.log(props);
  return (
    <LoginButton onClick={onClick} type={type} color={color}>
      {title}
    </LoginButton>
  );
}
